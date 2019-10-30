function targetTerdekat(arr) {

    var locX = ''
    var locO = ''

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] === 'x') {locX += a}
        else if (arr[a] === 'o') {locO += a}
    }

    var rayPX = locX.split('')
    var rayPO = locO.split('')

    var xoxo = ''

    for (var b = 0; b < rayPX.length; b++) {
        for (var c = 0; c < rayPO.length; c++) {
            xoxo += Math.abs(rayPX[b] - rayPO[c])
        }
    }

    var gg = xoxo.split('').sort()

    if (gg[0] === undefined) {return 0}
    else {return Number(gg[0])}
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2