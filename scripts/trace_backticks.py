with open("js/detail.js", "r", encoding="utf-8") as f:
    text = f.read()

in_single = False
in_double = False
in_backtick = False
in_line_comment = False
in_block_comment = False

i = 0
n = len(text)
line_num = 1
last_open_line = 0

while i < n:
    c = text[i]
    if c == '\n':
        line_num += 1
        if in_line_comment:
            in_line_comment = False
        i += 1
        continue
        
    if in_line_comment:
        i += 1
        continue
        
    if in_block_comment:
        if c == '*' and i + 1 < n and text[i+1] == '/':
            in_block_comment = False
            i += 2
            continue
        i += 1
        continue
        
    if not in_single and not in_double and not in_backtick:
        if c == '/' and i + 1 < n and text[i+1] == '/':
            in_line_comment = True
            i += 2
            continue
        if c == '/' and i + 1 < n and text[i+1] == '*':
            in_block_comment = True
            i += 2
            continue
            
    if c == '\\' and (in_single or in_double or in_backtick):
        i += 2
        continue
        
    if c == "'" and not in_double and not in_backtick:
        in_single = not in_single
    elif c == '"' and not in_single and not in_backtick:
        in_double = not in_double
    elif c == '`' and not in_single and not in_double:
        in_backtick = not in_backtick
        if in_backtick:
            last_open_line = line_num
        print(f"Line {line_num}: backtick {'OPEN' if in_backtick else 'CLOSE'}")
        
    i += 1

print(f"FINAL in_backtick: {in_backtick}, last open line: {last_open_line}")
