const numero =  [5,3,2,16,20,33]
const paquete = [40,30,90,2,4,6,7,9,1,23,22,5,30,12]

function lector (num){
  numPar = [];
   numIn = [];
    for(i=0; i<num.length; i++){
       if ( num[i]% 2 == 0 ){
            numPar.push(num[i]) 
        }else{
            numIn.push(num[i]) 
        }
    }console.log(numPar)
    console.log(numIn)

}lector(paquete)
