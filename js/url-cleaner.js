/* ==========================================
   mobelmor.com - Clean Extensionless URL Engine (v=10001)
   ========================================== */

(function() {
    // 1. Instantly strip ".html" and "index.html" from browser URL bar on page load using History API
    if (window.history && window.history.replaceState) {
        var path = window.location.pathname;
        var cleanPath = path;

        if (path.endsWith('/index.html') || path.endsWith('index.html')) {
            cleanPath = path.replace(/\/index\.html$/, '/').replace(/index\.html$/, '');
            if (!cleanPath) cleanPath = '/';
        } else if (path.endsWith('.html')) {
            cleanPath = path.replace(/\.html$/, '');
        }

        if (cleanPath !== path) {
            var newUrl = window.location.origin + cleanPath + window.location.search + window.location.hash;
            window.history.replaceState(null, '', newUrl);
        }
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

    // 4. URL Builder Helpers (Extensionless)
    window.getCleanHomeUrl = function() {
        return './';
    };

    window.getCleanCategoryUrl = function(categoryKey, subcategoryKey) {
        var slug = window.CATEGORY_SLUGS[categoryKey] || categoryKey || 'tum-koleksiyon';
        var page = window.location.hostname.includes('github.io') ? 'kategori.html' : 'kategori';
        if (subcategoryKey && subcategoryKey !== 'all') {
            return `${page}?c=${slug}&sub=${subcategoryKey}`;
        }
        return `${page}?c=${slug}`;
    };

    window.getCleanProductUrl = function(productId, title) {
        var slug = window.slugify(title || '');
        var page = window.location.hostname.includes('github.io') ? 'urun-detay.html' : 'urun-detay';
        if (slug) {
            return `${page}?id=${productId}&slug=${slug}`;
        }
        return `${page}?id=${productId}`;
    };

    // 5. Global Link Cleaner Handler on DOM load
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a').forEach(function(a) {
            var href = a.getAttribute('href');
            if (href) {
                if (href === 'index.html' || href === './index.html' || href === '/index.html') {
                    a.setAttribute('href', './');
                } else if (href.includes('.html') && !href.startsWith('http') && !href.startsWith('//')) {
                    // For internal links, replace .html with extensionless equivalent if not on strict github pages
                    if (!window.location.hostname.includes('github.io')) {
                        a.setAttribute('href', href.replace('.html', ''));
                    }
                }
            }
        });
    });
})();
