function tentukanDeretGeometri(arr) {

    var kelipatan = arr[1] / arr[0]
    var result

    for (a = 0; a < arr.length - 1; a++) {
        if (arr[a+1] / arr[a] !== kelipatan) {
            result = false
            return result 
        }
        else {result = true}
    }
    return result
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false