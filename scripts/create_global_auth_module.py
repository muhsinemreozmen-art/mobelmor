import os
import re

auth_modal_js_content = """// =========================================================================
// MOBELMOR UNIVERSAL AUTH MODAL & PROFILE ENGINE (2026 UPDATE)
// =========================================================================

(function() {
    window.getCurrentUser = function() {
        try {
            if (window.StoreService && typeof window.StoreService.getCurrentCustomer === 'function') {
                const c = window.StoreService.getCurrentCustomer();
                if (c) return c;
            }
            const local = localStorage.getItem("mobelmor_active_customer") || localStorage.getItem("mobelmor_current_user");
            if (local) return JSON.parse(local);
        } catch(e) {}
        return null;
    };

    window.openAuthModal = function(view = "login", data = {}) {
        let overlay = document.getElementById("authModalOverlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "authModalOverlay";
            overlay.className = "modal-overlay";
            document.body.appendChild(overlay);
        }

        document.getElementById("userMenuDropdown")?.classList.remove("active");
        document.getElementById("orderTrackDropdown")?.classList.remove("active");

        let cardHtml = "";

        if (view === "register") {
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div class="auth-tabs-modern">
                        <button type="button" class="auth-tab-btn-modern" onclick="openAuthModal('login')">Giriş Yap</button>
                        <button type="button" class="auth-tab-btn-modern active">Üye Ol</button>
                    </div>

                    <form id="registerForm" style="display:flex; flex-direction:column; gap:12px;">
                        <input type="text" id="regName" class="auth-input-modern" placeholder="Adınız Soyadınız" required>
                        <input type="email" id="regEmail" class="auth-input-modern" placeholder="E-Posta Adresiniz" required>
                        <input type="tel" id="regPhone" class="auth-input-modern" placeholder="Telefon Numaranız" required>
                        <input type="password" id="regPassword" class="auth-input-modern" placeholder="Şifreniz (En az 6 karakter)" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-user-plus"></i> ÜCRETSİZ ÜYE OL
                        </button>
                    </form>
                </div>
            `;
        } else if (view === "forgot") {
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div style="margin-bottom:20px; text-align:center;">
                        <div style="width:48px; height:48px; border-radius:50%; background:#f3e8ff; color:#7c3aed; display:inline-flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:10px;">
                            <i class="fa-solid fa-key"></i>
                        </div>
                        <h3 style="font-size:1.25rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Şifremi Unuttum</h3>
                        <p style="font-size:0.86rem; color:#71717a; margin:0; line-height:1.4;">
                            Kayıtlı e-posta adresinizi giriniz. Şifrenizi yenilemeniz için 6 haneli doğrulama kodu iletilecektir.
                        </p>
                    </div>

                    <form id="forgotReqForm" style="display:flex; flex-direction:column; gap:14px;">
                        <input type="email" id="forgotEmail" class="auth-input-modern" placeholder="Kayıtlı E-Posta Adresiniz" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-paper-plane"></i> SIFIRLAMA KODU GÖNDER
                        </button>
                        <div style="text-align:center;">
                            <button type="button" class="auth-back-link" onclick="openAuthModal('login')">
                                <i class="fa-solid fa-arrow-left"></i> Giriş Yap'a Dön
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else if (view === "forgot_step2") {
            const resetEmail = data.email || "";
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div style="margin-bottom:18px; text-align:center;">
                        <div style="width:48px; height:48px; border-radius:50%; background:#f0fdf4; color:#16a34a; display:inline-flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:10px;">
                            <i class="fa-solid fa-shield-check"></i>
                        </div>
                        <h3 style="font-size:1.25rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Yeni Şifre Belirle</h3>
                        <p style="font-size:0.85rem; color:#71717a; margin:0; line-height:1.4;">
                            <strong style="color:#18181b;">${resetEmail}</strong> adresine iletilen 6 haneli kodu ve yeni şifrenizi giriniz.
                        </p>
                        ${data.code ? `
                            <div style="margin-top:10px; padding:8px 12px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; font-size:0.84rem; color:#15803d; font-weight:700;">
                                <i class="fa-solid fa-circle-check"></i> Doğrulama Kodunuz: ${data.code}
                            </div>
                        ` : ''}
                    </div>

                    <form id="forgotVerifyForm" style="display:flex; flex-direction:column; gap:12px;">
                        <input type="hidden" id="resetTargetEmail" value="${resetEmail}">
                        <input type="text" id="resetCode" class="auth-input-modern otp-code-input" placeholder="000000" maxlength="6" required>
                        <input type="password" id="resetNewPassword" class="auth-input-modern" placeholder="Yeni Şifreniz (En az 6 karakter)" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-check"></i> ŞİFREMİ GÜNCELLE &amp; GİRİŞ YAP
                        </button>
                        <div style="text-align:center;">
                            <button type="button" class="auth-back-link" onclick="openAuthModal('forgot')">
                                <i class="fa-solid fa-arrow-left"></i> E-Postayı Değiştir
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else if (view === "magic_otp") {
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div style="margin-bottom:20px; text-align:center;">
                        <div style="width:48px; height:48px; border-radius:50%; background:#f3e8ff; color:#7c3aed; display:inline-flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:10px;">
                            <i class="fa-solid fa-envelope-circle-check"></i>
                        </div>
                        <h3 style="font-size:1.25rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Şifresiz Hızlı Giriş</h3>
                        <p style="font-size:0.86rem; color:#71717a; margin:0; line-height:1.4;">
                            Şifre hatırlamanıza gerek yok! E-postanızı girin, size tek kullanımlık 6 haneli giriş kodu gönderelim.
                        </p>
                    </div>

                    <form id="magicOtpReqForm" style="display:flex; flex-direction:column; gap:14px;">
                        <input type="email" id="magicOtpEmail" class="auth-input-modern" placeholder="E-Posta Adresiniz" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-paper-plane"></i> GİRİŞ KODU GÖNDER
                        </button>
                        <div style="text-align:center;">
                            <button type="button" class="auth-back-link" onclick="openAuthModal('login')">
                                <i class="fa-solid fa-arrow-left"></i> Şifre ile Normal Giriş
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else if (view === "magic_otp_step2") {
            const loginEmail = data.email || "";
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div style="margin-bottom:18px; text-align:center;">
                        <div style="width:48px; height:48px; border-radius:50%; background:#f0fdf4; color:#16a34a; display:inline-flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:10px;">
                            <i class="fa-solid fa-envelope-open-text"></i>
                        </div>
                        <h3 style="font-size:1.25rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Giriş Kodunu Giriniz</h3>
                        <p style="font-size:0.85rem; color:#71717a; margin:0; line-height:1.4;">
                            <strong style="color:#18181b;">${loginEmail}</strong> adresinize 6 haneli tek kullanımlık kod iletildi.
                        </p>
                        ${data.code ? `
                            <div style="margin-top:10px; padding:8px 12px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; font-size:0.84rem; color:#15803d; font-weight:700;">
                                <i class="fa-solid fa-circle-check"></i> Giriş Kodunuz: ${data.code}
                            </div>
                        ` : ''}
                    </div>

                    <form id="magicOtpVerifyForm" style="display:flex; flex-direction:column; gap:14px;">
                        <input type="hidden" id="magicTargetEmail" value="${loginEmail}">
                        <input type="text" id="magicCode" class="auth-input-modern otp-code-input" placeholder="000000" maxlength="6" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-right-to-bracket"></i> ŞİFRESİZ GİRİŞ YAP
                        </button>
                        <div style="text-align:center;">
                            <button type="button" class="auth-back-link" onclick="openAuthModal('magic_otp')">
                                <i class="fa-solid fa-arrow-left"></i> Farklı E-Posta Kullan
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else {
            // Default: Standard Login
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div class="auth-tabs-modern">
                        <button type="button" class="auth-tab-btn-modern active">Giriş Yap</button>
                        <button type="button" class="auth-tab-btn-modern" onclick="openAuthModal('register')">Üye Ol</button>
                    </div>

                    <form id="loginForm" style="display:flex; flex-direction:column; gap:12px;">
                        <input type="email" id="loginEmail" class="auth-input-modern" placeholder="E-Posta Adresiniz" required>
                        <input type="password" id="loginPassword" class="auth-input-modern" placeholder="Şifreniz" required>
                        
                        <div class="auth-link-row">
                            <label class="auth-checkbox-wrap">
                                <input type="checkbox" id="rememberMe" checked>
                                <span>Beni Hatırla</span>
                            </label>
                            <a href="javascript:void(0)" onclick="openAuthModal('forgot')" class="auth-forgot-link">Şifremi Unuttum?</a>
                        </div>

                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-right-to-bracket"></i> GİRİŞ YAP
                        </button>

                        <div class="auth-divider">
                            <div class="auth-divider-line"></div>
                            <span class="auth-divider-text">veya</span>
                            <div class="auth-divider-line"></div>
                        </div>

                        <button type="button" class="btn-auth-secondary interactive-btn" onclick="openAuthModal('magic_otp')">
                            <i class="fa-solid fa-envelope-circle-check" style="color:#7c3aed; font-size:1rem;"></i> E-Posta ile Şifresiz Giriş Yap (Kodlu)
                        </button>

                        <p style="text-align:center; font-size:0.82rem; color:#71717a; margin:8px 0 0 0;">
                            Üye olmadan sipariş takip etmek için <a href="siparislerim.html" style="color:#6b21a8; font-weight:700; text-decoration:none;">tıklayınız</a>.
                        </p>
                    </form>
                </div>
            `;
        }

        overlay.innerHTML = cardHtml;
        overlay.style.display = "flex";
        overlay.classList.add("active");
        document.body.classList.add("modal-open");

        attachAuthModalEvents(view);
    };

    window.closeAuthModal = function() {
        const overlay = document.getElementById("authModalOverlay");
        if (overlay) {
            overlay.classList.remove("active");
            overlay.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    };

    function attachAuthModalEvents(view) {
        const overlay = document.getElementById("authModalOverlay");
        if (overlay) {
            overlay.onclick = (e) => {
                if (e.target.id === "authModalOverlay") {
                    closeAuthModal();
                }
            };
        }

        // Login Submit
        const loginForm = document.getElementById("loginForm");
        if (loginForm) {
            setTimeout(() => document.getElementById("loginEmail")?.focus(), 150);
            loginForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = (document.getElementById("loginEmail")?.value || "").trim().toLowerCase();
                const pass = (document.getElementById("loginPassword")?.value || "").trim();
                const submitBtn = loginForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Giriş Yap";
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kontrol Ediliyor...';
                }

                try {
                    const sessionUser = await window.StoreService.loginCustomer(email, pass);
                    updateAuthUI();
                    closeAuthModal();
                    if (typeof showToast === 'function') showToast(`Hoş geldiniz, ${sessionUser.fullName || sessionUser.name}!`, "fa-circle-check");
                } catch (err) {
                    if (typeof showToast === 'function') showToast(err.message, "fa-triangle-exclamation"); else alert(err.message);
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // Register Submit
        const registerForm = document.getElementById("registerForm");
        if (registerForm) {
            setTimeout(() => document.getElementById("regName")?.focus(), 150);
            registerForm.onsubmit = async (e) => {
                e.preventDefault();
                const name = (document.getElementById("regName")?.value || "").trim();
                const email = (document.getElementById("regEmail")?.value || "").trim().toLowerCase();
                const phone = (document.getElementById("regPhone")?.value || "").trim();
                const password = (document.getElementById("regPassword")?.value || "").trim();
                const submitBtn = registerForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Ücretsiz Üye Ol";

                if (!name || !email || !password) {
                    if (typeof showToast === 'function') showToast("Lütfen zorunlu alanları doldurunuz.", "fa-triangle-exclamation");
                    return;
                }

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kayıt Yapılıyor...';
                }

                try {
                    const res = await window.StoreService.registerCustomer({
                        fullName: name,
                        name: name,
                        email: email,
                        phone: phone,
                        password: password
                    });

                    if (res && res.confirmationSent) {
                        if (typeof showToast === 'function') showToast(`Doğrulama bağlantısı ${email} adresinize gönderildi!`, "fa-envelope-circle-check");
                        window.openAuthModal("login");
                    } else {
                        updateAuthUI();
                        closeAuthModal();
                        if (typeof showToast === 'function') showToast(`Üyeliğiniz oluşturuldu! Hoş geldiniz, ${name}.`, "fa-circle-check");
                    }
                } catch (err) {
                    if (typeof showToast === 'function') showToast(err.message, "fa-triangle-exclamation"); else alert(err.message);
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // Forgot Password Step 1
        const forgotReqForm = document.getElementById("forgotReqForm");
        if (forgotReqForm) {
            setTimeout(() => document.getElementById("forgotEmail")?.focus(), 150);
            forgotReqForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = (document.getElementById("forgotEmail")?.value || "").trim().toLowerCase();
                const submitBtn = forgotReqForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Sıfırlama Kodu Gönder";

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Gönderiliyor...';
                }

                try {
                    const res = await window.StoreService.requestPasswordReset(email);
                    if (typeof showToast === 'function') showToast(`Sıfırlama kodu iletildi!`, "fa-envelope-circle-check");
                    window.openAuthModal("forgot_step2", { email: res.email, code: res.code });
                } catch (err) {
                    if (typeof showToast === 'function') showToast(err.message, "fa-triangle-exclamation"); else alert(err.message);
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // Forgot Password Step 2
        const forgotVerifyForm = document.getElementById("forgotVerifyForm");
        if (forgotVerifyForm) {
            setTimeout(() => document.getElementById("resetCode")?.focus(), 150);
            forgotVerifyForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = document.getElementById("resetTargetEmail")?.value || "";
                const code = (document.getElementById("resetCode")?.value || "").trim();
                const newPass = (document.getElementById("resetNewPassword")?.value || "").trim();
                const submitBtn = forgotVerifyForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Şifremi Güncelle";

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Güncelleniyor...';
                }

                try {
                    const sessionUser = await window.StoreService.verifyAndResetPassword(email, code, newPass);
                    updateAuthUI();
                    closeAuthModal();
                    if (typeof showToast === 'function') showToast(`Şifreniz güncellendi! Hoş geldiniz, ${sessionUser.fullName || sessionUser.name}.`, "fa-circle-check");
                } catch (err) {
                    if (typeof showToast === 'function') showToast(err.message, "fa-triangle-exclamation"); else alert(err.message);
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // Magic OTP Step 1
        const magicOtpReqForm = document.getElementById("magicOtpReqForm");
        if (magicOtpReqForm) {
            setTimeout(() => document.getElementById("magicOtpEmail")?.focus(), 150);
            magicOtpReqForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = (document.getElementById("magicOtpEmail")?.value || "").trim().toLowerCase();
                const submitBtn = magicOtpReqForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Kod Gönder";

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kod Gönderiliyor...';
                }

                try {
                    const res = await window.StoreService.requestEmailOtpLogin(email);
                    if (typeof showToast === 'function') showToast(`Giriş kodu iletildi!`, "fa-envelope-circle-check");
                    window.openAuthModal("magic_otp_step2", { email: res.email, code: res.code });
                } catch (err) {
                    if (typeof showToast === 'function') showToast(err.message, "fa-triangle-exclamation"); else alert(err.message);
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // Magic OTP Step 2
        const magicOtpVerifyForm = document.getElementById("magicOtpVerifyForm");
        if (magicOtpVerifyForm) {
            setTimeout(() => document.getElementById("magicCode")?.focus(), 150);
            magicOtpVerifyForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = document.getElementById("magicTargetEmail")?.value || "";
                const code = (document.getElementById("magicCode")?.value || "").trim();
                const submitBtn = magicOtpVerifyForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Şifresiz Giriş Yap";

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Doğrulanıyor...';
                }

                try {
                    const sessionUser = await window.StoreService.verifyEmailOtpLogin(email, code);
                    updateAuthUI();
                    closeAuthModal();
                    if (typeof showToast === 'function') showToast(`Giriş başarılı! Hoş geldiniz, ${sessionUser.fullName || sessionUser.name}.`, "fa-circle-check");
                } catch (err) {
                    if (typeof showToast === 'function') showToast(err.message, "fa-triangle-exclamation"); else alert(err.message);
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }
    }

    window.updateAuthUI = function() {
        const user = getCurrentUser();
        const authBtn = document.getElementById("headerAuthBtn");
        const authText = document.getElementById("headerAuthText");
        const dropdown = document.getElementById("userMenuDropdown");

        if (user) {
            const rawName = user.fullName || user.name || "Müşteri";
            const dispName = rawName.split(/\s+/)[0];
            authBtn?.classList.add("logged-in");
            if (authText) authText.textContent = dispName;
            if (dropdown) {
                dropdown.innerHTML = `
                    <div style="padding:10px 14px; font-size:0.84rem; font-weight:800; color:#18181b; border-bottom:1px solid #f4f4f5;">
                        <i class="fa-solid fa-circle-user" style="color:#6b21a8;"></i> Hoş geldiniz, ${dispName}
                    </div>
                    <a href="hesabim.html" class="user-dropdown-item"><i class="fa-solid fa-user-gear" style="color:#6b21a8;"></i> Hesabım &amp; Profil</a>
                    <a href="siparislerim.html" class="user-dropdown-item"><i class="fa-solid fa-box-open" style="color:#6b21a8;"></i> Siparişlerim &amp; Takip</a>
                    <div class="user-dropdown-divider"></div>
                    <a href="javascript:void(0)" class="user-dropdown-item" id="logoutBtn" style="color:#ef4444;"><i class="fa-solid fa-arrow-right-from-bracket"></i> Çıkış Yap</a>
                `;
                document.getElementById("logoutBtn")?.addEventListener("click", () => {
                    localStorage.removeItem("mobelmor_active_customer");
                    localStorage.removeItem("mobelmor_current_user");
                    updateAuthUI();
                    if (typeof showToast === 'function') showToast("Başarıyla çıkış yapıldı.", "fa-arrow-right-from-bracket");
                    if (window.location.pathname.includes("siparislerim") || window.location.pathname.includes("hesabim")) {
                        setTimeout(() => window.location.reload(), 500);
                    }
                });
            }
        } else {
            authBtn?.classList.remove("logged-in");
            if (authText) authText.textContent = "Giriş";
            if (dropdown) {
                dropdown.innerHTML = `
                    <div style="padding:10px 14px; font-size:0.84rem; font-weight:800; color:#18181b; border-bottom:1px solid #f4f4f5;">
                        <i class="fa-regular fa-user" style="color:#6b21a8;"></i> Mobelmor Üyelik
                    </div>
                    <a href="javascript:void(0)" onclick="openAuthModal('login')" class="user-dropdown-item"><i class="fa-solid fa-arrow-right-to-bracket" style="color:#6b21a8;"></i> Giriş Yap</a>
                    <a href="javascript:void(0)" onclick="openAuthModal('register')" class="user-dropdown-item"><i class="fa-solid fa-user-plus" style="color:#6b21a8;"></i> Ücretsiz Kayıt Ol</a>
                    <div class="user-dropdown-divider"></div>
                    <a href="siparislerim.html" class="user-dropdown-item"><i class="fa-solid fa-truck-fast" style="color:#6b21a8;"></i> Sipariş Takip</a>
                `;
            }
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        updateAuthUI();
    });
})();
"""

with open(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\auth-modal.js", "w", encoding="utf-8") as f:
    f.write(auth_modal_js_content)

print("Created js/auth-modal.js!")
