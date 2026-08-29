import os

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"

coupon_applied_css = """
/* Luxury Applied Coupon Pill & Cancel Button */
.luxury-applied-coupon-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 10px;
    padding: 8px 12px;
    margin-top: 6px;
    animation: fadeInCoupon 0.25s ease-out;
}

@keyframes fadeInCoupon {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
}

.luxury-coupon-badge-info {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.78rem;
    color: #15803d;
    font-weight: 800;
}

.luxury-coupon-badge-info i {
    font-size: 0.85rem;
}

.luxury-coupon-cancel-btn {
    background: #ffffff;
    border: 1px solid #fecaca;
    color: #dc2626;
    font-size: 0.72rem;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 6px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.15s ease;
}

.luxury-coupon-cancel-btn:hover {
    background: #fee2e2;
    border-color: #f87171;
    color: #b91c1c;
}
"""

with open(css_path, "r", encoding="utf-8") as f:
    orig = f.read()

if "luxury-applied-coupon-row" not in orig:
    orig += "\n" + coupon_applied_css
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(orig)
    print("Added luxury coupon badge and cancel button CSS!")
