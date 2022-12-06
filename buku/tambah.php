<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];
$penulis = trim($data['penulis']);
$judul = trim($data['judul']);

$query = mysqli_query($koneksi, "insert into buku (judul, penulis) values ('$judul', '$penulis')");

if ($query) {
    http_response_code(201);
    $pesan['status'] = 'sukses';
} else {
    http_response_code(422);
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
