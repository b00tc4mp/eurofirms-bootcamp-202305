require('dotenv').config()
const updatePost = require('./updatePost')
const mongoose = require('mongoose')


mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => updatePost('64be36824f741266e8b21174', '64be3865343bc4bde4ee44ac', 'https://www.semana.com/resizer/3pvTV-IxzvCcQwyP0FjZzWtOag8=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/DPCC2AM7CRDYHPGAZT53S5C2BQ.jpg', 'Kurt cobain y su amor por los gatos'))
    .then(() => console.log('post updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())