
let liClassEspecial = document.querySelectorAll("li.especial");
let liArray = Array.from(liClassEspecial);

    
let container = document.querySelector(".container");
let olElement = document.createElement("ol");
container.appendChild(olElement);



var insert = () => {
    for(i=0; i<=liArray.length; i++){
        try {
            var liClone = liArray[i].cloneNode(true);
            olElement.appendChild(liClone);
        } catch(err) {
            err;
        }
    }
}

 insert(); 

