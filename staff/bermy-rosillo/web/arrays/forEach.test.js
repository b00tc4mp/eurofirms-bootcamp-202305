/*testing */
describe('CASE WITH HEROES')
heroes = [
    {
        name:'iron man',
        power:'artificial intelligence',
        colors:['red','yellow','silver']
    },
    {
        name:'Capitan America',
        power:'Very strong',
        colors:['red','white','dark blue']
    },
    {
        name:'Black widow',
        power:'military training',
        colors:['red','yellow','silver']
    }
]
forEach(heroes,function(hero){ 
    console.log(hero.name, hero.colors)
})

forEach(heroes,function(hero){
    console.log(hero.name, hero.power)
})
//-------------------------------------------------
describe('CASE WITH PEOPLE')
people =[
    {
        name:'Jaimito',
        age:'60'
    },

    {
        name:'Pepito',
        age:'18'
    },

    {
        name:'Juana de arco',
        age:'19'
    }   
]
forEach(people,function(person){
    console.log(person.name, person.age)
})