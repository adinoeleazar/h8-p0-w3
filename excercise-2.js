function balikString(kata) {

    var result = ''
    var max = kata.length

    for (var a = (max - 1); a >= 0; a--) {
        result += kata[a]
    }
    console.log(result)
    return result
}

balikString('hello world!')