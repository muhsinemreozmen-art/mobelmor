
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function testScript(filename) {
    const code = fs.readFileSync(filename, 'utf-8');
    
    // Create simulated browser environment
    const sandbox = {
        window: {},
        document: {
            title: '',
            body: { classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} } },
            getElementById: (id) => ({
                classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} },
                addEventListener: ()=>{},
                style: {},
                innerHTML: '',
                textContent: '',
                value: '',
                querySelector: ()=>null,
                querySelectorAll: ()=>[]
            }),
            querySelector: () => null,
            querySelectorAll: () => [],
            createElement: () => ({ classList: { add: ()=>{} }, style: {}, setAttribute: ()=>{} }),
            addEventListener: ()=>{}
        },
        localStorage: {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
        },
        sessionStorage: {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
        },
        navigator: { userAgent: 'test' },
        location: { search: '?id=1&slug=zen-modern-yatak-odasi-takimi', hash: '', pathname: '/urun-detay.html' },
        console: { log: ()=>{}, error: console.error, warn: ()=>{} },
        setTimeout: (fn)=>fn(),
        clearTimeout: ()=>{},
        setInterval: ()=>{},
        clearInterval: ()=>{},
        PRODUCTS: [
            { id: 1, title: 'Zen Yatak Odası', price: 54000, category: 'bedroom', subcategory: 'beds', image: 'assets/minegolden_p11_5.webp', gallery: ['assets/minegolden_p11_5.webp'] }
        ],
        formatPrice: (p) => '₺' + p
    };
    sandbox.window = sandbox;

    try {
        const script = new vm.Script(code, { filename });
        script.runInNewContext(sandbox);
        console.log(`[PASS] ${filename} executed with 0 runtime errors!`);
        return true;
    } catch (err) {
        console.error(`[FAIL] ${filename} runtime error:`, err);
        return false;
    }
}

const files = [
    'js/store-service.js',
    'js/auth-modal.js',
    'js/checkout-helper.js',
    'js/detail.js',
    'js/app.js'
];

let allPassed = true;
for (const f of files) {
    if (fs.existsSync(f)) {
        if (!testScript(f)) allPassed = false;
    }
}

if (!allPassed) {
    process.exit(1);
} else {
    console.log('\n>>> ALL JS FILES PASSED RUNTIME SYNTAX & SCOPE TESTS! <<<');
}
