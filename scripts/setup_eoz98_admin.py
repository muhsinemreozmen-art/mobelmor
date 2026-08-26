import re, os

# 1. Read admin/index.html and create eoz98.html
admin_html = open('admin/index.html', encoding='utf-8').read()
eoz_html = admin_html.replace('../assets/', 'assets/').replace('../js/', 'js/').replace('../index.html', 'index.html')
open('eoz98.html', 'w', encoding='utf-8').write(eoz_html)
print("Created eoz98.html at root")

# 2. Update js/store-service.js
store_c = open('js/store-service.js', encoding='utf-8').read()
new_auth = """        adminLogin: function (username, password) {
            if (username === 'bjk98' && password === 'cocumuyo31!') {
                sessionStorage.setItem('mobelmor_admin_logged', 'true');
                return true;
            }
            return false;
        },"""

store_c = re.sub(
    r'adminLogin:\s*function\s*\(username,\s*password\)\s*\{[\s\S]*?return\s+false;\s*\},',
    new_auth,
    store_c
)
open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Updated js/store-service.js with credentials: bjk98 / cocumuyo31!")

# 3. Update vercel.json
vercel_c = open('vercel.json', encoding='utf-8').read()
# Replace /admin rewrite with /eoz98 rewrite
vercel_c = vercel_c.replace('{ "source": "/admin", "destination": "/admin/index.html" },', '{ "source": "/eoz98", "destination": "/eoz98.html" },')
open('vercel.json', 'w', encoding='utf-8').write(vercel_c)
print("Updated vercel.json rewrites: /eoz98 -> /eoz98.html")
