import glob

html_files = glob.glob("*.html")
for f in html_files:
    content = open(f, encoding='utf-8').read()
    if 'js/store-service.js' not in content:
        if 'js/app.js' in content:
            content = content.replace('<script src="js/app.js', '<script src="js/store-service.js?v=20260826_0115"></script>\n    <script src="js/app.js')
            open(f, 'w', encoding='utf-8').write(content)
            print(f"Added store-service.js to {f}")
        elif 'js/detail.js' in content:
            content = content.replace('<script src="js/detail.js', '<script src="js/store-service.js?v=20260826_0115"></script>\n    <script src="js/detail.js')
            open(f, 'w', encoding='utf-8').write(content)
            print(f"Added store-service.js to {f}")

print("Store service scripts attached.")
