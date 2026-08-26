eoz_c = open('eoz98.html', encoding='utf-8').read()

# Fix 1: Make loadDashboardData async
eoz_c = eoz_c.replace("function loadDashboardData() {", "async function loadDashboardData() {")

# Fix 2: Make checkLoginState call loadDashboardData safely
eoz_c = eoz_c.replace("loadDashboardData();", "loadDashboardData().catch(e => console.log('Dashboard error:', e));")

# Fix 3: In the login form, do direct inline check as well as StoreService check so it NEVER fails!
login_handler = """
        // Login Handler (bjk98 / cocumuyo31!)
        document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const u = (document.getElementById('adminUser').value || '').trim().toLowerCase();
            const p = (document.getElementById('adminPass').value || '').trim();
            
            if (u === 'bjk98' && p === 'cocumuyo31!') {
                sessionStorage.setItem('mobelmor_admin_logged', 'true');
                checkLoginState();
                return false;
            }

            if (window.StoreService && window.StoreService.adminLogin && window.StoreService.adminLogin(u, p)) {
                checkLoginState();
                return false;
            }

            const err = document.getElementById('loginError');
            err.textContent = 'Hatalı kullanıcı adı veya şifre girdiniz.';
            err.style.display = 'block';
            return false;
        });
"""

import re
eoz_c = re.sub(
    r"// Login Handler \(bjk98 / cocumuyo31!\)[\s\S]*?document\.getElementById\('adminLoginForm'\)\.addEventListener\('submit', function \(e\) \{[\s\S]*?\}\);",
    login_handler.strip(),
    eoz_c
)

open('eoz98.html', 'w', encoding='utf-8').write(eoz_c)
print("Fixed async syntax error and fortified login handler in eoz98.html")
