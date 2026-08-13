import re
import json
import os
import glob

html_files = [
    r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\188\content.md",
    r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\194\content.md"
]

products = []

for file_path in html_files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    # Find product containers or links
    # Look for image.mobilyaminegolden.com links
    img_urls = set(re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/urunler/[^\s"\'\>]+\.jpg', content))
    print(f"File {os.path.basename(file_path)} found {len(img_urls)} product image URLs.")
    
    # Extract product blocks
    # Search for product names and links
    links = set(re.findall(r'href="(https://www\.mobilyaminegolden\.com/[a-z0-9\-]+)"', content))
    for l in links:
        if not any(x in l for x in ['login', 'account', 'cart', 'checkout', 'contact', 'about', 'blog', 'privacy', 'terms', 'category']):
            print("Product Link Found:", l)

