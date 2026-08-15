/* =========================================================================
   mobelmor.com - Universal Clean URL & History Router Engine (v=11000)
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

    // 3. Clean URL Generator Helpers
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

    // 4. Client-side URL Cleaner & PushState Router for Clean Address Bar
    function updateAddressBarClean() {
        if (!window.history || !window.history.replaceState) return;
        var pathname = window.location.pathname;
        var search = window.location.search;
        var params = new URLSearchParams(search);

        // A. Root index.html cleaner
        if (pathname.endsWith('/index.html') || pathname.endsWith('index.html')) {
            var clean = pathname.replace(/\/index\.html$/, '/').replace(/index\.html$/, '');
            if (!clean) clean = '/';
            window.history.replaceState(null, '', clean + window.location.hash);
            return;
        }

        // B. Category / Campaign URL cleaner
        if (pathname.includes('kategori') || pathname.includes('category')) {
            var c = params.get('c') || params.get('cat') || 'tum-koleksiyon';
            var sub = params.get('sub');
            var filter = params.get('filter');
            var cleanSlug = c;
            if (filter === 'sepette-indirim') cleanSlug = 'sepette-indirimler';
            else if (filter === 'best-seller') cleanSlug = 'cok-satanlar';
            else if (filter === 'trends') cleanSlug = '2026-yaz-trendleri';
            
            var targetUrl = '/' + cleanSlug;
            if (sub && sub !== 'all') {
                targetUrl += '/' + sub;
            }
            if (window.location.protocol.startsWith('http')) {
                window.history.replaceState({ c: c, sub: sub, filter: filter }, '', targetUrl + window.location.hash);
            }
            return;
        }

        // C. Product Detail URL cleaner
        if (pathname.includes('urun-detay') || pathname.includes('product-detail')) {
            var slug = params.get('slug');
            var id = params.get('id');
            if (slug && window.location.protocol.startsWith('http')) {
                window.history.replaceState({ id: id, slug: slug }, '', '/urun/' + slug + window.location.hash);
            }
        }
    }

    updateAddressBarClean();

    // 5. Global Link Cleaner & Router Interceptor
    document.addEventListener('DOMContentLoaded', function() {
        updateAddressBarClean();

        // Convert raw index.html references to clean home
        document.querySelectorAll('a').forEach(function(a) {
            var href = a.getAttribute('href');
            if (href === 'index.html' || href === './index.html' || href === '/index.html') {
                a.setAttribute('href', './');
            }
        });
    });
})();
