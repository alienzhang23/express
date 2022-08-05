function randNum() {
    let outcome = Math.round(new Date().getTime()).toString();
    outcome = outcome.substring(outcome.length - 5, outcome.length) + randomWord(false, 6);
    return outcome
}

function randomWord(randomFlag, min, max) {
    var str = "",
        range = min,
        arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        let pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    console.log(str);
    return str;
}

module.exports = randNum;