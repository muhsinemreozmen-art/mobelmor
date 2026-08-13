import urllib.request
import re

url = "https://www.mobilyaminegolden.com/gold-koltuk-takimi"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
html = urllib.request.urlopen(req).read().decode('utf-8')

print("--- Inspecting Gallery HTML Structures ---")

# Look for image containers
containers = re.findall(r'(<(?:div|ul|a|span)[^>]*class="[^"]*(?:product-image|additional-image|swiper-slide|gallery|image-additional)[^"]*"[^>]*>[\s\S]*?</(?:div|ul|a|span)>)', html)
print(f"Found {len(containers)} gallery containers. Printing first 10:")
for idx, c in enumerate(containers[:10]):
    print(f"\n--- Container {idx+1} ---")
    print(c[:300])

# Look for product-images folder paths specifically for gold-koltuk-takimi
print("\n--- Inspecting Image URLs containing gold-koltuk-takimi ---")
gold_imgs = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/product-images/[^"\'\s>]+gold-koltuk-takimi[^"\'\s>]+', html, re.IGNORECASE)
print(f"Found {len(gold_imgs)} URLs matching product slug 'gold-koltuk-takimi':")
for g in set(gold_imgs):
    print(" -", g)

