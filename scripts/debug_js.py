def debug_js(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        code = f.read()

    i = 0
    n = len(code)
    line = 1
    col = 1
    
    stack = [('CODE', 1)] # (state, line_opened)
    brace_depths = [0]
    
    while i < n:
        c = code[i]
        
        if c == '\n':
            line += 1
            col = 1
            if stack[-1][0] == 'LINE_COMMENT':
                stack.pop()
            i += 1
            continue
            
        current_state = stack[-1][0]
        
        if current_state == 'LINE_COMMENT':
            i += 1
            col += 1
            continue
            
        if current_state == 'BLOCK_COMMENT':
            if c == '*' and i + 1 < n and code[i+1] == '/':
                stack.pop()
                i += 2
                col += 2
                continue
            i += 1
            col += 1
            continue
            
        if current_state == 'SINGLE':
            if c == '\\':
                i += 2
                col += 2
                continue
            if c == "'":
                stack.pop()
            i += 1
            col += 1
            continue
            
        if current_state == 'DOUBLE':
            if c == '\\':
                i += 2
                col += 2
                continue
            if c == '"':
                stack.pop()
            i += 1
            col += 1
            continue
            
        if current_state == 'TEMPLATE':
            if c == '\\':
                i += 2
                col += 2
                continue
            if c == '$' and i + 1 < n and code[i+1] == '{':
                stack.append(('CODE', line))
                brace_depths.append(1)
                i += 2
                col += 2
                continue
            if c == '`':
                stack.pop()
            i += 1
            col += 1
            continue
            
        if current_state == 'CODE':
            if c == '/' and i + 1 < n and code[i+1] == '/':
                stack.append(('LINE_COMMENT', line))
                i += 2
                col += 2
                continue
            if c == '/' and i + 1 < n and code[i+1] == '*':
                stack.append(('BLOCK_COMMENT', line))
                i += 2
                col += 2
                continue
            if c == "'":
                stack.append(('SINGLE', line))
                i += 1
                col += 1
                continue
            if c == '"':
                stack.append(('DOUBLE', line))
                i += 1
                col += 1
                continue
            if c == '`':
                stack.append(('TEMPLATE', line))
                i += 1
                col += 1
                continue
            if c == '{':
                brace_depths[-1] += 1
            elif c == '}':
                brace_depths[-1] -= 1
                if len(brace_depths) > 1 and brace_depths[-1] == 0:
                    brace_depths.pop()
                    stack.pop() # return to TEMPLATE
            i += 1
            col += 1
            continue

    print(f"Debug {filepath}:")
    for s, l in stack:
        print(f"  State: {s}, opened at line: {l}")
    print(f"  Brace depths: {brace_depths}")

debug_js("js/detail.js")
