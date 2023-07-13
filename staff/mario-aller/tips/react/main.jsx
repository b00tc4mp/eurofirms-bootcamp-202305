const root = document.querySelector('#root')

const virtualRoot = ReactDOM.createRoot(root)

const title = <h1>Hola, React! ⚛️</h1>

const color1 = <li>Red 🟥</li>
const color2 = <li>Green 🟩</li>
const color3 = <li>Blue 🟦</li>

const colors = <ul>
    {color1}
    {color2}
    {color3}
</ul>

virtualRoot.render([title, colors])
