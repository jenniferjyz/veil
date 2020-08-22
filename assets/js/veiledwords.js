document.getElementById("veilTitle").onclick =  function unveil(){
    if(document.getElementById("veilTitle").innerHTML == "UnVeil"){
        document.getElementById("trueWords").innerHTML = "Veil is a fashion brand focused on empowerment and stylistic exploration. At Veil, we encourage you to be your truest and happiest self. Break free of what's holding you back with our products and resources. Emerge from the veil.";
        document.getElementById("veilTitle").innerHTML = "Veil"
    }
    else{
        document.getElementById("trueWords").innerHTML = "We strive to help domestic abuse victims find resources and communties that bring them closer to a happier lifestyle. COVID - 19 has made domestic abuse situations so much worse and we are here to help. Enter your location to find resources close to you or browse through more general resources. You are not alone at Veil. ";
        document.getElementById("veilTitle").innerHTML = "UnVeil"
    }
};