window.dom = {
    find(selector) {
        return document.querySelectorAll(selector)
    },
    style(node, name, value) {
        return node.style[name] = value
    },
    each(nodeList, fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(undefined, nodeList[i])
        }
    }
}