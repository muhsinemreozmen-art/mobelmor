import os
import re

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"

new_css = """
/* ==========================================================================
   MOBELMOR ADVANCED CHECKOUT, INSTALLMENTS & FURNITURE UX (2026 UPDATE)
   ========================================================================== */

/* 1. Multi-Step Checkout Modal Enhancements */
.checkout-steps-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 16px 0;
    padding: 0 4px;
    position: relative;
}

.checkout-step-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #94a3b8;
    position: relative;
    z-index: 2;
}

.checkout-step-item.active {
    color: #6b21a8;
}

.checkout-step-num {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #e2e8f0;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 800;
    transition: all 0.2s ease;
}

.checkout-step-item.active .checkout-step-num {
    background: #6b21a8;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(107, 33, 168, 0.3);
}

.checkout-step-divider {
    flex: 1;
    height: 2px;
    background: #e2e8f0;
    margin: 0 8px;
}

/* Invoice Type Selector Toggle */
.invoice-type-toggle {
    display: flex;
    gap: 8px;
    background: #f8fafc;
    padding: 4px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    margin: 6px 0;
}

.invoice-toggle-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 7px 12px;
    border-radius: 8px;
    font-size: 0.82rem;
    font-weight: 700;
    color: #64748b;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
}

.invoice-toggle-btn.active {
    background: #ffffff;
    color: #6b21a8;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.invoice-kurumsal-fields {
    display: none;
    flex-direction: column;
    gap: 8px;
    background: #faf5ff;
    border: 1px dashed #d8b4fe;
    padding: 10px;
    border-radius: 10px;
    margin-top: 4px;
}

.invoice-kurumsal-fields.show {
    display: flex;
}

/* City & District Selects */
.city-district-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.checkout-select {
    width: 100%;
    padding: 9px 12px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.85rem;
    background: #ffffff;
    color: #1e293b;
    box-sizing: border-box;
    cursor: pointer;
    transition: border-color 0.2s ease;
}

.checkout-select:focus {
    outline: none;
    border-color: #6b21a8;
    box-shadow: 0 0 0 3px rgba(107, 33, 168, 0.1);
}

/* Logistic & Assembly Selection Cards */
.delivery-options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin: 8px 0;
}

@media (max-width: 540px) {
    .delivery-options-grid {
        grid-template-columns: 1fr;
    }
}

.delivery-card-radio {
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    padding: 10px 12px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #ffffff;
    position: relative;
}

.delivery-card-radio.active {
    border-color: #6b21a8;
    background: #faf5ff;
    box-shadow: 0 2px 8px rgba(107, 33, 168, 0.08);
}

.delivery-card-radio input[type="radio"] {
    accent-color: #6b21a8;
    margin-top: 3px;
}

.delivery-card-info h6 {
    margin: 0 0 2px 0;
    font-size: 0.84rem;
    font-weight: 800;
    color: #1e1b4b;
}

.delivery-card-info p {
    margin: 0;
    font-size: 0.74rem;
    color: #64748b;
    line-height: 1.35;
}

.delivery-card-badge {
    font-size: 0.7rem;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: 4px;
    display: inline-block;
    margin-top: 4px;
}

.delivery-card-badge.free {
    background: #dcfce7;
    color: #15803d;
}

.delivery-card-badge.plus {
    background: #f3e8ff;
    color: #6b21a8;
}

/* Card BIN & Installment Dropdown */
.card-bin-indicator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 6px 10px;
    border-radius: 8px;
    margin: 4px 0 8px 0;
    font-size: 0.78rem;
    color: #475569;
}

.bank-detected-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 800;
    padding: 2px 8px;
    border-radius: 999px;
    background: #f3e8ff;
    color: #6b21a8;
    font-size: 0.75rem;
}

.installment-select-wrap {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.installment-select-wrap label {
    font-size: 0.78rem;
    font-weight: 700;
    color: #334155;
}

/* IBAN Copy Box */
.iban-copy-btn {
    background: #f3e8ff;
    color: #6b21a8;
    border: none;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.iban-copy-btn:hover {
    background: #6b21a8;
    color: #ffffff;
}

/* Order Success Modal State */
.order-success-card {
    text-align: center;
    padding: 20px 10px;
}

.order-success-icon-wrap {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #dcfce7;
    color: #16a34a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto 16px auto;
    box-shadow: 0 4px 14px rgba(22, 163, 74, 0.2);
}

.order-code-badge {
    display: inline-block;
    background: #f1f5f9;
    color: #0f172a;
    font-family: monospace;
    font-size: 1.15rem;
    font-weight: 900;
    padding: 6px 16px;
    border-radius: 8px;
    letter-spacing: 1px;
    margin: 8px 0 14px 0;
    border: 1px dashed #cbd5e1;
}

/* 2. Product Detail Installment Table Component */
.bank-tabs-nav {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 4px 0 10px 0;
    scrollbar-width: thin;
}

.bank-tab-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 8px;
    border: 1.5px solid #e2e8f0;
    background: #ffffff;
    font-size: 0.82rem;
    font-weight: 700;
    color: #475569;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
}

.bank-tab-btn.active {
    border-color: #6b21a8;
    background: #6b21a8;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(107, 33, 168, 0.25);
}

.installment-table-matrix {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8px;
    font-size: 0.84rem;
    border-radius: 8px;
    overflow: hidden;
}

.installment-table-matrix th {
    background: #f8fafc;
    color: #334155;
    font-weight: 800;
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1.5px solid #e2e8f0;
}

.installment-table-matrix td {
    padding: 9px 12px;
    border-bottom: 1px solid #f1f5f9;
    color: #1e293b;
}

.installment-table-matrix tr:hover td {
    background: #faf5ff;
}

.tag-no-interest {
    display: inline-block;
    background: #dcfce7;
    color: #15803d;
    font-size: 0.7rem;
    font-weight: 800;
    padding: 2px 6px;
    border-radius: 4px;
}

/* 3. Free Fabric Sample Modal */
.fabric-sample-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 8px;
    margin: 12px 0;
    max-height: 180px;
    overflow-y: auto;
    padding: 4px;
}

.fabric-sample-chip {
    border: 1.5px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    background: #ffffff;
    transition: all 0.2s ease;
    user-select: none;
}

.fabric-sample-chip.selected {
    border-color: #6b21a8;
    background: #faf5ff;
}

.fabric-chip-color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.1);
    flex-shrink: 0;
}

.fabric-chip-name {
    font-size: 0.76rem;
    font-weight: 700;
    color: #1e293b;
    line-height: 1.2;
}

/* Production & Lead Time Badge on Buy Box */
.leadtime-trust-badge {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 4px solid #10b981;
    padding: 10px 12px;
    border-radius: 8px;
    margin: 12px 0;
}

.leadtime-icon {
    font-size: 1.3rem;
    color: #10b981;
    flex-shrink: 0;
}

.leadtime-text h6 {
    margin: 0 0 2px 0;
    font-size: 0.84rem;
    font-weight: 800;
    color: #0f172a;
}

.leadtime-text p {
    margin: 0;
    font-size: 0.76rem;
    color: #64748b;
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    orig = f.read()

if "MOBELMOR ADVANCED CHECKOUT, INSTALLMENTS & FURNITURE UX" not in orig:
    with open(css_path, "a", encoding="utf-8") as f:
        f.write(new_css)
    print("Added advanced checkout styles to styles.css")
else:
    print("Styles already present in styles.css")
