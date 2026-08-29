app_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js"
with open(app_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

depth = 0
for i, line in enumerate(lines):
    for ch in line:
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth < 0:
                print(f"Brace underflow at line {i+1}: {line.strip()}")
                break

print(f"Total lines: {len(lines)}, Depth at end: {depth}")
