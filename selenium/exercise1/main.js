
let b1 = $("#addbutton").click(function(){
    $("body").append("<div  id = 'newText' >" +  $("#textinserted").val() + "</div>").css("color", "purple"),
    $("#textinserted").val("")
})


