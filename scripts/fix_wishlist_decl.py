import os
import re

def fix_wishlist_var(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    # Ensure let wishlist is declared right at the top of wishlist engine
    wishlist_decl = """// Global Wishlist State Definition
let wishlist = new Set();
try {
    const raw = localStorage.getItem("mobelmor_wishlist");
    if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) wishlist = new Set(parsed.map(x => parseInt(x) || x));
    }
} catch (e) {}
window.wishlist = wishlist;
"""

    if "let wishlist =" not in code:
        # Insert before window.loadWishlist
        if "window.loadWishlist = () => {" in code:
            code = code.replace("window.loadWishlist = () => {", wishlist_decl + "\nwindow.loadWishlist = () => {", 1)
        else:
            code = wishlist_decl + "\n" + code

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(code)
        print(f"Fixed wishlist variable declaration in: {file_path}")
    else:
        print(f"wishlist variable already declared in: {file_path}")

fix_wishlist_var(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
fix_wishlist_var(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
