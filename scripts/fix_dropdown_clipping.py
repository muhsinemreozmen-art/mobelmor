import os
import re

css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

perfect_dropdown_css = """
/* ==========================================================================
   PERFECT HEADER DROPDOWNS & ACTION BUTTONS POSITIONING (NO CLIPPING)
   ========================================================================== */

.app-header,
.header-container,
.header-right-col,
.header-action-buttons {
    overflow: visible !important;
}

.header-action-buttons {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    gap: 8px !important;
    flex-wrap: nowrap !important;
    position: relative !important;
}

.header-dropdown-wrapper,
.user-menu-wrapper {
    position: relative !important;
    display: inline-flex !important;
    align-items: center !important;
    flex-shrink: 0 !important;
}

.header-hover-dropdown,
.user-menu-dropdown {
    position: absolute !important;
    top: calc(100% + 10px) !important;
    background: #ffffff !important;
    width: 260px !important;
    min-width: 260px !important;
    max-width: calc(100vw - 24px) !important;
    border-radius: 16px !important;
    box-shadow: 0 20px 45px -8px rgba(107, 33, 168, 0.22), 0 0 0 1px rgba(226, 232, 240, 0.9) !important;
    border: 1px solid #e2e8f0 !important;
    padding: 8px 0 !important;
    z-index: 100000 !important;
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transform: translateY(6px) !important;
    transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
    box-sizing: border-box !important;
}

/* Left-aligned for order tracking so it flows naturally towards center */
.header-dropdown-wrapper .header-hover-dropdown {
    left: 0 !important;
    right: auto !important;
}

@media (max-width: 768px) {
    .header-dropdown-wrapper .header-hover-dropdown {
        left: auto !important;
        right: -80px !important;
    }
}

/* Right-aligned for profile user menu */
.user-menu-wrapper .user-menu-dropdown {
    right: 0 !important;
    left: auto !important;
}

.header-hover-dropdown.active,
.user-menu-dropdown.active,
.header-dropdown-wrapper.active .header-hover-dropdown,
.user-menu-wrapper.active .user-menu-dropdown {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: translateY(0) !important;
}

@media (min-width: 992px) {
    .header-dropdown-wrapper:hover .header-hover-dropdown,
    .user-menu-wrapper:hover .user-menu-dropdown {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
        transform: translateY(0) !important;
    }
}

.user-dropdown-item {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    padding: 10px 16px !important;
    font-size: 0.86rem !important;
    font-weight: 700 !important;
    color: #1e293b !important;
    text-decoration: none !important;
    white-space: nowrap !important;
    transition: all 0.15s ease !important;
}

.user-dropdown-item i {
    font-size: 1rem !important;
    width: 20px !important;
    text-align: center !important;
}

.user-dropdown-item:hover {
    background-color: #faf5ff !important;
    color: #6b21a8 !important;
    padding-left: 19px !important;
}

.user-dropdown-divider {
    height: 1px !important;
    background-color: #f1f5f9 !important;
    margin: 6px 0 !important;
}
"""

if "PERFECT HEADER DROPDOWNS & ACTION BUTTONS POSITIONING" in css:
    css = css.split("/* ==========================================================================\n   PERFECT HEADER DROPDOWNS & ACTION BUTTONS POSITIONING")[0]

css = css.strip() + "\n\n" + perfect_dropdown_css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Updated styles.css with perfect dropdown positioning!")
