import re

def check_file(filename):
    c = open(filename, encoding='utf-8').read()
    # Check for syntax errors by parsing with basic token stream or inspecting script tags
    print(f"Checking {filename}...")
    lines = c.split('\n')
    current_func = ""
    is_async = False
    for i, line in enumerate(lines, 1):
        if 'function' in line or '=>' in line:
            current_func = line.strip()
            is_async = 'async' in line
        if 'await ' in line and not is_async and 'async' not in line:
            print(f"WARNING {filename}:{i} - await in non-async: {line.strip()} (Current: {current_func})")

check_file('eoz98.html')
check_file('js/store-service.js')
check_file('js/app.js')
print("Check completed successfully!")
