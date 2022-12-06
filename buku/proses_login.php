<?php

require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$username = trim($data['username']);
$password = trim($data['password']);

$query = mysqli_query($koneksi, "select * from user where username='$username' and password=MD5('$password')");
$jumlah = mysqli_num_rows($query);
if ($jumlah != 0) {
    $value = mysqli_fetch_object($query);
    $pesan['username'] = $value->username;
    $pesan['token'] = time() . '_' . $value->password;
    $pesan['status_login'] = 'berhasil';
} else {
    $pesan['status_login'] = 'gagal';
    $pesan['jumlah'] = $jumlah;
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
