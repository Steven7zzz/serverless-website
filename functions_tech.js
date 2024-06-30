

function toggleStyleSheet(){

    var x = document.getElementById("mainStyleSheet");
    var name = x.getAttribute("href");

    var newone;
    if (name == "tech.css"){
        newone = "tech_two.css"
    }
    else{
        newone = "tech.css"
    }
    x.setAttribute("href", newone);

    localStorage.setItem('sheet', x.getAttribute("href"));
}


window.onload = function(){    
    var name = localStorage.getItem('sheet');
    var style = document.getElementById("mainStyleSheet");
    if (name!= "tech.css" && name!= "tech_two.css"){
        name = "tech.css";
    }
    style.setAttribute("href", name);
}


