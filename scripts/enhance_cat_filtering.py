import re

content = open('js/app.js', encoding='utf-8').read()

# Update getFilteredProducts in js/app.js
old_snippet = """const getFilteredProducts = () => {
    const query = (searchQuery || "").toLowerCase();
    const sourceList = (typeof window.StoreService !== 'undefined') ? window.StoreService.getProducts() : PRODUCTS;
    let filtered = sourceList.filter(product => {
        const matchesCat = (currentCategory === "all" || product.category === currentCategory);
        const matchesSubcat = (currentSubcategory === "all" || product.subcategory === currentSubcategory);
        
        const specsText = Object.values(product.specs || {}).join(" ").toLowerCase();
        const matchesSearch = (!query || 
            (product.title || "").toLowerCase().includes(query) || 
            (product.material || "").toLowerCase().includes(query) ||
            (product.desc || "").toLowerCase().includes(query) ||
            specsText.includes(query)
        );
        return matchesCat && matchesSubcat && matchesSearch;
    });"""

new_snippet = """const getFilteredProducts = () => {
    const query = (searchQuery || "").toLowerCase();
    const sourceList = (typeof window.StoreService !== 'undefined') ? window.StoreService.getProducts() : PRODUCTS;
    let filtered = sourceList.filter(product => {
        let matchesCat = true;
        if (currentCategory !== "all") {
            if (currentCategory === "tv-unit" || currentCategory === "tv-uniteleri" || currentCategory === "office") {
                matchesCat = (product.category === "tv-unit" || product.subcategory === "consoles" || (product.title && product.title.toLowerCase().includes("tv")));
            } else {
                matchesCat = (product.category === currentCategory);
            }
        }

        const matchesSubcat = (currentSubcategory === "all" || product.subcategory === currentSubcategory);
        
        const specsText = Object.values(product.specs || {}).join(" ").toLowerCase();
        const matchesSearch = (!query || 
            (product.title || "").toLowerCase().includes(query) || 
            (product.material || "").toLowerCase().includes(query) ||
            (product.desc || "").toLowerCase().includes(query) ||
            specsText.includes(query)
        );
        return matchesCat && matchesSubcat && matchesSearch;
    });"""

if old_snippet in content:
    content = content.replace(old_snippet, new_snippet)
    open('js/app.js', 'w', encoding='utf-8').write(content)
    print("Enhanced category filtering in app.js successfully!")
else:
    print("Warning: Snippet not matched, searching...")
