require('dotenv').config()
const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => {
        const author1 = '64bbd4e2557f915adc6ce01a'
        const author2 = '64bbd4e2557f915adc6ce021'
        return createPost(author1,
            'https://cdn.eso.org/images/thumb700x/eso1103a.jpg'
            , 'Orion')
            .then(() => createPost(author2,
                'https://img2.rtve.es/i/?w=1600&i=1522754812071.jpg',
                'Via Lactea'))
            .then(() => createPost(author1,
                'https://images.ecestaticos.com/PPi0QU13Mwf7rvIVo6xdGUuSWQU=/49x185:2271x1363/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F2dd%2F315%2Fa26%2F2dd315a269978872b1037d7b781c34b5.jpg',
                'Luna'))
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())