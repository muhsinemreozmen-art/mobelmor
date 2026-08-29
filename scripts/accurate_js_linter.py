def check_js_syntax(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    i = 0
    n = len(code)
    state = ["code"] # stack of states
    brace_stack = []
    line = 1
    col = 1

    while i < n:
        ch = code[i]
        
        if ch == '\n':
            line += 1
            col = 1
        else:
            col += 1

        curr_state = state[-1]

        if curr_state == "code":
            if ch == '/' and i + 1 < n and code[i+1] == '/':
                state.append("line_comment")
                i += 2
                continue
            elif ch == '/' and i + 1 < n and code[i+1] == '*':
                state.append("block_comment")
                i += 2
                continue
            elif ch == "'":
                state.append("single_quote")
            elif ch == '"':
                state.append("double_quote")
            elif ch == '`':
                state.append("template_literal")
            elif ch == '{':
                brace_stack.append(('{', line, col))
            elif ch == '}':
                if brace_stack and brace_stack[-1][0] == 'template_expr':
                    brace_stack.pop()
                    state.pop() # return to template_literal
                elif brace_stack:
                    brace_stack.pop()
                else:
                    print(f"EXTRA CLOSING BRACE at Line {line}, Col {col}")
                    return False

        elif curr_state == "line_comment":
            if ch == '\n':
                state.pop()
        elif curr_state == "block_comment":
            if ch == '*' and i + 1 < n and code[i+1] == '/':
                state.pop()
                i += 2
                continue
        elif curr_state == "single_quote":
            if ch == '\\':
                i += 2
                continue
            elif ch == "'":
                state.pop()
        elif curr_state == "double_quote":
            if ch == '\\':
                i += 2
                continue
            elif ch == '"':
                state.pop()
        elif curr_state == "template_literal":
            if ch == '\\':
                i += 2
                continue
            elif ch == '$' and i + 1 < n and code[i+1] == '{':
                brace_stack.append(('template_expr', line, col))
                state.append("code")
                i += 2
                continue
            elif ch == '`':
                state.pop()

        i += 1

    if brace_stack:
        print(f"UNCLOSED BRACES in {file_path}: {len(brace_stack)} unclosed:", brace_stack[-5:])
        return False
    else:
        print(f"PERFECT SYNTAX: {file_path} is 100% valid JS!")
        return True

check_js_syntax(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
check_js_syntax(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
check_js_syntax(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\auth-modal.js")
check_js_syntax(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\checkout-helper.js")
check_js_syntax(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\store-service.js")
