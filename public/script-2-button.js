function updateUI(status) {
//    document.getElementById("power").innerHTML = "hahahah";
    setLabelColor(status,"power");
    setLabelColor(status,"isolation");
    setLabelColor(status,"firemen");
    setLabelColor(status,"pipelines");
    setRecomandation(status,"recommandation1");
    setRecomandation(status,"recommandation2");
    setRecomandation(status,"recommandation3");
    // setLabelColor(status,"water_pressure");
    // setLabelColor(status,"all_personel_on_board");
}
function setLabelColor(status,name) {
    var $element =  $("."+name);
    var value = status[name];

    $element.removeClass("list-group-item-danger").removeClass("list-group-item-success").removeClass("panel-danger").removeClass("panel-warning");
    if (value){
        $element.addClass("list-group-item-success")
        $element.addClass("panel-success")
    } else {
        $element.addClass("label-danger") 
    }
}

function setRecomandation(status,name) {
    var $element =  $("#"+name);
    var value = status[name];

    $element[0].innerHTML = value;
}

function pollServer() {
    var status = {
    
        power: true,
        isolation: true,
        firemen: true,
        pipelines: true,
        recommandation1: "אין לכבות שריפה באמצעות הידרנט. מתחים לא נותקו ",
        recommandation2: "",
        recommandation3: "",
    }
    // alert("fsdf");
    updateUI(status);
}

window.onload = function() {
    // updateUI();
    window.setInterval(pollServer,3000);

}
