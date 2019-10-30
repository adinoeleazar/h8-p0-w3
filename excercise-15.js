function groupAnimals(animals) {

    // under construction
    
    var last = animals.length - 1
    var result = []
    var ggwp


    for (var a = 0; a < last; a++) {
        result[a] = []
        for (var b = 0 ; b <= last; b++){
            if (animals[a][0] === animals[b][0]) {result[a].push(animals[b])}
        }
    }

    for (var c = 0; c < result.length - 1; c++) {
        for (var d = c+1; d < result.length; d++) {
            if (result[c] === [result[d]]) {ggwp = [result.splice(c, 1)]}
        }
    }

    return ggwp
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]