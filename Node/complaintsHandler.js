let complaintTypes = require("./consts")

let handleComplaints = function(complaint){
        if(complaint.type == complaintTypes.FINANCE ){
            console.log("Money doesn't grow on trees, you know.")
        }

        if(complaint.type == complaintTypes.WEATHER){
            console.log("It is the way of nature. Not much to be done.")
        }

        if(complaint.type == complaintTypes.EMOTIONS){
            console.log("It'll pass, as all things do, with time.")
        }
}

// handleComplaints({
//     text: "Hello",
//     type: complaintTypes,
// })

module.exports = handleComplaints
