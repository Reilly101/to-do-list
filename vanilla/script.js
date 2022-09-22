let root = document.getElementById('root')

function App() {
    let count = 0
    let app = document.createElement('div')
    app.className = 'App'
    let p = document.createElement('p')
    p.innerText = 0
    let btn = document.createElement('button')
    btn.innerText = 'Click me'
    let block = RedOrGreen()
    btn.onclick = function () {
        count++;
        p.innerText = count
        block.style.backgroundColor = (count % 2) ? 'green' : 'red'
    }

    app.append(p, btn, block)
    return app
}

function RedOrGreen(num) {
    let block = document.createElement('div')
    let styles= {
        width: '50px',
        height: '50px',
        backgroundColor: (num % 2) ? 'green' : 'red'
    }
   // block.style.backgroundColor = (num % 2) ? 'green' : 'red'
    //block.style.width = '50px'
   // block.style.height = '50px'
for (let property in styles) {
    console.log(`${property}: ${styles[property]}`)
    block.style[property] =  styles[property]
}



    return block
}
root.append(App(),App(),App(),App())


