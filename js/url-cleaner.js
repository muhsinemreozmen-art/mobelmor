/* =========================================================================
   mobelmor.com - Universal Clean URL & History Router Engine (v=12000)
   ========================================================================= */

(function() {
    // 1. Turkish Slugify Helper
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

    // 2. Category & Campaign Slug Mapping
    window.CATEGORY_SLUGS = {
        'living': 'oturma-odasi',
        'dining': 'yemek-odasi',
        'bedroom': 'yatak-odasi',
        'office': 'tv-uniteleri',
        'garden': 'bahce',
        'decoration': 'dekorasyon',
        'lighting': 'aydinlatma',
        'carpet': 'hali',
        'all': 'tum-koleksiyon'
    };

    window.SLUG_TO_CATEGORY = {
        'oturma-odasi': 'living',
        'oturma-odalari': 'living',
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
        'calisma-odasi': 'office',
        'office': 'office',
        'bahce': 'garden',
        'bahce-mobilyasi': 'garden',
        'garden': 'garden',
        'dekorasyon': 'decoration',
        'aydinlatma': 'lighting',
        'hali': 'carpet',
        'sepette-indirimler': 'all',
        'cok-satanlar': 'all',
        '2026-yaz-trendleri': 'all',
        'tum-koleksiyon': 'all',
        'tum-urunler': 'all',
        'all': 'all'
    };

    // 3. Clean URL Generator Helpers (Safe for Static & SPA reloads)
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

    // 4. Safe URL Initializer - Ensures no 404s on page refresh
    function sanitizeCurrentUrl() {
        // Do not alter path to virtual non-existent directories on static server
        // This guarantees F5 / refresh always loads the correct HTML file
    }

    sanitizeCurrentUrl();

    // 5. Global Link Cleaner
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a').forEach(function(a) {
            var href = a.getAttribute('href');
            if (href === 'index.html' || href === '/index.html') {
                a.setAttribute('href', './');
            }
        });
    });
})();
