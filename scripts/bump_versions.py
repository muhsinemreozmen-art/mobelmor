import re
import glob

v = "20260829_1335"
html_files = glob.glob("*.html")

for fpath in html_files:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = re.sub(r'js/app\.js\?v=[^"\'\s>]+', f'js/app.js?v={v}', content)
    new_content = re.sub(r'js/detail\.js\?v=[^"\'\s>]+', f'js/detail.js?v={v}', new_content)
    new_content = re.sub(r'css/styles\.min\.css\?v=[^"\'\s>]+', f'css/styles.min.css?v={v}', new_content)
    
    if new_content != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated cache version in {fpath}")
