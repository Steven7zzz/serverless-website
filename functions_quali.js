

function toggleStyleSheet(){

    var x = document.getElementById("mainStyleSheet");
    var name = x.getAttribute("href");

    var newone;
    if (name == "qualifications.css"){
        newone = "qualifications_two.css"
    }
    else{
        newone = "qualifications.css"
    }
    x.setAttribute("href", newone);

    localStorage.setItem('sheet', x.getAttribute("href"));
}


window.onload = function(){    
    var name = localStorage.getItem('sheet');
    var style = document.getElementById("mainStyleSheet");
    if (name!= "qualifications.css" && name!= "qualifications_two.css"){
        name = "qualifications.css";
    }
    style.setAttribute("href", name);
}


