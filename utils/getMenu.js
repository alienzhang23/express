function getMenu(menu, level = 3) {
    let data = []
    menu.forEach(item => {
        if (item.level === 0) {
            data.push(item)
        }
    })
    data.forEach(items => {
        items.childDTOList = []
        menu.forEach(item => {
            if (item.level === 1 && item.parentId == items.id) {
                items.childDTOList.push(item)
            }
        })
    })
    if (level > 2) {
        for (let list of data) {
            list.childDTOList.forEach(items => {
                items.childDTOList = []
                menu.forEach(item => {
                    if (item.level === 2 && item.parentId == items.id) {
                        items.childDTOList.push(item)
                    }
                })
            })
        }
    }
    return data;
}

module.exports = getMenu;