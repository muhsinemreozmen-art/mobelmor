import os
from PIL import Image

ASSETS_DIR = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\assets"

def optimize_pngs():
    total_saved = 0
    count = 0
    
    for fname in os.listdir(ASSETS_DIR):
        ext = os.path.splitext(fname)[1].lower()
        if ext == '.png':
            fpath = os.path.join(ASSETS_DIR, fname)
            original_size = os.path.getsize(fpath)
            
            if original_size < 100 * 1024:
                continue
                
            try:
                with Image.open(fpath) as img:
                    # Convert palette or RGBA to RGB if no transparency, or RGBA for web
                    img_rgba = img.convert('RGBA')
                    
                    # Check if image has transparency
                    alpha = img_rgba.split()[-1]
                    has_alpha = alpha.getextrema() != (255, 255)
                    
                    # Resize if width > 1200px
                    max_w = 1200
                    if img_rgba.width > max_w:
                        wpercent = (max_w / float(img_rgba.width))
                        hsize = int((float(img_rgba.height) * float(wpercent)))
                        img_rgba = img_rgba.resize((max_w, hsize), Image.Resampling.LANCZOS)
                    
                    if not has_alpha:
                        # Convert to RGB JPEG for 80%+ savings
                        rgb_img = img_rgba.convert('RGB')
                        new_fpath = os.path.splitext(fpath)[0] + '.jpg'
                        rgb_img.save(fpath, 'JPEG', quality=82, optimize=True)
                    else:
                        img_rgba.save(fpath, 'PNG', optimize=True)
                            
                new_size = os.path.getsize(fpath)
                saved = original_size - new_size
                if saved > 0:
                    total_saved += saved
                    count += 1
                    print(f"Optimized PNG {fname}: {original_size // 1024} KB -> {new_size // 1024} KB (Saved {saved // 1024} KB)")
            except Exception as e:
                print(f"Error optimizing {fname}: {e}")
                
    print(f"\nPNG Pass Completed! Optimized {count} PNGs. Saved: {total_saved // 1024} KB ({total_saved / (1024*1024):.2f} MB)")

if __name__ == "__main__":
    optimize_pngs()
