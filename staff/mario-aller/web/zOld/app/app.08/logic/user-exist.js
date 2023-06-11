// Verificacion de usuario (ret T/F)
var userExist = function (email) {
    var num = users.length

    for (var i = 0; i < num; i++) {
        if (email === users[i].email) return true;
    }

    return false;
}