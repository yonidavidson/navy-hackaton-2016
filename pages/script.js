function updateUI(status) {
//    document.getElementById("power").innerHTML = "hahahah";
    setLabelColor(status,"power");
    setLabelColor(status,"isolation");
    setLabelColor(status,"firemen");
    setLabelColor(status,"pipelines");
    setLabelColor(status,"madaz");
    setLabelColor(status,"reportOut");
    setRecomandation(status,"recommendation1");
    setRecomandation(status,"recommendation2");
    setRecomandation(status,"recommendation3");

    // setLabelColor(status,"water_pressure");
    // setLabelColor(status,"all_personel_on_board");
}
function setLabelColor(status,name) {
    var $element =  $("."+name);
    var value = status[name];

    
    if (value){
        $element.removeClass("list-group-item-danger").removeClass("list-group-item-success").removeClass("panel-danger").removeClass("panel-warning");
        $element.addClass("list-group-item-success")
        $element.addClass("panel-success")
    }
}

function setRecomandation(status,name) {
    var $element =  $("#"+name);
    var value = status[name];

    $element[0].innerHTML = value;
}

function pollServer() {
   $.ajax({url: "/getStatus", crossDomain : true, success: function(status){
            updateUI(status);
    }});
    // // alert("fsdf");
    // updateUI(status);
}

window.onload = function() {
    // updateUI();
    window.setInterval(pollServer,500);

}
