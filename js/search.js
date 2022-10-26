let searchBar = document.getElementById("search");

let photos = document.querySelectorAll(".photo");

searchBar.addEventListener("keyup", (e) => {
    const input = e.target.value.toLowerCase();
    search(input);
})

function search(input) {
    for(i = 0; i < photos.length; i++) {
        const caption = photos[i].getAttribute(['data-caption']);
        const lowCaption = caption.toLowerCase();
        
        if(!lowCaption.includes(input)) {
           photos[i].style.display="none"; 
        } else { 
            photos[i].style.display="inherit";
        }
    }
}


