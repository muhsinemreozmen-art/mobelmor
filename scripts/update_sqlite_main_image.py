import json
import re
import sqlite3

app_content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', app_content)
products = json.loads(m.group(1))

conn = sqlite3.connect('database/mobelmor.db')
cursor = conn.cursor()
for p in products:
    cursor.execute(
        "UPDATE products SET main_image = ? WHERE id = ?",
        (p['image'], p['id'])
    )
conn.commit()
conn.close()
print("Updated SQLite database/mobelmor.db main_image successfully!")
