/**
| | getElementById | 根据元素的 id 选择元素。 
| | getElementsByClassName | 根据元素的类名选择元素，
返回一个包含所有匹配元素的 NodeList。 
| | getElementsByTagName | 根据元素的标签名选择元素，
返回一个包含所有匹配元素的 NodeList。 
| | querySelector | 使用 CSS 选择器选择元素，只返回第一个匹配的元素。 
| | querySelectorAll | 使用 CSS 选择器选择元素，
返回一个包含所有匹配元素的 NodeList。 |
*/

const el = document.getElementById('myId') // 选择 id 为 'myId' 的 div 元素
const elBySelector = document.querySelector('#myId') // 选择 selector 为 'myId' 的 div 元素，值返回第一个匹配的元素

const els = document.getElementsByClassName('myClass') // 选择所有 class 为 'myClass' 的 div 元素
const elsByTag = document.getElementsByTagName('div')
const elsBySelectorAll = document.querySelectorAll('.myClass')

//修改内容
/**
选择元素后，你就可以修改它的内容。
你可以通过 innerHTML 或 textContent 属性来修改元素的 HTML 或文本内容。
*/
const el1 = document.querySelector('#myId')
el1.innerHTML = '<strong>Hello, WTF JavaScript!</strong>' // 修改 HTML 内容
el1.textContent = 'Hello, WTF JavaScript!' // 修改文本内容

//修改样式
/**
你也可以通过操作 style 属性来修改元素的样式。
注意，所有的 CSS 属性名都需要转换为驼峰命名法。
*/
const el2 = document.querySelector('#myId')
el2.style.color = 'red' // 修改文本颜色
el2.style.backgroundColor = 'black' // 修改背景颜色

//添加和删除元素
/**
使用 createElement，appendChild 和 removeChild 方法，
你可以动态地添加和删除元素。
*/
const newEl = document.createElement('div') // 创建新元素
document.body.appendChild(newEl) // 添加新元素

const oldEl = document.querySelector('#myId')
document.body.removeChild(oldEl) // 删除元素

//2、BOM
/**
BOM（浏览器对象模型）是一个表示浏览器及其组件的编程接口。
BOM 允许开发者控制浏览器的行为和交互，
如弹出新窗口、获取浏览器窗口的尺寸等。
BOM 的核心对象是 window，它表示浏览器窗口或者一个框架。
以下是一些常见的 BOM 操作示例：
*/
//打开新窗口
// 你可以通过 window.open 方法打开一个新窗口。
window.open('https://wtf.academy', '_blank') // 在新窗口中打开 WTF Academy
//获取和设置窗口尺寸
// 你可以通过 window.innerWidth 和 window.innerHeight 属性获取窗口的宽度和高度。
const width = window.innerWidth // 获取窗口宽度
const height = window.innerHeight // 获取窗口高度

console.log(`窗口宽度：${width}，窗口高度：${height}`)
// 设置定时器
// 你可以通过 setTimeout 和 setInterval 方法设置定时器。
setTimeout(() => {
  console.log('Hello, WTF JavaScript!')
}, 1000) // 1 秒后输出 Hello, WTF JavaScript!

setInterval(() => {
  console.log('Hello, WTF JavaScript!')
}, 1000) // 每隔 1 秒输出 Hello, WTF JavaScript!