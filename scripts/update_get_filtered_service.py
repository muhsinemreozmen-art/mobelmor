import re

content = open('js/app.js', encoding='utf-8').read()

# Replace getFilteredProducts to use StoreService if available
old_filter_code = """const getFilteredProducts = () => {
    const query = (searchQuery || "").toLowerCase();
    let filtered = PRODUCTS.filter(product => {"""

new_filter_code = """const getFilteredProducts = () => {
    const query = (searchQuery || "").toLowerCase();
    const sourceList = (typeof window.StoreService !== 'undefined') ? window.StoreService.getProducts() : PRODUCTS;
    let filtered = sourceList.filter(product => {"""

if old_filter_code in content:
    content = content.replace(old_filter_code, new_filter_code)
    open('js/app.js', 'w', encoding='utf-8').write(content)
    print("Updated getFilteredProducts to use dynamic StoreService!")
else:
    print("Pattern not matched directly, checking...")
