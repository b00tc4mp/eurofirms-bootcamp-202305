const love = [
    'I love you',
    'I want to spend time with you',
    'I need you',
    'I like you',
    'I want to be with you',
    'I want to kiss you'
]

const sad = [
    'I feel sad',
    'I cant live without you',
    'I feel so lonely',
    'I miss you'
]

const beautiful = [
    'You are so beautiful to me',
    'You eyes are pretty',
    'You are the best'
]

const happy = [
    'You make my life much better',
    'I feel grateful',
    'Thank you for everything',
    'You make me happy every single day',
    'I want to have fun',
    'Lets dance to celebrate'
]

const apart = [
    'Dont leave me',
    'I feel so sorry',
    'Everything has changed'
]

function getRandom(strings) {
    const randomIndex = Math.floor(Math.random() * strings.length)

    const string = strings[randomIndex]

    return string
}

const text = getRandom(love) + ', ' + getRandom(beautiful) + ', ' + getRandom(happy) + ' ' + getRandom(apart) + ' , ' + getRandom(sad)

console.log(text)