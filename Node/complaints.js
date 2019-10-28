let complaintTypes = require("./consts")
let handleComplaints = require("./complaintsHandler")



let complaint1 = {
    text: "I'm not getting enough money",
    type: complaintTypes.FINANCE
}

console.log(complaint1)
let complaint2 = {
    text: "My salary hasn't come in yet",
    type: complaintTypes.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: complaintTypes.EMOTIONS
}

handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."


// to check the print(in terminal)