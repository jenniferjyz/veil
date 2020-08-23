document.getElementById("shopTitle").onclick = function reveal2(){
    if(document.getElementById("shopTitle").innerHTML == "Shop with us"){
        document.getElementById("shopTitle").innerHTML = "Let Us Help You";
        document.getElementById("phone").innerHTML = "Phone Lines";
        document.getElementById("shelter").innerHTML = "Shelters";
        document.getElementById("treatment").innerHTML = "Treatment Services";
        document.getElementById("extra1").innerHTML = "Communities";
        document.getElementById("extra2").innerHTML = "Financial Support";
        document.getElementById("extra3").innerHTML = "Therapy";
        document.getElementById("extra4").innerHTML = "Support Groups";
        document.getElementById("extra5").innerHTML = "Medical Support";
    }
    else{
        document.getElementById("shopTitle").innerHTML = "Shop with us"
        document.getElementById("phone").innerHTML = "Knitted Scarf";
        document.getElementById("shelter").innerHTML = "White Button Up";
        document.getElementById("treatment").innerHTML = "Plaid Button Up";
        document.getElementById("extra1").innerHTML = "Navy Blue Polo";
        document.getElementById("extra2").innerHTML = "Cat Eye Sunglasses";
        document.getElementById("extra3").innerHTML = "Paint Splatter Crewneck";
        document.getElementById("extra4").innerHTML = "White Sneakers";
        document.getElementById("extra5").innerHTML = "Navy Blue Hoodie";
    }
};