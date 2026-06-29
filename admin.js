// MOCK ORDERS DATABASE
const MOCK_ORDERS = [];

const WooCommerceAdmin = {
  orders: (() => {
    try {
      const saved = localStorage.getItem('nova_orders');
      return saved ? JSON.parse(saved) : [];
    } catch(e) {
      return [];
    }
  })(),

  saveOrdersToStorage() {
    localStorage.setItem('nova_orders', JSON.stringify(this.orders));
  },
  
  // Calculate analytics metrics
  getMetrics(productsList) {
    const totalRevenue = this.orders.reduce((sum, order) => {
      return order.status !== 'failed' ? sum + order.total : sum;
    }, 0);
    
    const validOrdersCount = this.orders.filter(o => o.status !== 'failed').length;
    const aov = validOrdersCount > 0 ? Math.round(totalRevenue / validOrdersCount) : 0;
    
    const totalInStock = productsList.reduce((sum, p) => sum + parseInt(p.stock), 0);
    
    return {
      revenue: totalRevenue,
      orderCount: this.orders.length,
      aov: aov,
      stockCount: totalInStock
    };
  },

  // Add a new order placed from front-end checkout
  addOrder(customerData, cartItems, total) {
    const dateObj = new Date();
    const formattedDate = dateObj.getFullYear() + '-' + 
      String(dateObj.getMonth() + 1).padStart(2, '0') + '-' + 
      String(dateObj.getDate()).padStart(2, '0') + ' ' + 
      String(dateObj.getHours()).padStart(2, '0') + ':' + 
      String(dateObj.getMinutes()).padStart(2, '0');

    const newOrder = {
      id: `NOVA-${1000 + this.orders.length + 1}`,
      date: formattedDate,
      customer: `${customerData.firstName} ${customerData.lastName}`,
      email: customerData.email,
      total: total,
      status: "pending",
      items: cartItems.map(item => ({
        name: item.product.name,
        qty: item.quantity,
        size: item.size
      }))
    };

    this.orders.unshift(newOrder); // Add to the beginning
    this.saveOrdersToStorage();
    return newOrder;
  },

  // Update order status
  updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.saveOrdersToStorage();
      return true;
    }
    return false;
  },

  // Render metrics and graphs
  renderDashboard(productsList) {
    const metrics = this.getMetrics(productsList);
    
    // Fill text indicators
    document.getElementById('admin-revenue-val').innerText = `֏${metrics.revenue.toLocaleString()}`;
    document.getElementById('admin-orders-val').innerText = metrics.orderCount;
    document.getElementById('admin-aov-val').innerText = `֏${metrics.aov}`;
    document.getElementById('admin-stock-val').innerText = metrics.stockCount;

    // Render sales chart by category
    const salesByCategory = { Woody: 0, Floral: 0, Citrus: 0, Amber: 0 };
    
    // Add dynamically calculated totals from new completed/processing orders
    this.orders.forEach(order => {
      if (order.status !== 'failed') {
        order.items.forEach(item => {
          // Find matching category from list
          const prod = productsList.find(p => p.name === item.name);
          if (prod) {
            const itemTotal = item.qty * prod.price; // approximation
            salesByCategory[prod.category] = (salesByCategory[prod.category] || 0) + itemTotal;
          }
        });
      }
    });

    const categories = ['Woody', 'Floral', 'Citrus', 'Amber'];
    const maxVal = Math.max(...categories.map(cat => salesByCategory[cat] || 1));

    categories.forEach(cat => {
      const val = salesByCategory[cat] || 0;
      const pct = maxVal > 0 ? (val / maxVal) * 80 : 0; // max height 80%
      const barElement = document.getElementById(`chart-bar-${cat.toLowerCase()}`);
      const valElement = document.getElementById(`chart-val-${cat.toLowerCase()}`);
      
      if (barElement && valElement) {
        barElement.style.height = `${pct}%`;
        valElement.innerText = `֏${val}`;
      }
    });

    // Render orders table
    this.renderOrdersTable();
  },

  // Render Orders Table in Admin
  renderOrdersTable() {
    const tbody = document.getElementById('admin-orders-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    if (this.orders.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--color-medium-gray); padding: 40px 20px; font-size:0.85rem;">No orders yet. Orders will appear here when customers make purchases.</td></tr>`;
      return;
    }
    
    this.orders.forEach(order => {
      const tr = document.createElement('tr');
      
      const itemsList = order.items.map(i => `${i.name} (${i.size}) x${i.qty}`).join(', ');
      
      const lang = (window.AppState && window.AppState.language) || 'en';
      const trans = window.TRANSLATIONS || {};
      const statusPending = (trans[lang] && trans[lang]['status_pending']) || 'Pending';
      const statusProcessing = (trans[lang] && trans[lang]['status_processing']) || 'Processing';
      const statusCompleted = (trans[lang] && trans[lang]['status_completed']) || 'Completed';
      const statusFailed = (trans[lang] && trans[lang]['status_failed']) || 'Failed';

      const statusLabel = order.status === 'pending' ? statusPending :
                          order.status === 'processing' ? statusProcessing :
                          order.status === 'completed' ? statusCompleted :
                          order.status === 'failed' ? statusFailed : order.status;
      
      tr.innerHTML = `
        <td><strong>#${order.id}</strong></td>
        <td>${order.date}</td>
        <td>
          <div style="font-weight: 500;">${order.customer}</div>
          <div style="font-size: 0.75rem; color: var(--color-medium-gray);">${order.email}</div>
        </td>
        <td style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${itemsList}">${itemsList}</td>
        <td><strong>֏${order.total}</strong></td>
        <td>
          <span class="admin-status-badge badge-${order.status}">${statusLabel}</span>
        </td>
        <td>
          <div style="display:flex; gap:6px; align-items:center;">
            <select class="admin-input" style="width: 110px;" onchange="updateOrderState('${order.id}', this.value)">
              <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>${statusPending}</option>
              <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>${statusProcessing}</option>
              <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>${statusCompleted}</option>
              <option value="failed" ${order.status === 'failed' ? 'selected' : ''}>${statusFailed}</option>
            </select>
            <button onclick="deleteOrder('${order.id}')" style="background:none; border:1px solid var(--color-border); border-radius:4px; padding:4px 6px; cursor:pointer; color:var(--color-medium-gray); transition:all 0.2s;" onmouseover="this.style.borderColor='#C65911'; this.style.color='#C65911';" onmouseout="this.style.borderColor='var(--color-border)'; this.style.color='var(--color-medium-gray)';" title="Delete order">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:14px; height:14px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  // Render Product Inventory Table in Admin
  renderInventoryTable(productsList, onUpdateCallback) {
    const tbody = document.getElementById('admin-inventory-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';
    const lang = (window.AppState && window.AppState.language) || 'en';
    const trans = window.TRANSLATIONS || {};
    const stockIn = (trans[lang] && trans[lang]['in_stock_label']) || 'In Stock';
    const stockOut = (trans[lang] && trans[lang]['out_of_stock_label']) || 'Out of Stock';
    const updateBtnLabel = (trans[lang] && trans[lang]['admin_btn_update']) || 'Update';

    productsList.forEach(product => {
      const tr = document.createElement('tr');
      const stockBadgeClass = product.stock > 0 ? 'badge-instock' : 'badge-outofstock';
      const stockStatusLabel = product.stock > 0 ? stockIn : stockOut;
      const isFeatured = !!product.featured;

      tr.innerHTML = `
        <td><input type="checkbox" class="inv-row-checkbox" value="${product.id}" style="cursor:pointer;"></td>
        <td style="cursor: pointer;" onclick="openDetailedProductModal('${product.id}')"><img src="${product.image}" alt="${product.name}" style="width: 40px; height: 50px; object-fit: cover; border: 1px solid var(--color-border);"></td>
        <td style="cursor: pointer;" onclick="openDetailedProductModal('${product.id}')">
          <div style="font-weight: 500;">${product.name}</div>
          <div style="font-size: 0.7rem; color: var(--color-medium-gray);">${product.brand || ''} · ${product.category}</div>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap: 4px;">
            <span>$</span>
            <input type="number" class="admin-input" style="width: 70px;" value="${product.price}" min="1" id="inv-price-${product.id}">
          </div>
        </td>
        <td>
          <input type="number" class="admin-input" style="width: 60px;" value="${product.stock}" min="0" id="inv-stock-${product.id}">
        </td>
        <td>
          <span class="admin-status-badge ${stockBadgeClass}" id="inv-badge-${product.id}">${stockStatusLabel}</span>
        </td>
        <td>
          <div style="display:flex; gap:6px; align-items:center;">
            <button class="admin-action-btn" onclick="saveProductInventory('${product.id}')" title="Save changes">${updateBtnLabel}</button>
            <button onclick="toggleProductFeatured('${product.id}')" style="background:none; border:none; cursor:pointer; font-size:1.1rem; padding:2px; color:${isFeatured ? '#D4A017' : 'var(--color-border)'}; transition:color 0.2s;" title="${isFeatured ? 'Remove from featured' : 'Mark as featured'}">★</button>
            <button onclick="deleteProduct('${product.id}')" style="background:none; border:1px solid var(--color-border); border-radius:4px; padding:4px 6px; cursor:pointer; color:var(--color-medium-gray); transition:all 0.2s;" onmouseover="this.style.borderColor='#C65911'; this.style.color='#C65911';" onmouseout="this.style.borderColor='var(--color-border)'; this.style.color='var(--color-medium-gray)';" title="Delete product">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:14px; height:14px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
};

// Export or expose globally
window.WooCommerceAdmin = WooCommerceAdmin;
