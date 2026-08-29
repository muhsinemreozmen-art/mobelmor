import os

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

modern_wishlist_css = """
/* ==========================================================================
   MOBELMOR MODERN LUXURY FAVORITES DRAWER (SEPET İLE TAM UYUMLU)
   ========================================================================== */

.wishlist-drawer {
    position: fixed;
    top: 0;
    right: -520px;
    width: 100%;
    max-width: 440px;
    height: 100%;
    height: 100dvh;
    max-height: 100dvh;
    background: #f8fafc !important;
    color: #0f172a !important;
    z-index: 35000;
    display: flex;
    flex-direction: column;
    transition: right 0.32s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -10px 0 35px rgba(107, 33, 168, 0.15);
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
}

.wishlist-drawer.active {
    right: 0;
}

/* 1. Header with Back Arrow & Centered Title */
.ty-wishlist-header {
    padding: 16px 18px;
    background: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}

.ty-wishlist-header .ty-header-title {
    margin: 0;
    font-size: 1.08rem;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.01em;
}

/* 2. Body Scrollable Content */
.ty-wishlist-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.ty-wishlist-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
}

.ty-wishlist-add-cart-btn {
    flex: 1;
    background: #6b21a8 !important;
    color: #ffffff !important;
    border: none;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.82rem;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(107, 33, 168, 0.2);
}

.ty-wishlist-add-cart-btn:hover {
    background: #581c87 !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(107, 33, 168, 0.3);
}

/* 3. Sticky Bottom Bar */
.ty-wishlist-footer {
    background: #ffffff !important;
    border-top: 1px solid #e2e8f0;
    padding: 14px 16px max(18px, env(safe-area-inset-bottom, 18px)) 16px;
    flex-shrink: 0;
    box-shadow: 0 -4px 20px rgba(107, 33, 168, 0.08);
}

.ty-wishlist-all-btn {
    width: 100%;
    background: linear-gradient(135deg, #6b21a8 0%, #7e22ce 100%) !important;
    color: #ffffff !important;
    height: 48px;
    border-radius: 10px;
    border: none;
    font-size: 0.98rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(107, 33, 168, 0.35);
    transition: all 0.2s ease;
}

.ty-wishlist-all-btn:hover {
    background: linear-gradient(135deg, #581c87 0%, #6b21a8 100%) !important;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(107, 33, 168, 0.45);
}
"""

if "MOBELMOR MODERN LUXURY FAVORITES DRAWER" in css:
    css = css.split("/* ==========================================================================\n   MOBELMOR MODERN LUXURY FAVORITES DRAWER")[0]

css = css.strip() + "\n\n" + modern_wishlist_css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Updated styles.css with modern favorites drawer styles!")
