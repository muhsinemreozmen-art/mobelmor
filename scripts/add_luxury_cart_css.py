import os
import re

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"

new_cart_css = """
/* ==========================================================================
   MOBELMOR LUXURY MODERN CART DRAWER (2026 ULTRA REDESIGN)
   ========================================================================== */

.cart-drawer {
    position: fixed;
    top: 0;
    right: -480px;
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
    transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -8px 0 32px rgba(15, 23, 42, 0.18);
    overscroll-behavior: contain !important;
    touch-action: pan-y;
}

.cart-drawer.active {
    right: 0;
}

/* Modern Cart Header */
.cart-header {
    padding: 16px 20px 12px 20px;
    background: #ffffff;
    border-bottom: 1px solid #f1f5f9 !important;
    flex-shrink: 0;
    position: relative;
}

.cart-header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.cart-header-title-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
}

.cart-header-title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 900;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cart-header-title i {
    color: #6b21a8;
}

.cart-header-count-badge {
    background: #f3e8ff;
    color: #6b21a8;
    font-size: 0.76rem;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 999px;
    letter-spacing: 0.2px;
}

.cart-close-circle-btn {
    width: 34px;
    height: 34px;
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
    transform: rotate(90deg);
}

/* Free Delivery & Installation Progress Bar */
.cart-free-shipping-bar {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 8px 12px;
}

.cart-shipping-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.76rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 6px;
}

.cart-shipping-text i {
    color: #10b981;
    margin-right: 4px;
}

.cart-shipping-badge {
    background: #dcfce7;
    color: #15803d;
    font-size: 0.68rem;
    font-weight: 900;
    padding: 1px 6px;
    border-radius: 4px;
}

.cart-progress-track {
    width: 100%;
    height: 6px;
    background: #e2e8f0;
    border-radius: 999px;
    overflow: hidden;
}

.cart-progress-fill {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #10b981 0%, #6b21a8 100%);
    border-radius: 999px;
    transition: width 0.4s ease;
}

/* Modern Cart Body & Items */
.cart-body {
    padding: 16px;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain !important;
    touch-action: pan-y;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #fafafc;
}

.cart-empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 20px;
    text-align: center;
}

.cart-empty-icon-wrap {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #f3e8ff;
    color: #6b21a8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    margin-bottom: 16px;
}

.cart-empty-state h4 {
    margin: 0 0 6px 0;
    font-size: 1.1rem;
    font-weight: 800;
    color: #0f172a;
}

.cart-empty-state p {
    margin: 0 0 18px 0;
    font-size: 0.82rem;
    color: #64748b;
    max-width: 260px;
}

/* Luxury Modern Product Card in Cart */
.modern-cart-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 12px;
    display: flex;
    gap: 12px;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.modern-cart-card:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.cart-card-img-wrap {
    width: 86px;
    height: 86px;
    border-radius: 10px;
    background: #f8fafc;
    border: 1px solid #f1f5f9;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
}

.cart-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.modern-cart-card:hover .cart-card-img {
    transform: scale(1.05);
}

.cart-card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
}

.cart-card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 6px;
}

.cart-card-title {
    margin: 0 0 4px 0;
    font-size: 0.9rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.cart-card-remove-btn {
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 4px;
    font-size: 0.85rem;
    border-radius: 6px;
    transition: all 0.2s ease;
}

.cart-card-remove-btn:hover {
    color: #ef4444;
    background: #fee2e2;
}

.cart-card-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72rem;
    font-weight: 700;
    color: #6b21a8;
    background: #faf5ff;
    border: 1px solid #f3e8ff;
    padding: 2px 7px;
    border-radius: 6px;
    margin-bottom: 6px;
    width: fit-content;
}

.cart-card-price-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 6px;
}

.cart-card-current-price {
    font-size: 1rem;
    font-weight: 900;
    color: #6b21a8;
}

.cart-card-old-price {
    font-size: 0.78rem;
    color: #94a3b8;
    text-decoration: line-through;
}

.cart-card-installment-teaser {
    font-size: 0.72rem;
    color: #10b981;
    font-weight: 700;
}

.cart-card-bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
}

.modern-qty-counter {
    display: inline-flex;
    align-items: center;
    background: #f1f5f9;
    border-radius: 8px;
    padding: 2px;
    border: 1px solid #e2e8f0;
}

.modern-qty-btn {
    width: 26px;
    height: 26px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-weight: 800;
    font-size: 0.85rem;
    color: #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s ease;
}

.modern-qty-btn:hover {
    background: #6b21a8;
    color: #ffffff;
    border-color: #6b21a8;
}

.modern-qty-val {
    font-size: 0.85rem;
    font-weight: 800;
    color: #0f172a;
    min-width: 24px;
    text-align: center;
}

/* Coupon & Promo Box in Cart */
.cart-promo-accordion {
    background: #ffffff;
    border: 1px dashed #cbd5e1;
    border-radius: 10px;
    padding: 10px;
    margin-top: 4px;
}

.cart-promo-input-group {
    display: flex;
    gap: 6px;
}

.cart-promo-input {
    flex: 1;
    padding: 7px 10px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 700;
}

.cart-promo-apply-btn {
    background: #0f172a;
    color: #ffffff;
    border: none;
    padding: 7px 14px;
    border-radius: 6px;
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
    transition: background 0.2s ease;
}

.cart-promo-apply-btn:hover {
    background: #6b21a8;
}

/* Cross-Sell Quick Add in Cart */
.cart-cross-sell-section {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 12px;
    margin-top: 4px;
}

.cart-cross-sell-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}

.cart-cross-sell-title {
    font-size: 0.8rem;
    font-weight: 800;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 5px;
}

.cart-cross-sell-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    border-top: 1px solid #f1f5f9;
}

.cart-cs-info {
    display: flex;
    align-items: center;
    gap: 8px;
}

.cart-cs-img {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    object-fit: cover;
    border: 1px solid #e2e8f0;
}

.cart-cs-text h6 {
    margin: 0 0 2px 0;
    font-size: 0.8rem;
    font-weight: 700;
    color: #1e293b;
}

.cart-cs-text span {
    font-size: 0.75rem;
    font-weight: 800;
    color: #6b21a8;
}

.cart-cs-add-btn {
    background: #f3e8ff;
    color: #6b21a8;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.cart-cs-add-btn:hover {
    background: #6b21a8;
    color: #ffffff;
}

/* Modern Cart Footer */
.cart-footer {
    padding: 16px 20px 20px 20px;
    background: #ffffff !important;
    border-top: 1px solid #e2e8f0 !important;
    flex-shrink: 0;
    box-shadow: 0 -6px 24px rgba(0, 0, 0, 0.05);
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

.cart-pricing-breakdown {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;
}

.cart-price-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.82rem;
    color: #64748b;
}

.cart-price-row.total-row {
    font-size: 1.15rem;
    font-weight: 900;
    color: #0f172a;
    border-top: 1px solid #e2e8f0;
    padding-top: 8px;
    margin-top: 4px;
}

.cart-price-row.total-row strong {
    color: #6b21a8;
    font-size: 1.25rem;
}

.cart-checkout-btn {
    background: linear-gradient(135deg, #6b21a8 0%, #8b5cf6 100%) !important;
    color: #ffffff !important;
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    border: none;
    font-size: 0.96rem;
    font-weight: 900;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(107, 33, 168, 0.3);
    transition: all 0.25s ease;
}

.cart-checkout-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 22px rgba(107, 33, 168, 0.45);
    background: linear-gradient(135deg, #581c87 0%, #7c3aed 100%) !important;
}

.cart-trust-footer-strip {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 12px;
    margin-top: 10px;
    border-top: 1px solid #f1f5f9;
    font-size: 0.72rem;
    font-weight: 700;
    color: #64748b;
}

.cart-trust-footer-strip span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.cart-trust-footer-strip i {
    color: #10b981;
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    orig = f.read()

if "MOBELMOR LUXURY MODERN CART DRAWER" not in orig:
    with open(css_path, "a", encoding="utf-8") as f:
        f.write(new_cart_css)
    print("Added luxury modern cart CSS to styles.css")
else:
    print("Luxury cart CSS already present in styles.css")
