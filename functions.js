

function toggleStyleSheet(){

    var x = document.getElementById("mainStyleSheet");
    var name = x.getAttribute("href");

    var newone;
    if (name == "index.css"){
        newone = "index_two.css"
    }
    else{
        newone = "index.css"
    }
    x.setAttribute("href", newone);

    localStorage.setItem('sheet', x.getAttribute("href"));
}


window.onload = function(){    
    var name = localStorage.getItem('sheet');
    var style = document.getElementById("mainStyleSheet");
    if (name!= "index.css" && name!= "index_two.css"){
        name = "index.css";
    }
    style.setAttribute("href", name);
}


