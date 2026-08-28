with open("js/detail.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

in_backtick = False
in_single = False
in_double = False

for idx, line in enumerate(lines):
    i = 0
    n = len(line)
    while i < n:
        c = line[i]
        if c == '\\':
            i += 2
            continue
        if c == "'" and not in_double and not in_backtick:
            in_single = not in_single
        elif c == '"' and not in_single and not in_backtick:
            in_double = not in_double
        elif c == '`' and not in_single and not in_double:
            in_backtick = not in_backtick
            print(f"Line {idx+1} pos {i}: backtick -> in_backtick is now {in_backtick} (line: {line.strip()[:60]})")
        i += 1
