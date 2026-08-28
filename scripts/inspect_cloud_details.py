import urllib.request
import json

url = 'https://kzbqqollfqatrauacjhj.supabase.co/rest/v1/products?select=*'
headers = {
    'apikey': 'sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS',
    'Authorization': 'Bearer sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS'
}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode('utf-8'))
    found = 0
    for p in data:
        mat = p.get('material') or ''
        if 'VIDEO' in mat or 'META' in mat or 'youtu' in mat:
            print(f"ID {p.get('id')}: {p.get('title')} -> {mat}")
            found += 1
    print(f"Total with metadata/video: {found} / {len(data)}")
