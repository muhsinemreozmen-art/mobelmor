import os

def validate_js(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        code = f.read()

    i = 0
    n = len(code)
    line = 1
    col = 1
    
    stack = ['CODE'] # state stack
    brace_depths = [0]
    
    while i < n:
        c = code[i]
        
        if c == '\n':
            line += 1
            col = 1
            if stack[-1] == 'LINE_COMMENT':
                stack.pop()
            i += 1
            continue
            
        current_state = stack[-1]
        
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
                stack.append('CODE')
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
                stack.append('LINE_COMMENT')
                i += 2
                col += 2
                continue
            if c == '/' and i + 1 < n and code[i+1] == '*':
                stack.append('BLOCK_COMMENT')
                i += 2
                col += 2
                continue
            if c == "'":
                stack.append('SINGLE')
                i += 1
                col += 1
                continue
            if c == '"':
                stack.append('DOUBLE')
                i += 1
                col += 1
                continue
            if c == '`':
                stack.append('TEMPLATE')
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
                elif brace_depths[0] < 0:
                    print(f"Brace depth negative at line {line}, col {col}")
                    break
            i += 1
            col += 1
            continue

    print(f"{filepath} Validation:")
    print(f"  Final stack: {stack}")
    print(f"  Final brace depths: {brace_depths}")
    if stack == ['CODE'] and brace_depths == [0]:
        print("  -> PERFECT SYNTAX (All braces, quotes, and templates properly closed!)")
    else:
        print("  -> SYNTAX ERROR detected!")

validate_js("js/detail.js")
validate_js("js/app.js")
validate_js("js/store-service.js")
