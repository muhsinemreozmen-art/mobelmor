content = open('js/detail.js', encoding='utf-8').read()

content = content.replace("const product = PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];", "const product = (typeof window.StoreService !== 'undefined' ? window.StoreService.getProductById(pid) : null) || PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];")

open('js/detail.js', 'w', encoding='utf-8').write(content)
print("Updated detail.js to use StoreService!")
