
import x from './x.js';
import jpg from './assets/1.jpg';

console.log('hi');
console.log(x);

const div = document.getElementById('app')


console.log(jpg)
console.log(div)

div.innerHTML = `
    <img src = "${jpg}">
`

const button = document.createElement('button');
button.innerText = '懒加载';
button.onclick = () => {
    const lazy = import('./lazy');
    lazy.then((module) => {
        // console.log('成功了')
        module.default()
    }, () => {
        console.log('模块出错')
    })
}
div.appendChild(button)