import re

def check_js_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    backtick_count = 0
    open_curly = 0
    open_paren = 0
    open_bracket = 0
    in_template = False
    
    content = "".join(lines)
    # Remove single line comments outside of strings (rough check)
    # Count unclosed template literals
    # We can check by tokenizing quotes
    i = 0
    n = len(content)
    line_num = 1
    in_single = False
    in_double = False
    in_backtick = False
    in_line_comment = False
    in_block_comment = False
    
    while i < n:
        c = content[i]
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
            if c == '*' and i + 1 < n and content[i+1] == '/':
                in_block_comment = False
                i += 2
                continue
            i += 1
            continue
            
        if not in_single and not in_double and not in_backtick:
            if c == '/' and i + 1 < n and content[i+1] == '/':
                in_line_comment = True
                i += 2
                continue
            if c == '/' and i + 1 < n and content[i+1] == '*':
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
            
        i += 1
        
    print(f"{filepath}:")
    print(f"  in_single: {in_single}")
    print(f"  in_double: {in_double}")
    print(f"  in_backtick: {in_backtick}")
    print(f"  in_block_comment: {in_block_comment}")
    if not (in_single or in_double or in_backtick or in_block_comment):
        print("  -> SYNTAX OK (no unclosed strings/template literals)")
    else:
        print("  -> ERROR: Unclosed string or template literal!")

check_js_file("js/detail.js")
check_js_file("js/app.js")
check_js_file("js/store-service.js")
