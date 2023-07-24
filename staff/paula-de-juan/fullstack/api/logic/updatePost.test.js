require('dotenv').config()
const updatePost = require('./updatePost')
const mongoose = require('mongoose')


mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() => updatePost('64b44e086bee5b508dad06c0', '64b44e7a6bee5b508dad06c2', 'https://www.semana.com/resizer/3pvTV-IxzvCcQwyP0FjZzWtOag8=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/DPCC2AM7CRDYHPGAZT53S5C2BQ.jpg', 'Kurt cobain y su amor por los gatos'))
    .then(() => console.log('post updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())