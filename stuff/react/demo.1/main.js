const root = document.querySelector('#root')

const virtualRoot = ReactDOM.createRoot(root)

const _jsx = React.createElement

const title = _jsx('h1', { children: 'Hola, React! ⚛️' })

const color1 = _jsx('li', { children: 'Red 🟥' })
const color2 = _jsx('li', { children: 'Green 🟩' })
const color3 = _jsx('li', { children: 'Blue 🟦' })

const colors = _jsx('ul', { children: [color1, color2, color3] })

virtualRoot.render([title, colors])
