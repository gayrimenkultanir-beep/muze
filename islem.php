<?php
$json_path = 'duyurular/duyurular.json';
$duyurular = json_decode(file_get_contents($json_path), true) ?: [];

// --- SİLME İŞLEMİ ---
if(isset($_GET['sil'])) {
    $id = $_GET['sil'];
    array_splice($duyurular, $id, 1);
    file_put_contents($json_path, json_encode($duyurular, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    header("Location: admin.php?durum=silindi");
    exit;
}

// --- EKLEME VE GÜNCELLEME İŞLEMİ ---
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $baslik = $_POST['baslik'];
    $tarih = $_POST['tarih'];
    $islem = $_POST['islem'];
    $id = $_POST['id'];

    // Görsel Yükleme Kontrolü
    $gorsel_yolu = ($islem == 'guncelle') ? $duyurular[$id]['gorsel'] : 'assets/default.jpg';

    if(isset($_FILES['gorsel']) && $_FILES['gorsel']['error'] == 0) {
        $dosya_adi = time() . "_" . basename($_FILES["gorsel"]["name"]);
        $hedef = "assets/" . $dosya_adi;
        if(move_uploaded_file($_FILES["gorsel"]["tmp_name"], $hedef)) {
            $gorsel_yolu = $hedef;
        }
    }

    $yeni_veri = [
        "baslik" => $baslik,
        "tarih" => $tarih,
        "gorsel" => $gorsel_yolu
    ];

    if($islem == 'ekle') {
        array_unshift($duyurular, $yeni_veri); // En yeni duyuru en üste
    } else {
        $duyurular[$id] = $yeni_veri;
    }

    file_put_contents($json_path, json_encode($duyurular, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    header("Location: admin.php?durum=basarili");
    exit;
}
?>
