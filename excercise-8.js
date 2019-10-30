function pasanganTerbesar(num) {
  
  var ace = num.toString().split('')
  var numArr = num.toString().split('')


  var urut = numArr.sort()

  var terbesar = urut[urut.length - 1]

  var result = ace[ace.indexOf(terbesar)] + ace[ace.indexOf(terbesar) + 1]

  return result
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99