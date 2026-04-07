<?php
require 'config.php';
if ($_POST) {
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    if ($user === $ayarlar['kullanici'] && password_verify($pass, $ayarlar['sifre'])) {
        $_SESSION['yonetici_login'] = true;
        header("Location: panel.php");
        exit;
    } else { $hata = "Hatalı bilgiler!"; }
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Yönetim Paneli Giriş</title>
    <style>
        body { background: #1a1a1a; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .login-box { background: #222; padding: 40px; border-radius: 8px; border: 1px solid #333; width: 320px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
        h2 { color: #d4af37; text-align: center; margin-bottom: 25px; font-weight: 300; letter-spacing: 2px; }
        input { width: 100%; padding: 12px; margin-bottom: 15px; background: #111; border: 1px solid #444; color: #fff; border-radius: 4px; box-sizing: border-box; }
        button { width: 100%; padding: 12px; background: #d4af37; border: none; color: #1a1a1a; font-weight: bold; cursor: pointer; border-radius: 4px; }
        .error { color: #ff4d4d; text-align: center; font-size: 13px; margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>GİRİŞ YAP</h2>
        <?php if(isset($hata)) echo "<div class='error'>$hata</div>"; ?>
        <form method="POST">
            <input type="text" name="user" placeholder="Kullanıcı Adı" required>
            <input type="password" name="pass" placeholder="Şifre" required>
            <button type="submit">SİSTEME GİR</button>
        </form>
    </div>
</body>
</html>
