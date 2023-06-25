// Declaraciones globales
const posts = []
posts.idCounter = 0

// Populate posts
posts.push({ id: ++posts.idCounter, user: 1, text: 'Orion', image: 'https://cdn.eso.org/images/thumb700x/eso1103a.jpg' })
posts.push({ id: ++posts.idCounter, user: 3, text: 'Via Lactea', image: 'https://img2.rtve.es/i/?w=1600&i=1522754812071.jpg' })
posts.push({ id: ++posts.idCounter, user: 1, text: 'Luna', image: 'https://images.ecestaticos.com/PPi0QU13Mwf7rvIVo6xdGUuSWQU=/49x185:2271x1363/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F2dd%2F315%2Fa26%2F2dd315a269978872b1037d7b781c34b5.jpg' })
