/* ==========================================
   mobelmor.com - Clean URL Engine (v=10000)
   ========================================== */

(function() {
    // 1. Instantly clean "index.html" from browser URL bar if user lands on mobelmor.com/index.html
    if (window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('index.html')) {
        var cleanPath = window.location.pathname.replace(/\/index\.html$/, '/').replace(/index\.html$/, '');
        if (!cleanPath) cleanPath = './';
        var newUrl = window.location.origin + cleanPath + window.location.search + window.location.hash;
        window.history.replaceState(null, '', newUrl);
    }

    // 2. Turkish Slugify Helper
    window.slugify = function(text) {
        if (!text) return '';
        var trMap = { 
            'ç':'c', 'Ç':'c', 'ğ':'g', 'Ğ':'g', 'ı':'i', 'I':'i', 
            'İ':'i', 'ö':'o', 'Ö':'o', 'ş':'s', 'Ş':'s', 'ü':'u', 'Ü':'u' 
        };
        return text.toString().toLowerCase()
            .replace(/[çğıöşüÇĞİÖŞÜ]/g, function(match) { return trMap[match] || match; })
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    // 3. Category Slug Mapping
    window.CATEGORY_SLUGS = {
        'living': 'oturma-odasi',
        'dining': 'yemek-odasi',
        'bedroom': 'yatak-odasi',
        'office': 'tv-uniteleri',
        'all': 'tum-koleksiyon'
    };

    window.SLUG_TO_CATEGORY = {
        'oturma-odasi': 'living',
        'koltuk-takimlari': 'living',
        'living': 'living',
        'yemek-odasi': 'dining',
        'yemek-odalari': 'dining',
        'dining': 'dining',
        'yatak-odasi': 'bedroom',
        'yatak-odalari': 'bedroom',
        'bedroom': 'bedroom',
        'tv-uniteleri': 'office',
        'tv-unitesi': 'office',
        'office': 'office',
        'tum-koleksiyon': 'all',
        'all': 'all'
    };

    // 4. URL Builder Helpers
    window.getCleanHomeUrl = function() {
        return './';
    };

    window.getCleanCategoryUrl = function(categoryKey, subcategoryKey) {
        var slug = window.CATEGORY_SLUGS[categoryKey] || categoryKey || 'tum-koleksiyon';
        if (subcategoryKey && subcategoryKey !== 'all') {
            return `kategori.html?c=${slug}&sub=${subcategoryKey}`;
        }
        return `kategori.html?c=${slug}`;
    };

    window.getCleanProductUrl = function(productId, title) {
        var slug = window.slugify(title || '');
        if (slug) {
            return `urun-detay.html?id=${productId}&slug=${slug}`;
        }
        return `urun-detay.html?id=${productId}`;
    };

    // 5. Global Link Cleaner Handler on DOM load
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a').forEach(function(a) {
            var href = a.getAttribute('href');
            if (href === 'index.html' || href === './index.html' || href === '/index.html') {
                a.setAttribute('href', './');
            }
        });
    });
})();
