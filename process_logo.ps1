$code = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class ImageProcessor {
    public static void Process(string inFile, string outFile) {
        using (Bitmap bmp = new Bitmap(inFile)) {
            int width = bmp.Width;
            int height = bmp.Height;
            BitmapData data = bmp.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            int bytes = Math.Abs(data.Stride) * height;
            byte[] rgbValues = new byte[bytes];
            Marshal.Copy(data.Scan0, rgbValues, 0, bytes);
            bmp.UnlockBits(data);

            int minX = width, minY = height, maxX = 0, maxY = 0;

            for (int y = 0; y < height; y++) {
                for (int x = 0; x < width; x++) {
                    int i = (y * data.Stride) + (x * 4);
                    byte b = rgbValues[i];
                    byte g = rgbValues[i+1];
                    byte r = rgbValues[i+2];
                    
                    // Use a strict threshold to ignore faint background noise
                    int avg = (r + g + b) / 3;
                    if (avg < 200) {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            int newWidth = maxX - minX + 1;
            int newHeight = maxY - minY + 1;
            using (Bitmap finalBmp = new Bitmap(newWidth, newHeight, PixelFormat.Format32bppArgb)) {
                BitmapData finalData = finalBmp.LockBits(new Rectangle(0, 0, newWidth, newHeight), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
                int finalBytes = Math.Abs(finalData.Stride) * newHeight;
                byte[] finalValues = new byte[finalBytes];

                for (int y = 0; y < newHeight; y++) {
                    for (int x = 0; x < newWidth; x++) {
                        int srcX = minX + x;
                        int srcY = minY + y;
                        int srcI = (srcY * data.Stride) + (srcX * 4);
                        byte b = rgbValues[srcI];
                        byte g = rgbValues[srcI+1];
                        byte r = rgbValues[srcI+2];

                        int alpha = 255 - ((r + g + b) / 3);
                        // Enhance contrast by ensuring faint stuff becomes fully transparent
                        if (alpha < 15) alpha = 0;

                        int destI = (y * finalData.Stride) + (x * 4);
                        finalValues[destI] = 0;     // B
                        finalValues[destI+1] = 0;   // G
                        finalValues[destI+2] = 0;   // R
                        finalValues[destI+3] = (byte)alpha; // A
                    }
                }
                Marshal.Copy(finalValues, 0, finalData.Scan0, finalBytes);
                finalBmp.UnlockBits(finalData);
                finalBmp.Save(outFile, ImageFormat.Png);
            }
        }
    }
}
"@
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[ImageProcessor]::Process("$PWD\assets\nova_refined_logo.png", "$PWD\assets\nova_refined_logo_trans.png")
