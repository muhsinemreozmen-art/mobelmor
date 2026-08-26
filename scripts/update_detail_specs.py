import re

# Update js/detail.js to render specs and custom dimensions from product object
detail_c = open('js/detail.js', encoding='utf-8').read()

new_specs_renderer = """const renderSpecsAndGeneralInfo = (product) => {
    const dimsTable = document.getElementById('moduleDimsTable');
    const featureTable = document.getElementById('featureSpecsTable');
    
    // Parse dimensions (supports string with newlines/colons or object)
    let dimRows = [];
    if (product.dimensions) {
        if (typeof product.dimensions === 'string') {
            dimRows = product.dimensions.split('\\n').map(line => {
                const parts = line.split(':');
                if (parts.length >= 2) return [parts[0].trim(), parts.slice(1).join(':').trim()];
                return [line.trim(), ''];
            }).filter(([k, v]) => k);
        } else if (typeof product.dimensions === 'object') {
            dimRows = Object.entries(product.dimensions);
        }
    } else if (product.specs && Object.keys(product.specs).length > 0) {
        dimRows = Object.entries(product.specs).filter(([k, v]) => k && v && k !== 'Modül' && k !== 'Genişlik' && v !== 'Genişlik');
    }

    // Default fallback dimensions if not set
    if (dimRows.length === 0) {
        const title = product.title.toLowerCase();
        if (title.includes("koltuk takımı")) {
            dimRows = [["3'lü Koltuk", "G: 235 cm x D: 95 cm x Y: 82 cm"], ["2'li Koltuk", "G: 185 cm x D: 95 cm x Y: 82 cm"], ["Berjer", "G: 85 cm x D: 88 cm x Y: 92 cm"]];
        } else if (title.includes("3'lü")) {
            dimRows = [["3'lü Koltuk", "G: 235 cm x D: 95 cm x Y: 82 cm"]];
        } else if (title.includes("2'li")) {
            dimRows = [["2'li Koltuk", "G: 185 cm x D: 95 cm x Y: 82 cm"]];
        } else if (title.includes("berjer")) {
            dimRows = [["Tekli Berjer", "G: 85 cm x D: 88 cm x Y: 92 cm"]];
        } else if (title.includes("yemek") && title.includes("takımı")) {
            dimRows = [["Yemek Masası", "G: 180 (Açılır 220) cm x D: 90 cm x Y: 78 cm"], ["Sandalye", "G: 48 cm x D: 52 cm x Y: 92 cm"], ["Konsol", "G: 200 cm x D: 48 cm x Y: 85 cm"]];
        } else if (title.includes("yatak") && title.includes("takımı")) {
            dimRows = [["6 Kapaklı Gardırop", "G: 250 cm x D: 60 cm x Y: 220 cm"], ["Karyola & Baza", "160x200 cm (Dış Ölçü: 175x215 cm)"], ["Aynalı Şifonyer", "G: 120 cm x D: 45 cm x Y: 85 cm"], ["Komodin (2 Adet)", "G: 60 cm x D: 45 cm x Y: 48 cm"]];
        } else if (title.includes("tv")) {
            dimRows = [["TV Alt Konsol", "G: 210 cm x D: 45 cm x Y: 52 cm"], ["Asma Duvar Rafı", "G: 120 cm x D: 25 cm x Y: 30 cm"]];
        }
    }

    if (dimsTable) {
        if (dimRows.length > 0) {
            dimsTable.innerHTML = `<tbody>${dimRows.map(([k, v]) => `<tr><th class="spec-label" style="text-align:left;padding:8px 12px;font-weight:700;color:#334155;">${k}</th><td class="spec-value" style="padding:8px 12px;color:#0f172a;font-weight:600;">${v}</td></tr>`).join('')}</tbody>`;
        } else {
            dimsTable.innerHTML = '<tbody><tr><td colspan="2" style="color:#94a3b8;padding:14px;text-align:left;">Ölçü bilgisi mevcut değil.</td></tr></tbody>';
        }
    }

    if (featureTable) {
        const skeleton = product.skeleton || (product.category === 'living' ? '%100 Fırınlanmış Masif Gürgen' : 'E1 Kalite MDF & Masif Ahşap');
        const sponge = product.sponge || (product.category === 'living' ? '32 Dansite HR Ultra Konfor' : 'Konfor Dolgulu');
        const fabric = product.fabric || product.material || 'İthal Leke Tutmaz Dokuma Kumaş';
        const warranty = product.warranty || '2 Yıl Resmi İnegöl Üretici Garantisi';
        const delivery = product.delivery || 'Ücretsiz Teslimat & Profesyonel Montaj';

        const featureRows = [
            ['İskelet', skeleton],
            ['Sünger / Konfor', sponge],
            ['Kumaş / Malzeme', fabric],
            ['Garanti', warranty],
            ['Teslimat & Kurulum', delivery],
            ['Üretim Yeri', 'Orijinal İnegöl / Bursa']
        ];

        featureTable.innerHTML = `<tbody>${featureRows.map(([k, v]) => `<tr><th class="spec-label" style="text-align:left;padding:8px 12px;font-weight:700;color:#334155;">${k}</th><td class="spec-value" style="padding:8px 12px;color:#0f172a;font-weight:600;">${v}</td></tr>`).join('')}</tbody>`;
    }
};"""

detail_c = re.sub(
    r'const renderSpecsAndGeneralInfo = \(product\) => \{[\s\S]*?featureTable\.innerHTML = `<tbody>[\s\S]*?<\/tbody>`;\s*\};',
    new_specs_renderer,
    detail_c
)

open('js/detail.js', 'w', encoding='utf-8').write(detail_c)
print("Enhanced renderSpecsAndGeneralInfo in js/detail.js")
