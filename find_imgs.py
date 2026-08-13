import re
with open(r'C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\448\content.md', 'r', encoding='utf-8') as f:
    html = f.read()
imgs = re.findall(r'(https://image\.mobilyaminegolden\.com/[^\s\"\']+)', html)
imgs = [i for i in imgs if '.jpg' in i]
for i in list(set(imgs))[:30]:
    print(i)
