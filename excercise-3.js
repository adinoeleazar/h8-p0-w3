var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {

    
    var result = ''

    for (var a = 0; a < input.length; a++) {
        result +=
        'Nomor ID: ' + input[a][0] + '\n' +
        'Nama Lengkap: ' + input[a][1] + '\n' +
        'TTL: ' + input[a][2] + ' ' + input[a][3] + '\n' +
        'Hobi: ' + input[a][4]
        if (a < (input.length - 1)) {result += '\n' + '\n' + '\n'}      
    }
    console.log(result)
    return result
}
dataHandling(input)