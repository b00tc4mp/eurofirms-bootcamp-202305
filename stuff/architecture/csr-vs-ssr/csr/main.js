const title = document.querySelector('title')
title.innerText = 'Client-Side Rendering (CSR)'

const h1 = document.createElement('h1')
h1.innerText = title.innerText
document.body.appendChild(h1)

const p = document.createElement('p')
p.innerText = 'Client-side rendering means rendering pages directly in the browser with JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.'
document.body.appendChild(p)

const a = document.createElement('a')
a.innerText = 'More info'
a.href = ''
document.body.appendChild(a)

a.onclick = function (event) {
    event.preventDefault()

    document.body.removeChild(a)

    const h2 = document.createElement('h2')
    h2.innerText = 'What does client-side rendering do?'
    document.body.appendChild(h2)

    const p = document.createElement('p')
    p.innerText = 'Client-side rendering allows developers to make their websites entirely rendered in the browser with JavaScript. Instead of having a different HTML page per route, a client-side rendered website creates each route dynamically directly in the browser.'
    document.body.appendChild(p)

    const h22 = document.createElement('h2')
    h22.innerText = 'What is client-side process?'
    document.body.appendChild(h22)

    const p2 = document.createElement('p')
    p2.innerText = 'Client-side means that the processing takes place on the user\'s computer. It requires browsers to run the scripts on the client machine without involving any processing on the server. Server-side means that the processing takes place on a web server.'
    document.body.appendChild(p2)
}
