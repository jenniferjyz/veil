document.getElementById("mapTitle").onclick = function reveal(){
    if(document.getElementById("mapTitle").innerHTML == "Find Stores"){
        document.getElementById("mapTitle").innerHTML = "Find Shelters"
    }
    else{
        document.getElementById("mapTitle").innerHTML = "Find Stores"
    }
};
