content = open('js/app.js', encoding='utf-8').read()
start = content.find('const getFilteredProducts = () => {')
if start != -1:
    print(content[start:start+1800])
