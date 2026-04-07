<?php
session_start();
$ayar_dosyasi = __DIR__ . '/ayarlar.json';

// Dosya yoksa varsayılan oluştur: admin / 123456
if (!file_exists($ayar_dosyasi)) {
    $varsayilan = [
        "kullanici" => "admin",
        "sifre" => password_hash("123456", PASSWORD_DEFAULT)
    ];
    file_put_contents($ayar_dosyasi, json_encode($varsavilan));
}

$ayarlar = json_decode(file_get_contents($ayar_dosyasi), true);

function oturumKontrol() {
    if (!isset($_SESSION['yonetici_login'])) {
        header("Location: login.php");
        exit;
    }
}
?>
