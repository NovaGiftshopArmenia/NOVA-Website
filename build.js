/**
 * NOVA Build Script — Minifies CSS and JS for production
 * Run: node build.js
 * Creates .min versions alongside originals
 */
const fs = require('fs');
const path = require('path');

// Simple CSS minifier (no dependencies needed)
function minifyCSS(css) {
  return css
    // Remove comments (but not inside strings)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove whitespace around special chars
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')
    // Remove leading/trailing whitespace per line
    .replace(/^\s+|\s+$/gm, '')
    // Collapse multiple whitespace
    .replace(/\s{2,}/g, ' ')
    // Remove semicolons before closing braces
    .replace(/;}/g, '}')
    // Remove empty rules
    .replace(/[^{}]+\{\s*\}/g, '')
    // Trim
    .trim();
}

// Simple JS minifier (basic - removes comments and whitespace)
// For a full minifier use terser, but this handles the 20% low-hanging fruit
function minifyJS(js) {
  let result = '';
  let i = 0;
  let inString = false;
  let stringChar = '';
  let inTemplate = 0;
  let inLineComment = false;
  let inBlockComment = false;
  let lastChar = '';

  while (i < js.length) {
    const c = js[i];
    const next = js[i + 1];

    // Handle line comments
    if (!inString && !inBlockComment && c === '/' && next === '/') {
      inLineComment = true;
      i += 2;
      continue;
    }
    if (inLineComment) {
      if (c === '\n') {
        inLineComment = false;
        result += '\n';
      }
      i++;
      continue;
    }

    // Handle block comments
    if (!inString && !inLineComment && c === '/' && next === '*') {
      inBlockComment = true;
      i += 2;
      continue;
    }
    if (inBlockComment) {
      if (c === '*' && next === '/') {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    // Handle strings
    if (!inString && (c === '"' || c === "'" || c === '`')) {
      inString = true;
      stringChar = c;
      if (c === '`') inTemplate++;
      result += c;
      i++;
      continue;
    }
    if (inString) {
      result += c;
      if (c === '\\') {
        // Skip escaped character
        i++;
        if (i < js.length) result += js[i];
        i++;
        continue;
      }
      if (c === stringChar) {
        inString = false;
        if (c === '`') inTemplate--;
      }
      i++;
      continue;
    }

    // Collapse whitespace outside strings
    if (c === ' ' || c === '\t') {
      // Keep one space if between word characters
      if (result.length > 0 && /\w/.test(result[result.length - 1]) && i + 1 < js.length && /\w/.test(js[i + 1])) {
        result += ' ';
      }
      i++;
      continue;
    }

    // Keep newlines (needed for ASI in JS)
    if (c === '\n' || c === '\r') {
      if (c === '\r' && next === '\n') { i++; }
      // Only keep if last non-ws char could need ASI
      const lastNonWs = result.trimEnd().slice(-1);
      if (lastNonWs && /[a-zA-Z0-9_$)\]"'`+\-]/.test(lastNonWs)) {
        result += '\n';
      }
      i++;
      continue;
    }

    result += c;
    i++;
  }

  return result.trim();
}

// Files to minify
const cssFiles = ['styles.css', 'product.css'];
const jsFiles = ['app.js'];

console.log('NOVA Build — Minifying assets...\n');

cssFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  const original = fs.readFileSync(filePath, 'utf8');
  const minified = minifyCSS(original);
  const outPath = filePath.replace('.css', '.min.css');
  fs.writeFileSync(outPath, minified, 'utf8');
  
  const savings = ((1 - minified.length / original.length) * 100).toFixed(1);
  console.log(`  ✓ ${file}: ${(original.length/1024).toFixed(1)}KB → ${(minified.length/1024).toFixed(1)}KB (${savings}% reduction)`);
});

jsFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  const original = fs.readFileSync(filePath, 'utf8');
  const minified = minifyJS(original);
  const outPath = filePath.replace('.js', '.min.js');
  fs.writeFileSync(outPath, minified, 'utf8');
  
  const savings = ((1 - minified.length / original.length) * 100).toFixed(1);
  console.log(`  ✓ ${file}: ${(original.length/1024).toFixed(1)}KB → ${(minified.length/1024).toFixed(1)}KB (${savings}% reduction)`);
});

console.log('\nBuild complete! Minified files created.');
