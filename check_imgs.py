import json, os

products = json.load(open('clean_5_products.json', encoding='utf-8'))
for p in products:
    main_img = p['image']
    exists = os.path.exists(main_img)
    size = os.path.getsize(main_img) if exists else 0
    print(f"Product {p['id']}: {p['title']}")
    print(f"  Main: {main_img} | Exists: {exists} | Size: {size} bytes")
    for g in p['gallery']:
        g_exists = os.path.exists(g)
        g_size = os.path.getsize(g) if g_exists else 0
        print(f"    Gallery: {g} | Exists: {g_exists} | Size: {g_size} bytes")
