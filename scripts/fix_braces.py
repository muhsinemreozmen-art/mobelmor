import re

# 1. FIX js/detail.js
detail_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js"
with open(detail_path, "r", encoding="utf-8") as f:
    detail_code = f.read()

# Replace the unclosed else block with clean, correct code
broken_block = """    // Dynamic Installment Matrix Table for Accordion (6 Bank Tabbed Matrix)
    const installmentContainer = document.getElementById("installmentTableContainer");
    if (installmentContainer) {
        const p = product.price;
        if (window.MobelmorCheckout && typeof window.MobelmorCheckout.renderBankInstallmentTable === 'function') {
            window.MobelmorCheckout.renderBankInstallmentTable(installmentContainer, p);
        } else {
        installmentContainer.innerHTML = `
            <div style="margin-bottom:12px; font-weight:700; color:#0f172a; font-size:0.9rem;">
                <i class="fa-solid fa-shield-halved" style="color:#16a34a;"></i> Peşin Fiyatına 6 Taksit İmkanı (Vade Farksız)
            </div>
            <div style="overflow-x:auto;">
                <table class="installment-matrix-table" style="width:100%; border-collapse:collapse; text-align:center; font-size:0.86rem;">
                    <thead>
                        <tr style="background:#f8fafc; color:#475569; border-bottom:2px solid #e2e8f0;">
                            <th style="padding:10px 14px; text-align:left;">Taksit Sayısı</th>
                            <th style="padding:10px 14px;">Aylık Ödeme</th>
                            <th style="padding:10px 14px;">Toplam Tutar</th>
                            <th style="padding:10px 14px;">Vade Farkı</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #f1f5f9;">
                            <td style="padding:10px 14px; text-align:left; font-weight:700; color:#1e293b;">Tek Çekim (Peşin)</td>
                            <td style="padding:10px 14px; font-weight:800; color:#0f172a;">${formatPrice(p)}</td>
                            <td style="padding:10px 14px; font-weight:700;">${formatPrice(p)}</td>
                            <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Ücretsiz (0 TL)</td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9; background:#faf5ff;">
                            <td style="padding:10px 14px; text-align:left; font-weight:700; color:#6b21a8;">3 Taksit (Peşin Fiyatına)</td>
                            <td style="padding:10px 14px; font-weight:800; color:#6b21a8;">${formatPrice(Math.round(p / 3))} x 3</td>
                            <td style="padding:10px 14px; font-weight:700; color:#6b21a8;">${formatPrice(p)}</td>
                            <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Vade Farksız</td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9; background:#faf5ff;">
                            <td style="padding:10px 14px; text-align:left; font-weight:700; color:#6b21a8;">6 Taksit (Peşin Fiyatına)</td>
                            <td style="padding:10px 14px; font-weight:800; color:#6b21a8;">${formatPrice(Math.round(p / 6))} x 6</td>
                            <td style="padding:10px 14px; font-weight:700; color:#6b21a8;">${formatPrice(p)}</td>
                            <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Vade Farksız</td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9;">
                            <td style="padding:10px 14px; text-align:left; font-weight:600; color:#475569;">9 Taksit</td>
                            <td style="padding:10px 14px; font-weight:700; color:#334155;">${formatPrice(Math.round((p * 1.08) / 9))} x 9</td>
                            <td style="padding:10px 14px; font-weight:600;">${formatPrice(Math.round(p * 1.08))}</td>
                            <td style="padding:10px 14px; color:#64748b;">+%8</td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9;">
                            <td style="padding:10px 14px; text-align:left; font-weight:600; color:#475569;">12 Taksit</td>
                            <td style="padding:10px 14px; font-weight:700; color:#334155;">${formatPrice(Math.round((p * 1.14) / 12))} x 12</td>
                            <td style="padding:10px 14px; font-weight:600;">${formatPrice(Math.round(p * 1.14))}</td>
                            <td style="padding:10px 14px; color:#64748b;">+%14</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="margin-top:14px; padding:12px 16px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#166534;">
                <i class="fa-solid fa-money-bill-transfer" style="font-size:1.1rem;"></i>
                <span><strong>Havale / EFT İndirimi:</strong> Havale ile yapılan ödemelerde ekstra <strong>%5 Anında İndirim</strong> uygulanır!</span>
            </div>
        `;
    }
};"""

