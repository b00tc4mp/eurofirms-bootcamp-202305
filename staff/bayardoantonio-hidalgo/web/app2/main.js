var users=[];
users.push({name:'pedro sanchez',email:'gobierno@gob.es',password:'123'})
users.push({name:'Mariano Rajoy',email:'oposicion@gob.pp',password:'222'})
users.push({name:'Ayuso',email:'oposicion@pp.es',password:'2023'})

//Registro
var registerView=document.querySelector('.register-view')
var registerForm=registerView.querySelector('.register-form')
registerForm.onsubmit=function(event){

    event.preventDefault()
    var nameInput=registerForm.querySelector('#name')
    var name= nameInput.value
    var emailInput=registerForm.querySelector('#email')
    var email=emailInput.value
    var passwordInput=registerForm.querySelector('')
    var passwordInput=passwordInput.value
    
    var user{}
    user.name=name
    user.email=email
    user.password=password

    users.push(user)

    registerView.classList.add('off')
    loginView.classList.add('off')
}

//LOGIN
var loginView=document.querySelector('.login-view')
var loginForm=loginView.querySelector('login-form')
loginForm.onsubmit=function(event)
{
    event.preventDefault()
    var emailInput=loginForm.querySelector('#email')
    var  email email=emailInput.value
    var passwordInput=loginForm.querySelector('#password')   
    var password=passwordInput.value
    var user

    for(var i=0, i<users.length; i++){
        var _user= users[i]
        if(_user.email==email){
           user= _user
          break
        }
    }
    if(user===undefined)
       alert('Wrong credentials'){
        loginView.classList.add('off')
        homeView.classList.remove('off')
       }else
         alert('Wrong credentials')
    }


      

