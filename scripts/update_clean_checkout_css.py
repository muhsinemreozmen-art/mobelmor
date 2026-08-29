import os

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"

checkout_redesign_css = """
/* ==========================================================================
   MOBELMOR LUXURY CLEAN & STRUCTURED CHECKOUT MODAL (2026 UPDATE)
   ========================================================================== */

#checkoutOverlay .modal-card {
    max-width: 540px !important;
    width: 100% !important;
    max-height: 92vh !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
    border-radius: 20px !important;
    padding: 24px !important;
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 25px 50px -12px rgba(107, 33, 168, 0.25) !important;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
    color: #0f172a !important;
}

@media (max-width: 576px) {
    #checkoutOverlay .modal-card {
        padding: 18px 16px !important;
        max-height: 96vh !important;
        border-radius: 16px !important;
    }
}

/* Modal Header */
.checkout-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 16px;
}

.checkout-modal-title-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
}

.checkout-shield-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: #f3e8ff;
    color: #6b21a8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
}

.checkout-modal-title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.02em;
}

.checkout-modal-subtitle {
    margin: 2px 0 0 0;
    color: #64748b;
    font-size: 0.76rem;
    font-weight: 600;
}

/* Modern Stepper Indicator */
.checkout-stepper-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #faf5ff;
    border: 1px solid #f3e8ff;
    border-radius: 12px;
    padding: 8px 14px;
    margin-bottom: 16px;
}

.checkout-stepper-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.78rem;
    font-weight: 700;
    color: #6b21a8;
}

.checkout-stepper-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6b21a8;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 800;
}

.checkout-stepper-sep {
    width: 20px;
    height: 2px;
    background: #e9d5ff;
}

/* Section Header */
.checkout-section-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.88rem;
    font-weight: 800;
    color: #0f172a;
    margin: 6px 0 10px 0;
    padding-bottom: 4px;
    border-bottom: 1px dashed #f1f5f9;
}

.checkout-section-badge i {
    color: #6b21a8;
}

/* Form Inputs Grid */
.checkout-input-modern {
    width: 100%;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 0.88rem;
    color: #0f172a;
    font-weight: 600;
    outline: none;
    transition: all 0.2s ease;
    box-sizing: border-box;
    font-family: inherit;
}

.checkout-input-modern:focus {
    border-color: #6b21a8;
    box-shadow: 0 0 0 3px rgba(107, 33, 168, 0.12);
}

.checkout-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

@media (max-width: 480px) {
    .checkout-grid-2 {
        grid-template-columns: 1fr;
    }
}

/* Invoice Segment Control */
.invoice-type-modern {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 4px;
    margin: 4px 0 8px 0;
}

.invoice-toggle-btn-modern {
    background: transparent;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.82rem;
    font-weight: 700;
    color: #64748b;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s ease;
}

.invoice-toggle-btn-modern.active {
    background: #ffffff;
    color: #6b21a8;
    box-shadow: 0 2px 6px rgba(107, 33, 168, 0.12);
    border: 1px solid #e9d5ff;
}

/* Delivery Option Cards */
.delivery-options-modern {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 12px;
}

@media (max-width: 480px) {
    .delivery-options-modern {
        grid-template-columns: 1fr;
    }
}

.delivery-card-modern {
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    gap: 10px;
    align-items: flex-start;
}

.delivery-card-modern.active {
    border-color: #6b21a8;
    background: #faf5ff;
    box-shadow: 0 4px 12px rgba(107, 33, 168, 0.08);
}

.delivery-card-modern input[type="radio"] {
    accent-color: #6b21a8;
    margin-top: 3px;
    width: 16px;
    height: 16px;
    cursor: pointer;
}

.delivery-card-title {
    font-size: 0.86rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 2px;
}

.delivery-card-desc {
    font-size: 0.72rem;
    color: #64748b;
    margin: 0;
    line-height: 1.3;
}

.delivery-card-pill {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: 4px;
    margin-top: 6px;
}

.delivery-card-pill.free {
    background: #dcfce7;
    color: #15803d;
}

.delivery-card-pill.plus {
    background: #f3e8ff;
    color: #6b21a8;
}

/* Payment Method Tabs */
.payment-tabs-modern {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    margin-bottom: 12px;
}

.payment-tab-btn-modern {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 10px 6px;
    font-size: 0.78rem;
    font-weight: 700;
    color: #64748b;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    transition: all 0.2s ease;
    text-align: center;
}

.payment-tab-btn-modern.active {
    background: #ffffff;
    border-color: #6b21a8;
    color: #6b21a8;
    box-shadow: 0 4px 10px rgba(107, 33, 168, 0.1);
}

.payment-tab-btn-modern i {
    font-size: 1.1rem;
}

/* Bank detected pill */
.bank-detected-pill-modern {
    font-size: 0.72rem;
    font-weight: 800;
    padding: 2px 8px;
    border-radius: 12px;
    background: #f3e8ff;
    color: #6b21a8;
    border: 1px solid #e9d5ff;
}

/* Submit CTA */
.checkout-submit-btn-modern {
    background: linear-gradient(135deg, #6b21a8 0%, #7e22ce 100%) !important;
    color: #ffffff !important;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: none;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(107, 33, 168, 0.35);
    transition: all 0.25s ease;
    margin-top: 8px;
}

.checkout-submit-btn-modern:hover {
    background: linear-gradient(135deg, #581c87 0%, #6b21a8 100%) !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(107, 33, 168, 0.45);
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    orig = f.read()

if "MOBELMOR LUXURY CLEAN & STRUCTURED CHECKOUT MODAL" in orig:
    orig = orig.split("/* ==========================================================================\n   MOBELMOR LUXURY CLEAN & STRUCTURED CHECKOUT MODAL")[0]

orig = orig.strip() + "\n\n" + checkout_redesign_css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(orig)

print("Updated styles.css with Luxury Clean & Structured Checkout Modal CSS!")
