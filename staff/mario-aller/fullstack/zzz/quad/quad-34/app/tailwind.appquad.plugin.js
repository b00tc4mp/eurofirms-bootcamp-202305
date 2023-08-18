const plugin = require('tailwindcss/plugin')

export default plugin(({ addBase, addComponents, addUtilities, theme }) => {
    addBase({
        h1: {
            fontSize: theme('fontSize.4xl'),
            'color': 'red'
        },

        html: {
            'box-sizing': 'border-box',
            'height': '100vh',
            'background-color': 'beige',
            'font-family': 'sans-serif',
        },
        body: {
            'box-sizing': 'border-box',
            'height': '100vh',
            'background-color': 'beige',
            'font-family': 'sans-serif',
        }

    })

    addComponents({
        '.helloworld': {
            fontSize: theme('fontSize.6xl'),
            backgroundColor: 'yellow',
            color: 'black',
            fontStyle: 'italic',
            padding: '1rem'
        },
        '.helloworld--fluo': {
            backgroundColor: 'yellowgreen',
            color: 'greenyellow'
        }
    })

    addUtilities({
        '.content-hidden': {
            contentVisibility: 'hidden'
        }
    })
})