clean_block = """    // Dynamic Installment Matrix Table for Accordion (6 Bank Tabbed Matrix)
    const installmentContainer = document.getElementById("installmentTableContainer");
    if (installmentContainer) {
        const p = product.price;
        if (window.MobelmorCheckout && typeof window.MobelmorCheckout.renderBankInstallmentTable === 'function') {
            window.MobelmorCheckout.renderBankInstallmentTable(installmentContainer, p);
        } else {
            installmentContainer.innerHTML = `
                <div style="margin-bottom:12px; font-weight:700; color:#0f172a; font-size:0.9rem;">
                    <i class="fa-solid fa-shield-halved" style="color:#16a34a;"></i> Peşin Fiyatına 6 Taksit İmkanı (Vade Farksız)
                </div>
                <div style="overflow-x:auto;">
                    <table class="installment-matrix-table" style="width:100%; border-collapse:collapse; text-align:center; font-size:0.86rem;">
                        <thead>
                            <tr style="background:#f8fafc; color:#475569; border-bottom:2px solid #e2e8f0;">
                                <th style="padding:10px 14px; text-align:left;">Taksit Sayısı</th>
                                <th style="padding:10px 14px;">Aylık Ödeme</th>
                                <th style="padding:10px 14px;">Toplam Tutar</th>
                                <th style="padding:10px 14px;">Vade Farkı</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #f1f5f9;">
                                <td style="padding:10px 14px; text-align:left; font-weight:700; color:#1e293b;">Tek Çekim (Peşin)</td>
                                <td style="padding:10px 14px; font-weight:800; color:#0f172a;">${formatPrice(p)}</td>
                                <td style="padding:10px 14px; font-weight:700;">${formatPrice(p)}</td>
                                <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Ücretsiz (0 TL)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #f1f5f9; background:#faf5ff;">
                                <td style="padding:10px 14px; text-align:left; font-weight:700; color:#6b21a8;">3 Taksit (Peşin Fiyatına)</td>
                                <td style="padding:10px 14px; font-weight:800; color:#6b21a8;">${formatPrice(Math.round(p / 3))} x 3</td>
                                <td style="padding:10px 14px; font-weight:700; color:#6b21a8;">${formatPrice(p)}</td>
                                <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Vade Farksız</td>
                            </tr>
                            <tr style="border-bottom:1px solid #f1f5f9; background:#faf5ff;">
                                <td style="padding:10px 14px; text-align:left; font-weight:700; color:#6b21a8;">6 Taksit (Peşin Fiyatına)</td>
                                <td style="padding:10px 14px; font-weight:800; color:#6b21a8;">${formatPrice(Math.round(p / 6))} x 6</td>
                                <td style="padding:10px 14px; font-weight:700; color:#6b21a8;">${formatPrice(p)}</td>
                                <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Vade Farksız</td>
                            </tr>
                            <tr style="border-bottom:1px solid #f1f5f9;">
                                <td style="padding:10px 14px; text-align:left; font-weight:600; color:#475569;">9 Taksit</td>
                                <td style="padding:10px 14px; font-weight:700; color:#334155;">${formatPrice(Math.round((p * 1.08) / 9))} x 9</td>
                                <td style="padding:10px 14px; font-weight:600;">${formatPrice(Math.round(p * 1.08))}</td>
                                <td style="padding:10px 14px; color:#64748b;">+%8</td>
                            </tr>
                            <tr style="border-bottom:1px solid #f1f5f9;">
                                <td style="padding:10px 14px; text-align:left; font-weight:600; color:#475569;">12 Taksit</td>
                                <td style="padding:10px 14px; font-weight:700; color:#334155;">${formatPrice(Math.round((p * 1.14) / 12))} x 12</td>
                                <td style="padding:10px 14px; font-weight:600;">${formatPrice(Math.round(p * 1.14))}</td>
                                <td style="padding:10px 14px; color:#64748b;">+%14</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="margin-top:14px; padding:12px 16px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#166534;">
                    <i class="fa-solid fa-money-bill-transfer" style="font-size:1.1rem;"></i>
                    <span><strong>Havale / EFT İndirimi:</strong> Havale ile yapılan ödemelerde ekstra <strong>%5 Anında İndirim</strong> uygulanır!</span>
                </div>
            `;
        }
    }
};"""

if broken_block in detail_code:
    detail_code = detail_code.replace(broken_block, clean_block)
    with open(detail_path, "w", encoding="utf-8") as f:
        f.write(detail_code)
    print("Fixed syntax error in detail.js!")
else:
    print("Broken block not matched exactly, checking alternate search")

# 2. CHECK js/app.js
app_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js"
with open(app_path, "r", encoding="utf-8") as f:
    app_code = f.read()

# Let's check where the extra brace is in app.js around renderCart
print("app.js braces before:", app_code.count('{'), app_code.count('}'))
