import glob
import re

VERSION = "20260828_2315"

for fpath in glob.glob("*.html"):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = re.sub(r'css/styles\.min\.css\?v=[^"\']+', f'css/styles.min.css?v={VERSION}', content)
    new_content = re.sub(r'js/detail\.js\?v=[^"\']+', f'js/detail.js?v={VERSION}', new_content)
    new_content = re.sub(r'js/app\.js\?v=[^"\']+', f'js/app.js?v={VERSION}', new_content)
    new_content = re.sub(r'js/store-service\.js\?v=[^"\']+', f'js/store-service.js?v={VERSION}', new_content)
    if new_content != content:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {fpath}")
