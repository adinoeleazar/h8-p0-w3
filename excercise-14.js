function mengelompokkanAngka(arr) {
    
    var genap = []
    var ganjil = []
    var w33 = []

    for (var a = 0; a < arr.length; a++) {
        if (arr[a]%3 === 0) {w33.push(arr[a])}
        else if (arr[a]%2 === 0) {genap.push(arr[a])}
        else if (arr[a]%2 !== 0 ) {ganjil.push(arr[a])}
    }

    return [genap, ganjil, w33]
  }


  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]