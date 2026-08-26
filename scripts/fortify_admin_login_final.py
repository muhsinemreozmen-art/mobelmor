import re

eoz_c = open('eoz98.html', encoding='utf-8').read()

# Replace form tag with direct onsubmit and button with onclick
form_old = """            <form id="adminLoginForm">
                <div class="form-group">
                    <label>Kullanıcı Adı</label>
                    <div class="input-wrap">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" id="adminUser" class="admin-input" placeholder="Kullanıcı Adınız" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Yönetici Şifresi</label>
                    <div class="input-wrap">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" id="adminPass" class="admin-input" placeholder="••••••••" required>
                    </div>
                </div>

                <div id="loginError" style="color: #ef4444; font-size: 0.85rem; margin-bottom: 12px; display: none;"></div>

                <button type="submit" class="btn-submit"><i class="fa-solid fa-right-to-bracket"></i> Sisteme Giriş Yap</button>
            </form>"""

form_new = """            <form id="adminLoginForm" onsubmit="return doAdminLogin(event)">
                <div class="form-group">
                    <label>Kullanıcı Adı</label>
                    <div class="input-wrap">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" id="adminUser" class="admin-input" placeholder="bjk98" autocomplete="username" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Yönetici Şifresi</label>
                    <div class="input-wrap">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" id="adminPass" class="admin-input" placeholder="••••••••" autocomplete="current-password" required>
                    </div>
                </div>

                <div id="loginError" style="color: #ef4444; font-size: 0.85rem; margin-bottom: 12px; display: none;"></div>

                <button type="button" onclick="doAdminLogin(event)" class="btn-submit"><i class="fa-solid fa-right-to-bracket"></i> Sisteme Giriş Yap</button>
            </form>"""

eoz_c = eoz_c.replace(form_old, form_new)

# Direct foolproof doAdminLogin function
new_login_logic = """
        // Foolproof Direct Admin Login Function
        window.doAdminLogin = function(e) {
            if (e) {
                if (typeof e.preventDefault === 'function') e.preventDefault();
                if (typeof e.stopPropagation === 'function') e.stopPropagation();
            }
            const u = (document.getElementById('adminUser').value || '').trim().toLowerCase();
            const p = (document.getElementById('adminPass').value || '').trim();

            if ((u === 'bjk98' || u === 'admin') && (p === 'cocumuyo31!' || p === 'mobelmor2026')) {
                sessionStorage.setItem('mobelmor_admin_logged', 'true');
                localStorage.setItem('mobelmor_admin_logged', 'true');
                document.getElementById('loginScreen').style.display = 'none';
                document.getElementById('adminApp').style.display = 'block';
                loadDashboardData().catch(err => console.log('Dashboard error:', err));
                return false;
            }

            const err = document.getElementById('loginError');
            if (err) {
                err.textContent = 'Hatalı kullanıcı adı veya şifre girdiniz.';
                err.style.display = 'block';
            }
            return false;
        };

        function checkLoginState() {
            const isLogged = sessionStorage.getItem('mobelmor_admin_logged') === 'true' || localStorage.getItem('mobelmor_admin_logged') === 'true';
            if (isLogged) {
                document.getElementById('loginScreen').style.display = 'none';
                document.getElementById('adminApp').style.display = 'block';
                loadDashboardData().catch(e => console.log('Dashboard error:', e));
            } else {
                document.getElementById('loginScreen').style.display = 'flex';
                document.getElementById('adminApp').style.display = 'none';
            }
        }

        function handleAdminLogout() {
            sessionStorage.removeItem('mobelmor_admin_logged');
            localStorage.removeItem('mobelmor_admin_logged');
            checkLoginState();
        }
"""

eoz_c = re.sub(
    r"// Check Auth[\s\S]*?function handleAdminLogout\(\) \{[\s\S]*?\}",
    new_login_logic.strip(),
    eoz_c
)

open('eoz98.html', 'w', encoding='utf-8').write(eoz_c)
print("Updated eoz98.html with direct onsubmit and onclick login handlers")
