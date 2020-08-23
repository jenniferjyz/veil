document.getElementById("arrivalTitle").onclick = function reveal(){
    if(document.getElementById("arrivalTitle").innerHTML == "new arrivals"){
        document.getElementById("arrivalTitle").innerHTML = "resources"
        document.getElementById("prod1").innerHTML = "Transportation"
        document.getElementById("prod2").innerHTML = "Phone Lines"
        document.getElementById("prod3").innerHTML = "Shelter"
        document.getElementById("prod4").innerHTML = "Treatment Services"
        document.getElementById("prod5").innerHTML = "Communities"
        document.getElementById("prod6").innerHTML = "Financial Support"
        document.getElementById("prod7").innerHTML = "Therapy"
        document.getElementById("prod8").innerHTML = "Medical Support"
    }
    else{
        document.getElementById("arrivalTitle").innerHTML = "new arrivals"
        document.getElementById("prod1").innerHTML = "Navy Blue Hoodie"
        document.getElementById("prod2").innerHTML = "Knitted Scarf"
        document.getElementById("prod3").innerHTML = "White Button Up"
        document.getElementById("prod4").innerHTML = "Plaid Button Up"
        document.getElementById("prod5").innerHTML = "Navy Blue Polo"
        document.getElementById("prod6").innerHTML = "Cat Eye Sunglasses"
        document.getElementById("prod7").innerHTML = "Paint Splatter White Crewneck"
        document.getElementById("prod8").innerHTML = "White Sneakers"
    }
};

