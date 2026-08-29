import re

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"

trendyol_cart_css = """
/* ==========================================================================
   MOBELMOR TRENDYOL-STYLE HIGH-CONVERSION CART DRAWER
   ========================================================================== */

.cart-drawer {
    position: fixed;
    top: 0;
    right: -520px;
    width: 100%;
    max-width: 440px;
    height: 100%;
    height: 100dvh;
    max-height: 100dvh;
    background: #f4f5f7 !important;
    color: #0f172a !important;
    z-index: 35000;
    display: flex;
    flex-direction: column;
    transition: right 0.32s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -10px 0 35px rgba(0, 0, 0, 0.15);
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
}

.cart-drawer.active {
    right: 0;
}

/* 1. Header with Back Arrow & Centered Title */
.ty-cart-header {
    padding: 16px 18px;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}

.ty-header-back-btn {
    background: none;
    border: none;
    font-size: 1.25rem;
    color: #1e293b;
    cursor: pointer;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: background 0.15s ease;
}

.ty-header-back-btn:hover {
    background: #f1f5f9;
}

.ty-header-title {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.01em;
}

/* 2. Body Scrollable Content */
.ty-cart-body {
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

/* Promo Banner Top */
.ty-promo-bar {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 0.84rem;
    font-weight: 700;
    color: #d97706;
    transition: background 0.15s ease;
}

.ty-promo-bar:hover {
    background: #fffbeb;
}

.ty-promo-content {
    display: none;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 12px;
    margin-top: -6px;
}

.ty-promo-input-group {
    display: flex;
    gap: 8px;
}

.ty-promo-input {
    flex: 1;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 0.84rem;
    font-weight: 700;
    text-transform: uppercase;
}

.ty-promo-btn {
    background: #f97316;
    color: #ffffff;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    font-weight: 800;
    font-size: 0.82rem;
    cursor: pointer;
}

/* Store Header Card */
.ty-store-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 8px;
}

.ty-store-header {
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.86rem;
    font-weight: 800;
    color: #0f172a;
    border-bottom: 1px solid #f3f4f6;
}

.ty-store-checkbox {
    accent-color: #f97316;
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.ty-store-rating {
    background: #16a34a;
    color: #ffffff;
    font-size: 0.72rem;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: 4px;
}

.ty-free-shipping-strip {
    background: #f0fdf4;
    color: #15803d;
    padding: 8px 14px;
    font-size: 0.78rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid #e5e7eb;
}

/* Item Row */
.ty-item-row {
    padding: 14px;
    border-bottom: 1px solid #f3f4f6;
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.ty-item-checkbox {
    accent-color: #f97316;
    width: 18px;
    height: 18px;
    margin-top: 4px;
    cursor: pointer;
}

.ty-item-img-wrap {
    width: 78px;
    height: 78px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    background: #ffffff;
    flex-shrink: 0;
}

.ty-item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ty-item-details {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.ty-item-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6px;
}

.ty-item-title {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.ty-item-trash {
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    font-size: 0.85rem;
    padding: 2px 4px;
}

.ty-item-trash:hover {
    color: #ef4444;
}

.ty-item-social-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #fff7ed;
    color: #ea580c;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
    width: fit-content;
}

.ty-item-delivery-info {
    font-size: 0.72rem;
    color: #16a34a;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
}

.ty-item-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
}

.ty-qty-pill {
    display: inline-flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 20px;
    padding: 2px 4px;
}

.ty-qty-btn {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: none;
    border: none;
    font-size: 0.95rem;
    font-weight: 800;
    color: #ea580c;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ty-qty-val {
    font-size: 0.84rem;
    font-weight: 800;
    color: #0f172a;
    min-width: 22px;
    text-align: center;
}

.ty-item-price {
    font-size: 1.05rem;
    font-weight: 900;
    color: #ea580c;
    letter-spacing: -0.02em;
}

.ty-warranty-bar {
    background: #fffbeb;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 700;
    color: #b45309;
    cursor: pointer;
}

/* 3. Sticky Bottom Bar */
.ty-cart-footer {
    background: #ffffff !important;
    border-top: 1px solid #e5e7eb;
    padding: 12px 16px max(18px, env(safe-area-inset-bottom, 18px)) 16px;
    flex-shrink: 0;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.ty-breakdown-details {
    display: none;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 8px;
    border-bottom: 1px dashed #e5e7eb;
    font-size: 0.8rem;
    color: #64748b;
}

.ty-footer-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
}

.ty-footer-price-box {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 8px;
    transition: background 0.15s ease;
}

.ty-footer-price-box:hover {
    background: #f8fafc;
}

.ty-footer-arrow {
    font-size: 0.75rem;
    color: #64748b;
    transition: transform 0.2s ease;
}

.ty-footer-arrow.open {
    transform: rotate(180deg);
}

.ty-footer-total {
    font-size: 1.15rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.02em;
    white-space: nowrap;
}

.ty-checkout-btn {
    flex: 1;
    background: #f97316 !important;
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
    box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);
    transition: all 0.2s ease;
}

.ty-checkout-btn:hover {
    background: #ea580c !important;
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(249, 115, 22, 0.45);
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    orig_css = f.read()

# Replace previous cart styles
if "MOBELMOR THEME-HARMONIOUS LUXURY CART DRAWER" in orig_css:
    orig_css = orig_css.split("/* ==========================================================================\n   MOBELMOR THEME-HARMONIOUS LUXURY CART DRAWER")[0]

orig_css = orig_css.strip() + "\n\n" + trendyol_cart_css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(orig_css)

print("Appended Trendyol-Style Mobelmor Cart Drawer CSS!")
