
let switchMode = document.getElementById("switchMode");
let  theme = document.getElementById("theme");


switchMode.onclick = function (){
     
     if (theme.getAttribute("href") == "css/black_them.css") {
         theme.href = "css/light_them.css";
     }else{
        theme.href = "css/black_them.css";
     }
}