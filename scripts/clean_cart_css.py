import os
import re

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"

clean_cart_css = """
/* ==========================================================================
   MOBELMOR MINIMALIST CLEAN CART DRAWER (CLEAN & SPACIOUS)
   ========================================================================== */

.cart-drawer {
    position: fixed;
    top: 0;
    right: -480px;
    width: 100%;
    max-width: 420px;
    height: 100%;
    height: 100dvh;
    max-height: 100dvh;
    background: #ffffff !important;
    color: #0f172a !important;
    z-index: 35000;
    display: flex;
    flex-direction: column;
    transition: right 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: -8px 0 32px rgba(15, 23, 42, 0.15);
    overscroll-behavior: contain !important;
    touch-action: pan-y;
}

.cart-drawer.active {
    right: 0;
}

/* Minimalist Clean Cart Header */
.cart-header {
    padding: 18px 20px;
    background: #ffffff;
    border-bottom: 1px solid #f1f5f9 !important;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cart-header-title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 800;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cart-header-title i {
    color: #6b21a8;
}

.cart-close-circle-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;
}

.cart-close-circle-btn:hover {
    background: #fee2e2;
    color: #ef4444;
    border-color: #fca5a5;
}

/* Clean Cart Body */
.cart-body {
    padding: 16px;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    background: #fafafc;
}

/* Clean Product Item Card */
.clean-cart-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    gap: 12px;
    margin-bottom: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
}

.clean-cart-img-wrap {
    width: 76px;
    height: 76px;
    border-radius: 8px;
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    overflow: hidden;
    flex-shrink: 0;
}

.clean-cart-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.clean-cart-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
}

.clean-cart-top-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
}

.clean-cart-title {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.3;
}

.clean-cart-remove-btn {
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 2px 4px;
    font-size: 0.82rem;
    transition: color 0.15s ease;
}

.clean-cart-remove-btn:hover {
    color: #ef4444;
}

.clean-cart-variant {
    font-size: 0.74rem;
    color: #64748b;
    margin-top: 2px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.clean-cart-bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
}

.clean-cart-price {
    font-size: 0.98rem;
    font-weight: 900;
    color: #6b21a8;
}

.clean-qty-counter {
    display: inline-flex;
    align-items: center;
    background: #f1f5f9;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
}

.clean-qty-btn {
    width: 26px;
    height: 26px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    font-weight: 800;
    font-size: 0.82rem;
    color: #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s ease;
}

.clean-qty-btn:hover {
    background: #6b21a8;
    color: #ffffff;
    border-color: #6b21a8;
}

.clean-qty-val {
    font-size: 0.84rem;
    font-weight: 800;
    color: #0f172a;
    min-width: 24px;
    text-align: center;
}

/* Coupon Box Clean */
.clean-coupon-box {
    margin-top: 8px;
    background: #ffffff;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
    padding: 8px 10px;
}

.clean-coupon-group {
    display: flex;
    gap: 6px;
    margin-top: 4px;
}

.clean-coupon-input {
    flex: 1;
    padding: 6px 10px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 0.78rem;
    text-transform: uppercase;
    font-weight: 700;
}

.clean-coupon-btn {
    background: #0f172a;
    color: #ffffff;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.76rem;
    font-weight: 800;
    cursor: pointer;
}

.clean-coupon-btn:hover {
    background: #6b21a8;
}

/* Clean Cart Footer */
.cart-footer {
    padding: 16px 20px 20px 20px;
    background: #ffffff !important;
    border-top: 1px solid #e2e8f0 !important;
    flex-shrink: 0;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.04);
}

@media (max-width: 576px) {
    .cart-drawer {
        max-width: 100% !important;
        width: 100% !important;
    }
    .cart-footer {
        padding: 14px 16px max(24px, env(safe-area-inset-bottom, 24px)) 16px !important;
    }
}

.clean-price-summary {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;
}

.clean-price-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.82rem;
    color: #64748b;
}

.clean-price-row.total {
    font-size: 1.15rem;
    font-weight: 900;
    color: #0f172a;
    border-top: 1px solid #f1f5f9;
    padding-top: 8px;
    margin-top: 4px;
}

.clean-price-row.total strong {
    color: #6b21a8;
    font-size: 1.25rem;
}

.clean-checkout-cta {
    background: #6b21a8 !important;
    color: #ffffff !important;
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    border: none;
    font-size: 0.95rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(107, 33, 168, 0.25);
    transition: all 0.2s ease;
}

.clean-checkout-cta:hover {
    background: #581c87 !important;
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(107, 33, 168, 0.35);
}

.clean-trust-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid #f8fafc;
    font-size: 0.72rem;
    font-weight: 700;
    color: #64748b;
}

.clean-trust-strip span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.clean-trust-strip i {
    color: #10b981;
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    orig = f.read()

# Replace luxury modern cart CSS with clean minimalist CSS
if "MOBELMOR LUXURY MODERN CART DRAWER" in orig:
    orig = orig.split("/* ==========================================================================\n   MOBELMOR LUXURY MODERN CART DRAWER")[0]

if "MOBELMOR MINIMALIST CLEAN CART DRAWER" not in orig:
    orig += "\n" + clean_cart_css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(orig)

print("Updated CSS with clean minimalist cart styles!")
