function getUser(id){

    const users = [
        {id:1,name:"John"},
        {id:2,name:"David"}
    ]

    return users.find(u => u.id == id)

}

module.exports = {
    getUser
}
