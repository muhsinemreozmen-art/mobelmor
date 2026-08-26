<?php
require_once __DIR__ . '/../config/helpers.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (!empty($username) && !empty($password)) {
        try {
            $db = getDB();
            $stmt = $db->prepare("SELECT * FROM admin_users WHERE (username = ? OR email = ?) AND is_active = 1 LIMIT 1");
            $stmt->execute([$username, $username]);
            $user = $stmt->fetch();

            // Check password (supports default admin123 or bcrypt hash)
            if ($user && ($password === 'admin123' || password_verify($password, $user['password_hash']))) {
                $_SESSION['admin_user'] = [
                    'id' => $user['id'],
                    'username' => $user['username'],
                    'full_name' => $user['full_name'],
                    'role' => $user['role']
                ];

                // Update last login
                try {
                    $db->prepare("UPDATE admin_users SET last_login = CURRENT_TIMESTAMP WHERE id = ?")->execute([$user['id']]);
                } catch (Exception $e) {}

                header("Location: index.php");
                exit;
            } else {
                $error = "Hatalı kullanıcı adı veya şifre girdiniz.";
            }
        } catch (Exception $e) {
            $error = "Veritabanı hatası: " . $e->getMessage();
        }
    } else {
        $error = "Lütfen tüm alanları doldurun.";
    }
}

if (isAdminLoggedIn()) {
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobelmor Yönetim Paneli - Giriş</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Outfit', sans-serif;
            background: radial-gradient(circle at top, #1e293b 0%, #0f172a 100%);
            color: #f8fafc;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .login-card {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 40px 32px;
            border-radius: 20px;
            width: 100%;
            max-width: 420px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            text-align: center;
        }
        .login-logo {
            font-size: 1.8rem;
            font-weight: 800;
            letter-spacing: 2px;
            margin-bottom: 6px;
        }
        .login-logo span { color: #38bdf8; }
        .login-subtitle {
            font-size: 0.85rem;
            color: #94a3b8;
            letter-spacing: 1px;
            margin-bottom: 28px;
            text-transform: uppercase;
        }
        .form-group {
            text-align: left;
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 8px;
            color: #cbd5e1;
        }
        .input-wrap {
            position: relative;
            display: flex;
            align-items: center;
        }
        .input-wrap i {
            position: absolute;
            left: 14px;
            color: #64748b;
        }
        .input-wrap input {
            width: 100%;
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #fff;
            padding: 12px 14px 12px 42px;
            border-radius: 10px;
            font-size: 0.95rem;
            outline: none;
            transition: all 0.2s ease;
        }
        .input-wrap input:focus {
            border-color: #38bdf8;
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
        }
        .btn-submit {
            width: 100%;
            background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
            color: #fff;
            border: none;
            padding: 14px;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 10px 15px -3px rgba(2, 132, 199, 0.3);
            margin-top: 10px;
        }
        .btn-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 25px -5px rgba(2, 132, 199, 0.4);
        }
        .error-alert {
            background: rgba(239, 68, 68, 0.2);
            border: 1px solid rgba(239, 68, 68, 0.4);
            color: #fca5a5;
            padding: 12px;
            border-radius: 8px;
            font-size: 0.85rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .quick-hint {
            margin-top: 24px;
            font-size: 0.75rem;
            color: #64748b;
            background: rgba(255,255,255,0.03);
            padding: 10px;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="login-card">
        <h1 class="login-logo">MOBEL<span>MOR</span></h1>
        <p class="login-subtitle">Yönetim Paneli Girişi</p>

        <?php if (!empty($error)): ?>
            <div class="error-alert">
                <i class="fa-solid fa-triangle-exclamation"></i> <?= e($error) ?>
            </div>
        <?php endif; ?>

        <form method="POST" action="login.php">
            <div class="form-group">
                <label for="username">Kullanıcı Adı veya E-Posta</label>
                <div class="input-wrap">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" id="username" name="username" placeholder="admin" required autofocus>
                </div>
            </div>

            <div class="form-group">
                <label for="password">Yönetici Şifresi</label>
                <div class="input-wrap">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" id="password" name="password" placeholder="••••••••" required>
                </div>
            </div>

            <button type="submit" class="btn-submit">
                <i class="fa-solid fa-right-to-bracket"></i> Giriş Yap
            </button>
        </form>

        <div class="quick-hint">
            <i class="fa-solid fa-key"></i> Varsayılan Giriş: <strong>admin</strong> / <strong>admin123</strong>
        </div>
    </div>
</body>
</html>
