function palindrome(kata) {
    
    var balik = ''
    var akhir = kata.length - 1

    for (var a = akhir; a >= 0; a--) {
        balik += kata[a]
    }

    if (balik === kata) {return true}
    else {return false}
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false