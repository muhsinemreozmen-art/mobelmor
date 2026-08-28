with open("js/detail.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

stack = [] # (line_num, col_num)
in_line = False
in_block = False
in_single = False
in_double = False
template_stack = [] # depths of braces when template was opened

for line_idx, line in enumerate(lines):
    col = 0
    while col < len(line):
        c = line[col]
        if in_line:
            break
        if in_block:
            if c == '*' and col + 1 < len(line) and line[col+1] == '/':
                in_block = False
                col += 2
                continue
            col += 1
            continue
        if in_single:
            if c == '\\':
                col += 2
                continue
            if c == "'":
                in_single = False
            col += 1
            continue
        if in_double:
            if c == '\\':
                col += 2
                continue
            if c == '"':
                in_double = False
            col += 1
            continue
        if len(template_stack) > 0 and template_stack[-1] == len(stack):
            # We are inside a template literal, not an interpolation!
            if c == '\\':
                col += 2
                continue
            if c == '$' and col + 1 < len(line) and line[col+1] == '{':
                # interpolation starts
                stack.append((line_idx + 1, col + 1, 'INTERP'))
                col += 2
                continue
            if c == '`':
                template_stack.pop()
            col += 1
            continue
        
        # We are in CODE mode
        if c == '/' and col + 1 < len(line) and line[col+1] == '/':
            in_line = True
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
            template_stack.append(len(stack))
            col += 1
            continue
        if c == '{':
            stack.append((line_idx + 1, col + 1, 'BRACE'))
        elif c == '}':
            if len(stack) == 0:
                print(f"EXTRA CLOSING BRACE at line {line_idx + 1}, col {col + 1}!")
                print(f"Line content: {line.strip()}")
            else:
                opener = stack.pop()
        col += 1
    in_line = False

print(f"Remaining unclosed items on stack: {len(stack)}")
for item in stack[:10]:
    print(f"  Unclosed {item[2]} from line {item[0]}, col {item[1]}")
