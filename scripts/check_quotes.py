with open("js/detail.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

in_single = False
in_double = False
in_template = False
in_block = False

for idx, line in enumerate(lines):
    col = 0
    while col < len(line):
        c = line[col]
        if not in_single and not in_double and not in_template and not in_block:
            if c == '/' and col + 1 < len(line) and line[col+1] == '/':
                break
            if c == '/' and col + 1 < len(line) and line[col+1] == '*':
                in_block = True
                col += 2
                continue
            if c == "'":
                in_single = True
                col += 1
                continue
            if c == '"':
                in_double = True
                col += 1
                continue
            if c == '`':
                in_template = True
                col += 1
                continue
        elif in_block:
            if c == '*' and col + 1 < len(line) and line[col+1] == '/':
                in_block = False
                col += 2
                continue
        elif in_single:
            if c == '\\':
                col += 2
                continue
            if c == "'":
                in_single = False
        elif in_double:
            if c == '\\':
                col += 2
                continue
            if c == '"':
                in_double = False
        elif in_template:
            if c == '\\':
                col += 2
                continue
            if c == '`':
                in_template = False
        col += 1
    
    if in_single:
        print(f"Line {idx+1}: Unclosed SINGLE quote: {line.strip()[:60]}")
    if in_double:
        print(f"Line {idx+1}: Unclosed DOUBLE quote: {line.strip()[:60]}")

print("Quote check complete!")
