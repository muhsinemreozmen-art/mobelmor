import re

# 1. UPDATE js/detail.js
detail_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js"
with open(detail_path, "r", encoding="utf-8") as f:
    detail_js = f.read()

# Update installment rendering in detail.js to use window.MobelmorCheckout.renderBankInstallmentTable if available
old_inst_render = """    // Dynamic Installment Matrix Table for Accordion
    const installmentContainer = document.getElementById("installmentTableContainer");
    if (installmentContainer) {
        const p = product.price;"""

new_inst_render = """    // Dynamic Installment Matrix Table for Accordion (6 Bank Tabbed Matrix)
    const installmentContainer = document.getElementById("installmentTableContainer");
    if (installmentContainer) {
        const p = product.price;
        if (window.MobelmorCheckout && typeof window.MobelmorCheckout.renderBankInstallmentTable === 'function') {
            window.MobelmorCheckout.renderBankInstallmentTable(installmentContainer, p);
        } else {"""

if old_inst_render in detail_js and new_inst_render not in detail_js:
    detail_js = detail_js.replace(old_inst_render, new_inst_render, 1)

# Also update recalculateDetailProductTotal in detail.js to update the installment table when modules change
old_recalc = """    const grandTotalEl = document.getElementById("moduleGrandTotal");
    if (grandTotalEl) grandTotalEl.textContent = formatPrice(finalTotal);"""

new_recalc = """    const grandTotalEl = document.getElementById("moduleGrandTotal");
    if (grandTotalEl) grandTotalEl.textContent = formatPrice(finalTotal);
    
    // Live update installment table with recalculated final total
    const instContainer = document.getElementById("installmentTableContainer");
    if (instContainer && window.MobelmorCheckout && typeof window.MobelmorCheckout.renderBankInstallmentTable === 'function') {
        window.MobelmorCheckout.renderBankInstallmentTable(instContainer, finalTotal);
    }"""

if old_recalc in detail_js and new_recalc not in detail_js:
    detail_js = detail_js.replace(old_recalc, new_recalc, 1)

with open(detail_path, "w", encoding="utf-8") as f:
    f.write(detail_js)
print("Updated js/detail.js with dynamic 6-bank installment matrix")

# 2. UPDATE js/app.js & js/detail.js Checkout Submit Logic
def update_checkout_submit_logic(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        js_content = f.read()

    # Enhance payment method selector to handle Havale %5 discount live
    old_pay_method_logic = """      // Switch active tab
      payMethodBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      payPanels.forEach(p => p.classList.remove("active"));
      if (panel) panel.classList.add("active");"""

    new_pay_method_logic = """      // Switch active tab
      payMethodBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      payPanels.forEach(p => p.classList.remove("active"));
      if (panel) panel.classList.add("active");

      // Live update Total with Havale / EFT %5 discount
      const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
      const totalEl = document.getElementById("checkoutTotal");
      const discountRow = document.getElementById("discountRowSummary");
      const discountText = document.getElementById("checkoutDiscountText");

      if (selectedPayMethod === "bank") {
          const discountAmt = Math.round(subtotal * 0.05);
          const discountedTotal = subtotal - discountAmt;
          if (totalEl) totalEl.textContent = formatPrice(discountedTotal);
          if (discountRow) discountRow.style.display = "flex";
          if (discountText) discountText.textContent = "-%" + "5 (" + formatPrice(discountAmt) + ")";
      } else {
          if (totalEl) totalEl.textContent = formatPrice(subtotal);
          if (discountRow) discountRow.style.display = "none";
      }"""

    if old_pay_method_logic in js_content and new_pay_method_logic not in js_content:
        js_content = js_content.replace(old_pay_method_logic, new_pay_method_logic, 1)

    # Enhance submit handler to capture new fields and show Order Success screen
    old_submit_success = """      // Reset and close
      setTimeout(() => {
        cart = [];
        saveCart();
        updateBadges();
        renderCart();
        if (btnSubmit) {
          btnSubmit.innerHTML = originalBtnText;
          btnSubmit.disabled = false;
        }
        document.getElementById("checkoutOverlay")?.classList.remove("active");
        document.body.classList.remove("modal-open");
        showToast("Siparişiniz başarıyla alındı! Sipariş No: " + newOrderId, "fa-circle-check");
        checkoutForm.reset();
      }, 1500);"""

    new_submit_success = """      // Reset and display rich Order Success screen inside modal
      setTimeout(() => {
        cart = [];
        saveCart();
        updateBadges();
        renderCart();
        if (btnSubmit) {
          btnSubmit.innerHTML = originalBtnText;
          btnSubmit.disabled = false;
        }

        // Show Success Screen
        const mainContent = document.getElementById("checkoutMainContent");
        const successContent = document.getElementById("checkoutSuccessContent");
        const codeBadge = document.getElementById("successOrderCode");
        const phoneBadge = document.getElementById("successCustomerPhone");
        const waLink = document.getElementById("btnSuccessWhatsapp");

        if (codeBadge) codeBadge.textContent = newOrderId;
        if (phoneBadge) phoneBadge.textContent = phone || "Kayıtlı Numaranız";
        if (waLink) {
            const waMsg = `Merhaba Mobelmor, ${newOrderId} numaralı siparişimi verdim. Sipariş teyidi ve hazırlık süreci hakkında bilgi rica ederim.`;
            waLink.href = `https://wa.me/905300000000?text=${encodeURIComponent(waMsg)}`;
        }

        if (mainContent && successContent) {
            mainContent.style.display = "none";
            successContent.style.display = "block";
        } else {
            document.getElementById("checkoutOverlay")?.classList.remove("active");
            document.body.classList.remove("modal-open");
            showToast("Siparişiniz başarıyla alındı! Sipariş No: " + newOrderId, "fa-circle-check");
        }
        checkoutForm.reset();
      }, 1200);"""

    if old_submit_success in js_content and new_submit_success not in js_content:
        js_content = js_content.replace(old_submit_success, new_submit_success, 1)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Updated checkout logic in: {file_path}")

update_checkout_submit_logic(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
update_checkout_submit_logic(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
