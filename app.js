
let fraze=[

    {
        fraza:"Ana are mere",
        nume:"Alex"
    },

    {
        fraza:"Lectia trei de JS",
        nume: "Bogdan"
    },

    {
        fraza:"Programare orientata obiect",
        nume: "Maria"
    },

    {
        fraza:"Jocul se numeste spanzuratoarea",
        nume:"Bianca"
    }


]


 let persoane =[
     {
         nume:"Alex",
         varsta:18
     },

     {
        nume:"Bogdan",
        varsta:20
    },

    {
        nume:"Maria",
        varsta:25
    },

    {
        nume:"Bianca",
        varsta:29
    }

 ]   

 let container=document.querySelector(".textCautat");


 let btnCautareLitera=document.querySelector(".generare_buton")

 let mainC= document.querySelector(".main");

 let btnStart= document.querySelector(".start");



 function generareFraza(){
    

        let fr=Math.floor(Math.random()*fraze.length);

        return fraze[fr];
    
    
 }




 btnGenerareFraza=document.querySelector(".generare_fraza");





 function verificareLitera(textCautat, textGasit){
  

    let text="";

    for (let i=0;i<textCautat.length;i++){
       

          if(textCautat[i]==" "){

            text +=` <p class="spatiu"></p>`
          }else   if(textGasit.includes(textCautat[i]) ){

            text +=` <p class="cutie">${textCautat[i]}</p>`
                 
           }else {

            text +=` <p class="cutie"></p>`
           }

       


    }


    return text;

   
    
}


 let obj=generareFraza();  

 let nume=obj.nume;

 let textCautat=obj.fraza;

 let textGasit="";

 console.log(textCautat);


function persoanaCareAGenerat(){
    
    for(let i=0; i<fraze.length;i++){
        if(fraze.fraza[i].contains(text))
        return fraze.nume[i];
    }

}


btnStart.addEventListener("click",()=>{


     mainC.innerHTML=`
     <h2>Fraza cautata este:</h2>
    <section class="textCautat">
    <p class="cutie">_</p>
    <p class="cutie">_</p>
    <p class="cutie">_</p>
    <p class="spatiu "> </p>
    <p class="cutie">_</p>
    <p class="cutie">_</p>
    <p class="cutie">_</p>
    <p class="spatiu"> </p>
    <p class="cutie">_</p>
    <p class="cutie">_</p>
    <p class="cutie">_</p>
    <p class="cutie">_</p>

   </section>

   <section class="generare_buton">
      <button>Introduceti litera</button>
      <input type="text" class="litera">

   </section>
   <section >
       <button class="generare_fraza">Generati fraza</button>
       

    </section>

    <section >

       <button class="restart_joc">Incercati din nou</button>
       

    </section>

    
     
     `
     btnGenerareFraza.addEventListener("click",()=>{
        obj=generareFraza();
       
         nume=obj.nume;
       
         textCautat=obj.fraza;
       
       
       
         textGasit="";
       
       
        console.log(textCautat);
       
        container.innerHTML=verificareLitera(textCautat,textGasit);
       
       
       
         
       })
       
       
    btnCautareLitera.addEventListener("click", ()=>{
       
       
        let litera=prompt("Introduceti o litera:");
    
    
        if(textCautat.includes(litera)==true){
    
              textGasit+=litera;
              container.innerHTML=verificareLitera(textCautat,textGasit);
        }
    
      
    })
    
    btnStartJoc.addEventListener("click",()=>{
    
        for (let i=0; i<persoane.length;i++)
      
                if(persoane[i].nume==nume){
      
                   console.log(persoane[i]);
                  
                }
      
      })
    
    function resetareJoc(){
        for (let i =0;i<fraze.length;i++){
            fraze=generareFraza();
        }
        return fraze;
    }  
    
    btnReStartJoc=document.querySelector(".restart_joc");
    btnReStartJoc.addEventListener("click", ()=>{
        let restart =reload();
    })


  
})
