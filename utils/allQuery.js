function exactQuery(key, val) {
    return val ? `and ${key}="${val}"` : ''
}

function likeQuery(key, val) {
    return val ? `and ${key} like "${val}%"` : ''
}

function queryPage(page, size) {
    return `limit ${(page - 1)* size},${size}`
}
module.exports = {
    exactQuery,
    likeQuery,
    queryPage
}