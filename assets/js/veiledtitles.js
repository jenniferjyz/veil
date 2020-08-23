document.getElementById("arrivalTitle").onclick = function reveal(){
    if(document.getElementById("arrivalTitle").innerHTML == "new arrivals"){
        document.getElementById("arrivalTitle").innerHTML = "resources"
    }
    else{
        document.getElementById("arrivalTitle").innerHTML = "new arrivals"
    }
};

