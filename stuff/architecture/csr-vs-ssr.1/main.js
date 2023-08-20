const title = document.querySelector('title')
title.innerText = 'Client-Side Rendering (CSR)'

const h1 = document.createElement('h1')
h1.innerText = title.innerText
document.body.appendChild(h1)

const p = document.createElement('p')
p.innerText = 'Client-side rendering means rendering pages directly in the browser with JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.'
document.body.appendChild(p)

