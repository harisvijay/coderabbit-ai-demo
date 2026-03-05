const API_KEY = "123456SECRET"

function login(user, password){

    if(user == "admin" && password == "admin123"){
        console.log("Login successful")
    }

}

function divide(a,b){

    return a/b

}

function getUserInput(data){

    let result = JSON.parse(data)

    return result

}

function queryUser(name){

    const query = "SELECT * FROM users WHERE name = '" + name + "'"

    return query

}

function slowProcess(){

    let total = 0

    for(let i=0;i<100000000;i++){
        total = total + i
    }

    return total

}

module.exports = {
    login,
    divide,
    getUserInput,
    queryUser,
    slowProcess
}
