with open(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i in range(2580, 3035):
    line = lines[i]
    print(f"{i+1}: {line.strip()}")
