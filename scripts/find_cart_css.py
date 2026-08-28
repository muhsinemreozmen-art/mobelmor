with open("css/styles.css", "r", encoding="utf-8") as f:
    css = f.read()

idx = css.find("cart-drawer")
count = 0
while idx != -1 and count < 20:
    start = max(0, idx - 30)
    end = min(len(css), idx + 80)
    line = css[start:end].replace('\r', '').replace('\n', ' ')
    print(f"pos {idx}: ...{line}...")
    idx = css.find("cart-drawer", idx + 1)
    count += 1

if count == 0:
    print("NOT FOUND - checking styles.min.css")
    with open("css/styles.min.css", "r", encoding="utf-8") as f:
        mincss = f.read()
    idx2 = mincss.find("cart-drawer")
    if idx2 >= 0:
        print(f"Found in min at {idx2}: {mincss[max(0,idx2-20):idx2+100]}")
