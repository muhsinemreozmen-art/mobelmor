import re

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"
min_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.min.css"

with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove CSS comments
content = re.sub(r'/\*[\s\S]*?\*/', '', content)
# Remove whitespace around delimiters
content = re.sub(r'\s*([\{\}\:\;\,])\s*', r'\1', content)
# Replace multiple spaces with a single space
content = re.sub(r'\s+', ' ', content)
# Trim
content = content.strip()

with open(min_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Minified CSS: {len(content)} bytes saved!")
