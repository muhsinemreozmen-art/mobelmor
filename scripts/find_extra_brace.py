with open(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

depth = 0
for idx, line in enumerate(lines, 1):
    clean = line.split("//")[0]
    # Count braces ignoring quotes
    for ch in clean:
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth < 0:
                print(f"Brace went below 0 at line {idx}: {line.strip()}")
                depth = 0

print("Final depth:", depth)
