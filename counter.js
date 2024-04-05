
               

var increase = document.querySelector(".up")
var decrease = document.querySelector(".down")
var rounded = document.querySelector(".rounded")
var p = document.querySelector("p")
var button = document.querySelectorAll("button")
var number=0;
var gray = document.querySelector(".gray")


let interval;


let interval2;



// la fonction stop permet de bloquer les processus d'incrementation ou de decrementation
function stop() {
    clearInterval (interval)
    interval = null;


    clearInterval (interval2)
    interval2 = null;
}



// la fonction incrementation verifie si le nombre est inférieur à 100 et fait +1 elle appelle également la fonction classes

function incrementation() {
  
    classes()


  if (number < 100) {
    number+=1;

p.textContent=number
  }

  else {
    stop()
}
     



}


// la fonction decrementation verifie si le nombre est supérieur à -100 et fait -1 elle appelle également la fonction classes
function decrementation() {
  
    classes()


  if (number > -100) {
    number-=1;

p.textContent=number
  }

  else {
    stop()
}


     

}







// lorsque le click est écouté sur increase on vérifie si un processus d'incrementation est deja lancé 
//si non alors on lance en appelant successivement la fonction incrementation à intervalle de 200ms

increase.addEventListener("click", ()=>{

  
if (!interval) {
    interval =  setInterval( incrementation , 200)
}

clearInterval (interval2)
    interval2 = null;

 
    
})


// lorsque le click est écouté sur decrease on vérifie si un processus de decrementation est deja lancé
//si non alors on lance en appelant successivement la fonction decrementation à intervalle de 200ms


decrease.addEventListener("click" , ()=>{

   
    if (!interval2) {
        interval2 = setInterval (decrementation , 200) 

    }

    clearInterval (interval)
    interval = null;
    
})




// au click de gray , si l'un des processus d'incrementation ou de decrementation est en cours , alors appeler la fonction stop ainsi que la fonction classes

gray.addEventListener ("click" , ()=>{
    
    classes()
    if (interval || interval2) {
        
        stop()
    }
})





// la fonction classes verifie la valeur de number en en fonction , ajoute soit une bordure rouge ou verte ou conserve celle d'origine


function classes() {
    switch (true) {
        case (number>0):
            rounded.classList.add ("green")
            
            break;
    
    
            case (number<0):
                rounded.classList.remove ("green")
                rounded.classList.add("red")
                break;
    
            default:
                rounded.classList.remove("green")
                rounded.classList.remove("red")
    
        
            
    }
}






