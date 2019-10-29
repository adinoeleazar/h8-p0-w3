function angkaPalindrome(num) {
    
    var main = num + 1
    var balik
    
    while (main != balik) {

        balik = ''
        var angkaString = String(main)
      
        for (var a = (angkaString.length - 1); a >= 0; a--) {
        balik += angkaString[a]
        }
        
        if (main == balik) {return main}
        else {main++}
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001