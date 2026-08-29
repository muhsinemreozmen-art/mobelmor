import os
import re

# 1. Update css/styles.css with rock-solid header alignment and dropdown fixes
css_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\css\styles.css"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

header_alignment_fix = """
/* ==========================================================================
   HEADER ACTION BUTTONS & DROPDOWNS BULLETPROOF ALIGNMENT (NO DOWNWARD FLOW)
   ========================================================================== */

.header-right-col {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    flex-shrink: 0 !important;
}

.header-action-buttons {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    gap: 8px !important;
    flex-wrap: nowrap !important;
    margin: 0 !important;
    padding: 0 !important;
}

.header-dropdown-wrapper,
.user-menu-wrapper {
    position: relative !important;
    display: inline-flex !important;
    align-items: center !important;
    margin: 0 !important;
    padding: 0 !important;
    flex-shrink: 0 !important;
}

.header-action-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
    background: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    color: #334155 !important;
    font-size: 0.82rem !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    padding: 0 12px !important;
    height: 38px !important;
    min-height: 38px !important;
    border-radius: 999px !important;
    position: relative !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    text-decoration: none !important;
    box-sizing: border-box !important;
}

.header-action-btn:hover {
    color: #0f172a !important;
    background: #ffffff !important;
    border-color: #cbd5e1 !important;
    box-shadow: 0 4px 12px rgba(107, 33, 168, 0.08) !important;
}

.header-hover-dropdown,
.user-menu-dropdown {
    position: absolute !important;
    top: calc(100% + 8px) !important;
    right: 0 !important;
    left: auto !important;
    background: #ffffff !important;
    min-width: 220px !important;
    border-radius: 14px !important;
    box-shadow: 0 14px 34px -4px rgba(15, 23, 42, 0.15), 0 4px 14px -2px rgba(15, 23, 42, 0.08) !important;
    border: 1px solid #e2e8f0 !important;
    padding: 6px 0 !important;
    z-index: 99999 !important;
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transform: translateY(6px) !important;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
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
"""

if "HEADER ACTION BUTTONS & DROPDOWNS BULLETPROOF ALIGNMENT" in css:
    css = css.split("/* ==========================================================================\n   HEADER ACTION BUTTONS & DROPDOWNS BULLETPROOF ALIGNMENT")[0]

css = css.strip() + "\n\n" + header_alignment_fix

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Updated styles.css with bulletproof header alignment!")
