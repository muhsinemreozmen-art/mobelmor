import os

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"

ultra_luxury_cart_css = """
/* ==========================================================================
   MOBELMOR ULTRA-LUXURY EDITORIAL CART DRAWER (2026 HIGH-END DESIGN)
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
    color: #0f172a !important;
    z-index: 35000;
    display: flex;
    flex-direction: column;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -12px 0 40px rgba(0, 0, 0, 0.12);
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.cart-drawer.active {
    right: 0;
}

/* 1. EDITORIAL HEADER */
.cart-header {
    padding: 22px 24px 18px 24px;
    background: #ffffff;
    border-bottom: 1px solid rgba(226, 232, 240, 0.8) !important;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cart-header-title-luxury {
    display: flex;
    align-items: baseline;
    gap: 10px;
}

.cart-header-title-luxury h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 800;
    color: #09090b;
    letter-spacing: -0.03em;
}

.cart-header-title-luxury .cart-count-pill {
    font-size: 0.76rem;
    font-weight: 700;
    color: #6b21a8;
    background: #faf5ff;
    border: 1px solid #f3e8ff;
    padding: 2px 8px;
    border-radius: 20px;
}

.cart-close-luxury-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.cart-close-luxury-btn:hover {
    background: #09090b;
    color: #ffffff;
    border-color: #09090b;
    transform: rotate(90deg);
}

/* 2. LUXURY CART BODY */
.cart-body {
    padding: 20px 24px;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

/* Luxury Product Card */
.luxury-cart-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    gap: 16px;
    border: 1px solid #f1f5f9;
    box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02);
    position: relative;
    transition: all 0.2s ease;
}

.luxury-cart-card:hover {
    border-color: #e2e8f0;
    box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.07);
}

.luxury-cart-img-wrap {
    width: 90px;
    height: 90px;
    border-radius: 12px;
    background: #f4f4f5;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
}

.luxury-cart-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.luxury-cart-card:hover .luxury-cart-img {
    transform: scale(1.04);
}

.luxury-cart-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
}

.luxury-cart-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
}

.luxury-cart-brand {
    font-size: 0.68rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #9333ea;
    margin-bottom: 2px;
}

.luxury-cart-title {
    margin: 0;
    font-size: 0.94rem;
    font-weight: 800;
    color: #09090b;
    line-height: 1.35;
    letter-spacing: -0.02em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.luxury-cart-delete-btn {
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 4px;
    font-size: 0.85rem;
    border-radius: 6px;
    transition: all 0.15s ease;
}

.luxury-cart-delete-btn:hover {
    color: #ef4444;
    background: #fee2e2;
}

.luxury-cart-fabric {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.74rem;
    color: #64748b;
    font-weight: 600;
    margin-top: 4px;
}

.luxury-fabric-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #cbd5e1;
}

.luxury-cart-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding-top: 8px;
    border-top: 1px dashed #f1f5f9;
}

.luxury-cart-price {
    font-size: 1.05rem;
    font-weight: 900;
    color: #09090b;
    letter-spacing: -0.02em;
}

/* Minimalist Pill Counter */
.luxury-qty-pill {
    display: inline-flex;
    align-items: center;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    padding: 2px 4px;
}

.luxury-qty-btn {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: transparent;
    border: none;
    font-size: 0.85rem;
    font-weight: 700;
    color: #475569;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
}

.luxury-qty-btn:hover {
    background: #ffffff;
    color: #09090b;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.luxury-qty-val {
    font-size: 0.82rem;
    font-weight: 800;
    color: #09090b;
    min-width: 22px;
    text-align: center;
}

/* 3. INTEGRATED EXPANDABLE COUPON */
.luxury-coupon-toggle {
    margin-top: 4px;
}

.luxury-coupon-btn-toggle {
    background: none;
    border: none;
    color: #64748b;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 0;
    transition: color 0.15s ease;
}

.luxury-coupon-btn-toggle:hover {
    color: #7c3aed;
}

.luxury-coupon-input-wrap {
    display: flex;
    gap: 8px;
    background: #ffffff;
    padding: 6px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    margin-top: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.luxury-coupon-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 6px 10px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #09090b;
}

.luxury-coupon-apply-btn {
    background: #09090b;
    color: #ffffff;
    border: none;
    padding: 7px 14px;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
}

.luxury-coupon-apply-btn:hover {
    background: #6b21a8;
}

/* 4. LUXURY FOOTER & CHECKOUT CTA */
.cart-footer {
    padding: 20px 24px 24px 24px;
    background: #ffffff !important;
    border-top: 1px solid #f1f5f9 !important;
    flex-shrink: 0;
    box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.03);
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

.luxury-summary-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
}

.luxury-summary-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.84rem;
    color: #64748b;
}

.luxury-summary-row.total-row {
    font-size: 1.15rem;
    font-weight: 900;
    color: #09090b;
    padding-top: 10px;
    margin-top: 6px;
    border-top: 1px solid #f1f5f9;
}

.luxury-summary-row.total-row .total-amount {
    font-size: 1.35rem;
    font-weight: 900;
    color: #6b21a8;
    letter-spacing: -0.03em;
}

.luxury-checkout-button {
    background: linear-gradient(135deg, #18181b 0%, #09090b 100%) !important;
    color: #ffffff !important;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: none;
    font-size: 0.96rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(9, 9, 11, 0.2);
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
}

.luxury-checkout-button::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    transform: skewX(-20deg);
    transition: 0.75s;
}

.luxury-checkout-button:hover::after {
    left: 150%;
}

.luxury-checkout-button:hover {
    background: linear-gradient(135deg, #6b21a8 0%, #4c1d95 100%) !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(107, 33, 168, 0.35);
}

.luxury-trust-badges-row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 14px;
    margin-top: 14px;
    border-top: 1px solid #f8fafc;
}

.luxury-trust-badge-item {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72rem;
    font-weight: 700;
    color: #64748b;
}

.luxury-trust-badge-item i {
    color: #9333ea;
    font-size: 0.8rem;
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    orig = f.read()

# Replace any previous cart drawer styles
if "MOBELMOR MINIMALIST CLEAN CART DRAWER" in orig:
    orig = orig.split("/* ==========================================================================\n   MOBELMOR MINIMALIST CLEAN CART DRAWER")[0]
elif "MOBELMOR LUXURY MODERN CART DRAWER" in orig:
    orig = orig.split("/* ==========================================================================\n   MOBELMOR LUXURY MODERN CART DRAWER")[0]

orig = orig.strip() + "\n\n" + ultra_luxury_cart_css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(orig)

print("Updated styles.css with Ultra-Luxury Editorial Cart Drawer CSS!")
