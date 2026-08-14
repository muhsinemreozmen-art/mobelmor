import os
from PIL import Image

ASSETS_DIR = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\assets"

def convert_to_webp():
    count = 0
    total_original = 0
    total_webp = 0
    
    files = [f for f in os.listdir(ASSETS_DIR) if os.path.splitext(f)[1].lower() in ['.jpg', '.jpeg', '.png']]
    print(f"Starting WebP conversion for {len(files)} files...", flush=True)
    
    for fname in files:
        fpath = os.path.join(ASSETS_DIR, fname)
        webp_name = os.path.splitext(fname)[0] + '.webp'
        webp_path = os.path.join(ASSETS_DIR, webp_name)
        
        try:
            original_size = os.path.getsize(fpath)
            with Image.open(fpath) as img:
                if img.mode in ('P', 'LA'):
                    img = img.convert('RGBA')
                elif img.mode == 'CMYK':
                    img = img.convert('RGB')
                
                max_w = 1000
                if img.width > max_w:
                    wpercent = (max_w / float(img.width))
                    hsize = int((float(img.height) * float(wpercent)))
                    img = img.resize((max_w, hsize), Image.Resampling.LANCZOS)
                
                img.save(webp_path, 'WEBP', quality=80)
                
            webp_size = os.path.getsize(webp_path)
            total_original += original_size
            total_webp += webp_size
            count += 1
            if count % 50 == 0:
                print(f"Processed {count}/{len(files)} images...", flush=True)
        except Exception as e:
            print(f"Error converting {fname}: {e}", flush=True)
            
    saved_mb = (total_original - total_webp) / (1024 * 1024)
    print(f"\nWebP Conversion Complete! Converted {count} images.", flush=True)
    print(f"Original: {total_original / (1024*1024):.2f} MB | WebP: {total_webp / (1024*1024):.2f} MB | Saved: {saved_mb:.2f} MB", flush=True)

if __name__ == "__main__":
    convert_to_webp()
