const baseSize = 37.5

// baseSize的值要与postcss.config.js文件中的rootValue保持一致
export function setRem() {
    // 根据设计图来 一般是375 或者 750
    const scale = document.documentElement.clientWidth / 375
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

// 改变窗口大小时重新适配
window.onresize = function () {
    setRem()
}



