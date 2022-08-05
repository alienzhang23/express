function arrToStr(arr) {
    let newArr = arr.map(item => {
        return item + ''
    })
    return JSON.stringify(newArr).replace(/\[|]/g, '')
}

function arrMapStr(arr, key) {
    return arr.map(item => {
        return item[key]
    })
}

module.exports = {
    arrToStr,
    arrMapStr
}