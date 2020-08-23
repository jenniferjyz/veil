document.getElementById("veilTitle").onclick =  function unveil(){
    if(document.getElementById("veilTitle").innerHTML == "UnVeil"){
        document.getElementById("trueWords").innerHTML = "Veil is a fashion brand focused on empowerment and stylistic exploration. At Veil, we encourage you to be your truest and happiest self. Break free of what's holding you back with our products and resources. Emerge from the veil.";
        document.getElementById("veilTitle").innerHTML = "Veil"
    }
    else{
        document.getElementById("trueWords").innerHTML = "We strive to help domestic abuse victims find resources and communties that can bring them closer to a happier life. With COVID - 19 endangering many women with new quarantine regulations, Veil has created a platform to discretely find help online, from your home. Find shelters close to you with our interactive map under Find Stores, or browse through more general resources in the shop section. You are not alone at Veil. ";
        document.getElementById("veilTitle").innerHTML = "UnVeil"
    }
};