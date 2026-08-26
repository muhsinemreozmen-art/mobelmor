import glob

files = ['uye-ol.html', 'giris-yap.html', 'hesabim.html', 'includes/header.php']
for f in files:
    try:
        content = open(f, encoding='utf-8').read()
        if 'css/style.css' in content:
            content = content.replace('css/style.css', 'css/styles.min.css')
            open(f, 'w', encoding='utf-8').write(content)
            print(f"Fixed stylesheet in {f}")
    except Exception as e:
        print(f"Error {f}: {e}")
