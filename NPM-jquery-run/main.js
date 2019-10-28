const faker = require("faker")
// let j = require("./node_modules")

// $("#opening1").on("click", function(){
//     $("#opening1").css("background-color", "#f39c12") 
// })


// let arr = []
function makeHuman(num){
    for (let i = 0; i < num; i++) {
        console.log(faker.name.firstName(), faker.company.companyName() )        
    }
}

makeHuman(2)
// console.log(arr);

