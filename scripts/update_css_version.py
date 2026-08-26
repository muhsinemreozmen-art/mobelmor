import glob
import re

for fpath in glob.glob("*.html"):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = re.sub(r'css/styles\.min\.css\?v=[^"\']+', 'css/styles.min.css?v=20260826_0115', content)
    new_content = re.sub(r'js/detail\.js\?v=[^"\']+', 'js/detail.js?v=20260826_0115', new_content)
    new_content = re.sub(r'js/app\.js\?v=[^"\']+', 'js/app.js?v=20260826_0115', new_content)
    if new_content != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {fpath}")
