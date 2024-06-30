

function toggleStyleSheet(){

    var x = document.getElementById("mainStyleSheet");
    var name = x.getAttribute("href");

    var newone;
    if (name == "AI.css"){
        newone = "AI_two.css"
    }
    else{
        newone = "AI.css"
    }
    x.setAttribute("href", newone);

    localStorage.setItem('sheet', x.getAttribute("href"));
}


window.onload = function(){    
    var name = localStorage.getItem('sheet');
    var style = document.getElementById("mainStyleSheet");
    if (name!= "AI.css" && name!= "AI_two.css"){
        name = "AI.css";
    }
    style.setAttribute("href", name);
}


