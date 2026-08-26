import urllib.request, json, ssl

url = "https://kzbqqollfqatrauacjhj.supabase.co"
key = "sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(f"{url}/rest/v1/products?select=*", headers={
    "apikey": key,
    "Authorization": f"Bearer {key}"
})

try:
    with urllib.request.urlopen(req, context=ctx) as res:
        data = res.read().decode('utf-8')
        print("Response Code:", res.getcode())
        print("Data:", data[:200])
except Exception as e:
    print("Error:", e)
