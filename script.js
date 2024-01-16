var Mainimg = document.getElementById("Mainimg");
        var Smallimg = document.getElementsByClassName("small-img");


        Smallimg[0].onclick = function(){
            Mainimg .src = Smallimg[0].src;
        }
        Smallimg[1].onclick = function(){
            Mainimg .src = Smallimg[1].src;
        }
        Smallimg[2].onclick = function(){
            Mainimg .src = Smallimg[2].src;
        }