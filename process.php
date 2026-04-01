<?php
// Veritabanı bağlantısı varsayalım
$sorgu = $db->query("SELECT * FROM personel ORDER BY id ASC");
foreach($sorgu as $row) {
?>
    <tr>
        <td><img src="assets/<?php echo $row['fotograf_yolu']; ?>" class="staff-img"></td>
        <td align="center"><strong><?php echo $row['ad_soyad']; ?></strong></td>
        <td><?php echo $row['unvan']; ?></td>
        <td>
            <span class="contact-link">📞 <?php echo $row['telefon']; ?></span>
            <a href="mailto:<?php echo $row['email']; ?>" class="contact-link">✉️ <?php echo $row['email']; ?></a>
        </td>
    </tr>
<?php } ?>
