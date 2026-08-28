with open("js/detail.js", "r", encoding="utf-8") as f:
    text = f.read()

line = 1
depth = 0
in_single = False
in_double = False
in_template = False
in_line = False
in_block = False

i = 0
n = len(text)
while i < n:
    c = text[i]
    if c == '\n':
        line += 1
        in_line = False
        i += 1
        continue
    if in_line:
        i += 1
        continue
    if in_block:
        if c == '*' and i+1 < n and text[i+1] == '/':
            in_block = False
            i += 2
            continue
        i += 1
        continue
    if in_single:
        if c == '\\':
            i += 2
            continue
        if c == "'":
            in_single = False
        i += 1
        continue
    if in_double:
        if c == '\\':
            i += 2
            continue
        if c == '"':
            in_double = False
        i += 1
        continue
    if in_template:
        if c == '\\':
            i += 2
            continue
        if c == '$' and i+1 < n and text[i+1] == '{':
            depth += 1
            i += 2
            continue
        if c == '`':
            in_template = False
        i += 1
        continue
    if c == '/' and i+1 < n and text[i+1] == '/':
        in_line = True
        i += 2
        continue
    if c == '/' and i+1 < n and text[i+1] == '*':
        in_block = True
        i += 2
        continue
    if c == "'":
        in_single = True
        i += 1
        continue
    if c == '"':
        in_double = True
        i += 1
        continue
    if c == '`':
        in_template = True
        i += 1
        continue
    if c == '{':
        depth += 1
    elif c == '}':
        depth -= 1
        if depth < 0:
            print(f"Extra closing brace at line {line}")
            break
    i += 1
print("Final depth:", depth)
