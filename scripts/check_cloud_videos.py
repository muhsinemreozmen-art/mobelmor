import urllib.request
import json

url = 'https://kzbqqollfqatrauacjhj.supabase.co/rest/v1/products?select=*'
headers = {
    'apikey': 'sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS',
    'Authorization': 'Bearer sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS'
}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print(f"Total cloud products: {len(data)}")
        for p in data:
            if p.get('video_url'):
                print(f"Product ID {p.get('id')}: {p.get('title')} -> {p.get('video_url')}")
except Exception as e:
    print("Error:", e)
