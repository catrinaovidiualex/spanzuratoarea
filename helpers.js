
let setHome=()=>{


    let container= document.querySelector(".container");


    container.innerHTML=`

    <header>
    <h1>Bine ati venit!</h1>
    <h2>Pentru a incepe jocul Spanzuratoarea apasati butonul de start!</h2>
    <img src="../img/pic1.JPG">

</header>


<main class="main">


    <button class="start">Start Joc</button>
    <section >

                  
 
     </section>

</main>

<footer>
    <p>Copyright by Alex C.</p>
</footer>

    
 
    `


    let btn =document.querySelector(".start");


    btn.addEventListener("click",(e)=>{


        startJoc("Ana are mere ");
        
    })

    





}


let generateBox=(fraza)=>{

   
    let cutii="";
    for(let i=0;i<fraza.length;i++){
        if(fraza[i]==" "){

            cutii+=`<p class="spatiu"> </p>`

        }
        else{
            cutii+=`<p class="cutie"></p>`
        }
    }

    return cutii;
       

}


let introduceLitera=(frazaCautata ,litereleGasite)=>{

    let frazaNoua="";

    let win=true;
 for (let i=0;i<frazaCautata.length;i++){





        if(litereleGasite.includes(frazaCautata[i])){

           frazaNoua+=` <p class="cutie">${frazaCautata[i]}</p>`

        }else if(frazaCautata[i]!=" "){


            frazaNoua+=` <p class="cutie"></p>`

            win=false;


        }else{
            frazaNoua+=` <p class="spatiu"> </p>`
        }

   
 }

 return   ({rez:frazaNoua,status:win}) 


}



let startJoc=(fraza)=>{

    let litere="";

    let container= document.querySelector(".container");

    let incercari=3;

    container.innerHTML=`
    
    <header>
        <h3>Numarul de incercari este:</h3>
        <p class="incercari">${incercari}</p>
        
        

    </header>


    <main class="main">

        <h2>Fraza cautata este:</h2>
    <section class="textCautat">

        
    ${generateBox(fraza)}

   </section>

   <section class="generare_buton">
      <button class="introdu">Introduceti litera</button>
      <input type="text" class="litera">

   </section>
   <section >
       <button class="generare_fraza">Generati fraza</button>
       

    </section>

    <section >

     
       

    </section>

  
        

    </main>
   
    <footer>
        <p>Copyright by Alex C.</p>
    </footer>

    
        
    
    `
   

    let btn=document.querySelector(".introdu");


    btn.addEventListener("click",()=>{

        let lit=prompt("Introductei litera ");

        

        if(fraza.includes(lit)&&litere.includes(lit)===false){
           
            litere+=lit;
            let textCautat=document.querySelector(".textCautat");

          
            
            
            let obj=introduceLitera(fraza,litere);

            textCautat.innerHTML=obj.rez;

            if(obj.status==true){


                setFinalJoc(true);

            }


        }else{

             let vieti=document.querySelector(".incercari");

             incercari--;

             vieti.innerHTML=incercari;

             if(incercari==0){

                setFinalJoc(false);
            }

        }

      
       
    })








}

let setFinalJoc=(status)=>{

    if (status==false){

    let container=document.querySelector(".container");

 
        container.innerHTML=`
        <header>
        <h1>Ati terminat toate incercarile!</h1>
        <h2>Pentru a reincepe jocul apasati butonul 'Incercati din nou'</h2>
        <img src="../img/gameover.jpg">
    
    </header>
    
    
    <main class="main">
    
    
      
        <section >      
    
            <section >
    
                <button class="restart_joc">Incercati din nou</button>
                
         
             </section>        
     
         </section>
    
    </main>
    
    <footer>
        <p>Copyright by Alex C.</p>
    </footer>
        
        `
    }
    else if (status==true){

        let container=document.querySelector(".container");

 
        container.innerHTML=`
        <header>
        <h1>Felicitari, ati ghicit fraza introdusa!</h1>
        <h2>Daca doriti sa incepeti un joc nou apasati butonul Incercati din nou'</h2>
        <img src="../img/youwin.jpg">

    </header>


    <main class="main">


      
        <section >      

            <section >

                <button class="restart_joc">Incercati din nou</button>
                
         
             </section>        
     
         </section>

    </main>

    <footer>
        <p>Copyright by Alex C.</p>
    </footer>

        `

    }
    



}




let btn_restart=document.querySelector(".restart_joc");









