content = open('js/app.js', encoding='utf-8').read()
start = content.find('const urlParams = new URLSearchParams')
if start != -1:
    print(content[start:start+1200])
