with open("js/detail.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    # Print every line that contains backtick and its number of backticks
    if '`' in line:
        count = line.count('`')
        print(f"Line {idx+1}: {count} backtick(s) -> {line.strip()[:70]}")
