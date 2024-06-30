

function toggleStyleSheet(){

    var x = document.getElementById("mainStyleSheet");
    var name = x.getAttribute("href");

    var newone;
    if (name == "service.css"){
        newone = "service_two.css"
    }
    else{
        newone = "service.css"
    }
    x.setAttribute("href", newone);

    localStorage.setItem('sheet', x.getAttribute("href"));
}


window.onload = function(){    
    var name = localStorage.getItem('sheet');
    var style = document.getElementById("mainStyleSheet");
    if (name!= "service.css" && name!= "service_two.css"){
        name = "service.css";
    }
    style.setAttribute("href", name);
}


