// buat fungsi dataHandling2
function dataHandling2(arr) {

//gunakan splice dan tampilkan hasilnya
arr.splice(4, 1, "Pria", "SMA Internasional Metro")
arr.splice(1, arr[1] += " Elsharawy")
arr.splice(2, 1, "Provinsi " + arr[2])

console.log(arr)

// ambil angka bulan dan tampilkan nama bulannya
var tanggal = arr[3].split('/')
var bulan = tanggal[1]
switch (bulan) {
    case ('01') : console.log('Januari'); break;
    case ('02') : console.log('Februari'); break;
    case ('03') : console.log('Maret'); break;
    case ('04') : console.log('April'); break;
    case ('05') : console.log('Mei'); break;
    case ('06') : console.log('Juni'); break;
    case ('07') : console.log('Juli'); break;
    case ('08') : console.log('Agustus'); break;
    case ('09') : console.log('September'); break;
    case ('10') : console.log('Oktober'); break;
    case ('11') : console.log('November'); break;
    case ('12') : console.log('Desember'); break;
}

// sorting secara descending

// sebelum sort, ubah tipe data string menjadi angka
var pecahAngka = [Number(tanggal[0]), Number(tanggal[1]), Number(tanggal[2])]

// lakukan sorting secara descending untuk array yang telah diubah menjadi tipe angka
pecahAngka.sort(function (value1, value2) {return value1 < value2})

// ubah kembali tipe data menjadi string dan tampilkan hasilnya
var tanggalDescending = [String(pecahAngka[0]), String(pecahAngka[1]), String(pecahAngka[2])]

console.log(tanggalDescending)

// gabungkan semua elemen tanggal menggunakan join, pisahkan dengan "-". tampilkan hasilnya
console.log(tanggal.join('-'))

// gunakan slice untuk membatasi elemen kedua sebanyak 15 karakter. pastikan elemen tersebut
// berupa string lalu tampilkan hasilnya
console.log(String(arr[1].slice(0, 15)))
}

// buat variabel berisi array yang diinginkan
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

// panggil fungsi tersebut dengan parameter yang telah ditentukan
dataHandling2(input)