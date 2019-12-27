let users = [];
module.exports = {
    userList : function(){
        return users;
    },
    addUser : function(user_){
        user = users.filter(user => user.uniqueID == user_.uniqueID);
        if(user.length > 0){
            return "User already registered!";
        }else{
            users.push(user_)
        }
        return true;
    },
    removeUser : function(uniqueId){
        users = users.filter(user => user.uniqueId != uniqueId);
        return true;
    }
}