const compra = ["uva" , "platano" , "mango" , "pera" , "manzana", "piña" , "arroz", "pechuga", "pepino"]
function listado (lista){
     
    let text = ""
    for (let index = 0; index < lista.length ; index++) {
        if(index==0){
            text= text + lista[index]
        }
       else if(index <=lista.length -2) {
        text = text  + " , "  + lista[index] 
        
     }else if (index==lista.length-1 ){ 
         text = text + " y " + lista[index]
      }
            
    }
console.log(`Tu lista tienes :  ${text}` )
} 
listado(compra)