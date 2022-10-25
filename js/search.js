let input = document.getElementById("search").value;
input=input.toLowerCase();
let y = input.addEventListener("keyup", search());
let x = document.querySelectorAll(".photo a");

function search() {
    for(i = 0; i < x.length; i++) {
        if(!x[i].getAttribute("data-caption").toLowerCase().includes(input)) {
           return x[i].style.display="none"; 
        } else {
            return x[i].style.display="a";
        }
    }
}


