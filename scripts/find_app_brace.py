app_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js"
with open(app_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

depth = 0
for line_no, line in enumerate(lines, 1):
    opens = line.count('{')
    closes = line.count('}')
    depth += opens - closes
    if depth < 0:
        print(f"Negative depth at line {line_no}: {line.strip()}")
        break

print(f"Final depth: {depth}")
