import urllib.request, json, ssl, re

url = "https://kzbqqollfqatrauacjhj.supabase.co"
key = "sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Read products from js/app.js
app_js = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', app_js)
products = json.loads(m.group(1))

payload = []
for p in products:
    payload.append({
        "id": p["id"],
        "title": p["title"],
        "category": p["category"],
        "price": p["price"],
        "original_price": p.get("originalPrice", p["price"]),
        "main_image": p["image"],
        "gallery": p.get("gallery", [p["image"]]),
        "dimensions": p.get("dimensions", ""),
        "material": p.get("material", "İnegöl Masif Ahşap & İthal Kumaş"),
        "skeleton": p.get("skeleton", "%100 Fırınlanmış Masif Gürgen"),
        "sponge": p.get("sponge", "32 Dansite HR Konfor"),
        "fabric": p.get("fabric", "İthal Silinebilir Kumaş"),
        "is_active": p.get("isActive", True)
    })

req = urllib.request.Request(
    f"{url}/rest/v1/products",
    data=json.dumps(payload).encode('utf-8'),
    headers={
        "apikey": key,
        "Authorization": f"Bearer {key}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
    },
    method="POST"
)

try:
    with urllib.request.urlopen(req, context=ctx) as res:
        print("Upload Status:", res.getcode())
        print(f"Successfully uploaded {len(payload)} products to Supabase Cloud Database!")
except Exception as e:
    print("Upload Error:", e)
    if hasattr(e, 'read'):
        print(e.read().decode('utf-8'))
