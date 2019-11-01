function groupAnimals(animals) {


    var result = []
    var animalsUrut = animals.sort()
    var animalsAkhir = animals.length - 1

    
    for (var a = 0; a <= animalsAkhir; a++){
        
        var binatang = animalsUrut[a]
        var resultAkhir = result.length - 1
        var duplikat = false
        
        for (var b = 0; b <= resultAkhir; b++) {
            if (binatang[0] === result[b][0][0]) {      
                duplikat = true
                result[b].push(binatang)
            }
        }

        if (duplikat === false){                        
            result.push([binatang]);
        }
    }

    return result;
}

    


  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]