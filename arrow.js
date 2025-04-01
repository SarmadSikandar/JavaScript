const user = {
username: "Sarmad",
price: 999,
welcomeMessage: function(){
    // console.log(`${this.username}, welcome to the website`);
}
}

user.welcomeMessage()    //this works in context of the objects in JS

// Arrow function
const chai = () => {

    let username = "Sarmad"
    console.log(username);
    
}
// chai()  

// IIFE - immediately invoked function expressions -> used to avoid pollution of this funcs for global variables/scopes

(function chai(){
    console.log("DB connected");
    
}) (); 

(()=>{
    console.log("DB connected 2");
    
})();