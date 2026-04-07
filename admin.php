<?php
$json_path = 'duyurular/duyurular.json';
$duyurular = json_decode(file_get_contents($json_path), true) ?: [];
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Külliye Admin | Veri Yönetimi</title>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <style>
        :root { --gold: #d4af37; --dark: #0f1a24; }
        body { background: var(--dark); color: #f4e7c8; font-family: 'Montserrat', sans-serif; padding: 20px; }
        .container { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 350px 1fr; gap: 20px; }
        .box { background: #1b2b3a; border: 1px solid var(--gold); padding: 20px; border-radius: 8px; }
        h2 { font-family: 'Cinzel'; color: var(--gold); font-size: 1.1rem; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 10px; }
        input, button { width: 100%; padding: 10px; margin-top: 10px; border-radius: 4px; border: 1px solid var(--gold); background: #0f1a24; color: white; box-sizing: border-box; }
        button.save { background: var(--gold); color: var(--dark); font-weight: bold; cursor: pointer; font-family: 'Cinzel'; }
        .list-item { display: flex; align-items: center; gap: 10px; padding: 10px; border-bottom: 1px dashed rgba(212,175,55,0.3); }
        .list-item img { width: 50px; height: 50px; object-fit: cover; border: 1px solid var(--gold); }
        .actions { margin-left: auto; display: flex; gap: 5px; }
        .btn-small { width: auto; padding: 4px 8px; font-size: 10px; cursor: pointer; }
        .del { border-color: #ff4d4d; color: #ff4d4d; }
    </style>
</head>
<body>

<div class="container">
    <div class="box">
        <h2 id="form-title">Duyuru Ekle/Düzenle</h2>
        <form action="islem.php" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="islem" id="islem" value="ekle">
            <input type="hidden" name="id" id="duyuru-id" value="">
            
            <label style="font-size: 11px;">Başlık</label>
            <input type="text" name="baslik" id="f-baslik" required>
            
            <label style="font-size: 11px;">Tarih</label>
            <input type="date" name="tarih" id="f-tarih" required>
            
            <label style="font-size: 11px;">Görsel Yükle (Değiştirmek istemiyorsanız boş bırakın)</label>
            <input type="file" name="gorsel" accept="image/*">
            
            <button type="submit" class="save">SİSTEME KAYDET</button>
            <button type="button" onclick="location.reload()" style="border-color: #555; color: #888;">İPTAL / TEMİZLE</button>
        </form>
    </div>

    <div class="box">
        <h2>Tüm Arşiv (Eski ve Yeni)</h2>
        <?php foreach($duyurular as $id => $d): ?>
        <div class="list-item">
            <img src="<?= $d['gorsel'] ?>">
            <div>
                <div style="font-size: 13px;"><?= $d['baslik'] ?></div>
                <div style="font-size: 10px; color: var(--gold);"><?= date("d.m.Y", strtotime($d['tarih'])) ?></div>
            </div>
            <div class="actions">
                <button class="btn-small" onclick="duzenle(<?= $id ?>, '<?= addslashes($d['baslik']) ?>', '<?= $d['tarih'] ?>')">DÜZENLE</button>
                <a href="islem.php?sil=<?= $id ?>" onclick="return confirm('Silinsin mi?')"><button class="btn-small del">SİL</button></a>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>

<script>
function duzenle(id, baslik, tarih) {
    document.getElementById('islem').value = 'guncelle';
    document.getElementById('duyuru-id').value = id;
    document.getElementById('f-baslik').value = baslik;
    document.getElementById('f-tarih').value = tarih;
    document.getElementById('form-title').innerText = "Duyuruyu Güncelle";
    window.scrollTo(0,0);
}
</script>

</body>
</html>
