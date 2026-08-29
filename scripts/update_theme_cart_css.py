import re

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"

theme_cart_css = """
/* ==========================================================================
   MOBELMOR THEME-HARMONIOUS LUXURY CART DRAWER (MATCHING HOMEPAGE PALETTE)
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
    background: #ffffff !important;
    color: #18181b !important;
    z-index: 35000;
    display: flex;
    flex-direction: column;
    transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -12px 0 40px rgba(107, 33, 168, 0.12);
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
}

.cart-drawer.active {
    right: 0;
}

/* 1. THEME-MATCHED CART HEADER */
.cart-header {
    padding: 20px 22px 18px 22px;
    background: #ffffff;
    border-bottom: 1px solid #e4e4e7 !important;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cart-header-title-theme {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart-header-title-theme h3 {
    margin: 0;
    font-size: 1.18rem;
    font-weight: 800;
    color: #18181b;
    letter-spacing: -0.02em;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cart-header-title-theme h3 i {
    color: #6b21a8;
}

.cart-header-title-theme .theme-count-badge {
    font-size: 0.76rem;
    font-weight: 700;
    color: #6b21a8;
    background: #f3e8ff;
    border: 1px solid #e9d5ff;
    padding: 2px 9px;
    border-radius: 20px;
}

.cart-close-theme-btn {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #f4f4f5;
    border: 1px solid #e4e4e7;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #71717a;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.cart-close-theme-btn:hover {
    background: #fee2e2;
    color: #ef4444;
    border-color: #fca5a5;
    transform: rotate(90deg);
}

/* 2. THEME-MATCHED CART BODY */
.cart-body {
    padding: 18px 20px;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    background: #faf9fc;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Theme Product Card */
.theme-cart-card {
    background: #ffffff;
    border-radius: 14px;
    padding: 14px;
    display: flex;
    gap: 14px;
    border: 1px solid #e4e4e7;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    position: relative;
    transition: all 0.2s ease;
}

.theme-cart-card:hover {
    border-color: #d8b4fe;
    box-shadow: 0 6px 18px rgba(107, 33, 168, 0.06);
}

.theme-cart-img-wrap {
    width: 86px;
    height: 86px;
    border-radius: 10px;
    background: #f4f4f5;
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid #f1f5f9;
}

.theme-cart-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.theme-cart-card:hover .theme-cart-img {
    transform: scale(1.05);
}

.theme-cart-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
}

.theme-cart-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
}

.theme-cart-title {
    margin: 0;
    font-size: 0.94rem;
    font-weight: 800;
    color: #18181b;
    line-height: 1.35;
    letter-spacing: -0.01em;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.theme-cart-delete-btn {
    background: transparent;
    border: none;
    color: #a1a1aa;
    cursor: pointer;
    padding: 4px;
    font-size: 0.88rem;
    border-radius: 6px;
    transition: all 0.15s ease;
    flex-shrink: 0;
}

.theme-cart-delete-btn:hover {
    color: #ef4444;
    background: #fee2e2;
}

.theme-cart-fabric {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.78rem;
    color: #71717a;
    font-weight: 600;
    margin-top: 4px;
}

.theme-fabric-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #cbd5e1;
    flex-shrink: 0;
}

.theme-cart-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding-top: 8px;
    border-top: 1px solid #f4f4f5;
}

.theme-cart-price {
    font-size: 1.12rem;
    font-weight: 900;
    color: #6b21a8;
    letter-spacing: -0.02em;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Modern Theme Quantity Pill */
.theme-qty-pill {
    display: inline-flex;
    align-items: center;
    background: #f4f4f5;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    padding: 2px;
}

.theme-qty-btn {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    font-size: 0.88rem;
    font-weight: 800;
    color: #18181b;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
}

.theme-qty-btn:hover {
    background: #6b21a8;
    color: #ffffff;
    border-color: #6b21a8;
}

.theme-qty-val {
    font-size: 0.88rem;
    font-weight: 800;
    color: #18181b;
    min-width: 26px;
    text-align: center;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

/* 3. THEME COUPON ACCORDION */
.theme-coupon-toggle {
    margin-top: 4px;
}

.theme-coupon-btn-toggle {
    background: none;
    border: none;
    color: #6b21a8;
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 0;
    transition: color 0.15s ease;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.theme-coupon-btn-toggle:hover {
    color: #581c87;
    text-decoration: underline;
}

.theme-coupon-input-wrap {
    display: flex;
    gap: 8px;
    background: #ffffff;
    padding: 6px;
    border: 1px solid #e4e4e7;
    border-radius: 10px;
    margin-top: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.theme-coupon-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 8px 12px;
    font-size: 0.84rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #18181b;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.theme-coupon-apply-btn {
    background: #6b21a8;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 0.82rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.theme-coupon-apply-btn:hover {
    background: #581c87;
}

/* 4. THEME-MATCHED CART FOOTER */
.cart-footer {
    padding: 18px 22px 22px 22px;
    background: #ffffff !important;
    border-top: 1px solid #e4e4e7 !important;
    flex-shrink: 0;
    box-shadow: 0 -8px 24px rgba(107, 33, 168, 0.04);
}

@media (max-width: 576px) {
    .cart-drawer {
        max-width: 100% !important;
        width: 100% !important;
    }
    .cart-footer {
        padding: 16px 20px max(24px, env(safe-area-inset-bottom, 24px)) 20px !important;
    }
}

.theme-summary-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;
}

.theme-summary-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.86rem;
    color: #71717a;
    font-weight: 500;
}

.theme-summary-row.total-row {
    font-size: 1.15rem;
    font-weight: 800;
    color: #18181b;
    padding-top: 10px;
    margin-top: 6px;
    border-top: 1px solid #f4f4f5;
}

.theme-summary-row.total-row .theme-total-amount {
    font-size: 1.35rem;
    font-weight: 900;
    color: #6b21a8;
    letter-spacing: -0.02em;
}

.theme-checkout-button {
    background: linear-gradient(135deg, #6b21a8 0%, #7e22ce 100%) !important;
    color: #ffffff !important;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: none;
    font-size: 0.98rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(107, 33, 168, 0.35);
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    font-family: 'Plus Jakarta Sans', sans-serif;
    position: relative;
    overflow: hidden;
}

.theme-checkout-button:hover {
    background: linear-gradient(135deg, #581c87 0%, #6b21a8 100%) !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(107, 33, 168, 0.45);
}

.theme-trust-badges-row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 12px;
    margin-top: 12px;
    border-top: 1px solid #f4f4f5;
}

.theme-trust-badge-item {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.74rem;
    font-weight: 700;
    color: #6b21a8;
}

.theme-trust-badge-item i {
    color: #7e22ce;
    font-size: 0.84rem;
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    orig_css = f.read()

# Replace previous cart styles
if "MOBELMOR ULTRA-LUXURY EDITORIAL CART DRAWER" in orig_css:
    orig_css = orig_css.split("/* ==========================================================================\n   MOBELMOR ULTRA-LUXURY EDITORIAL CART DRAWER")[0]
elif "MOBELMOR MINIMALIST CLEAN CART DRAWER" in orig_css:
    orig_css = orig_css.split("/* ==========================================================================\n   MOBELMOR MINIMALIST CLEAN CART DRAWER")[0]

orig_css = orig_css.strip() + "\n\n" + theme_cart_css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(orig_css)

print("Updated styles.css with Theme-Harmonious Cart CSS!")
