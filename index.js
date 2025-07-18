const btnValues = [
    "AC", "+/-", "%", "/", 
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const symbolsRight = ["/", "*", "-", "+", "="];
const symbolsTop = ["AC", "+/-", "%"];

const display =document.getElementById("display")

//A+B,A*B.A-B,A/5
let  A = 0;
let  operator =null;
let B = null

// to clear all neeed to create the function
function clearAll(){
   A=0;
   operator =null;
   B=null;
}



for (let i = 0; i < btnValues.length; i++ ){
    //<button></button>
    let value =btnValues[i];
    let button = document.createElement("button");
    button.innerText =value;

 //styling for button colors
 if (symbolsRight.includes(value)){
    button.style.backgroundColor="orange"

 }
 else if (symbolsTop.includes(value)){
    //button color
    button.style.backgroundColor="lightgrey"
    //inside the top color
    button.style.color="black"
 }
 
 //value 0 styling for larges
 if (value =="0"){
    button.style.width="200px"
    // span means occupy to 2 value
    button.style.gridColumn ="span 2"
 }


 //process button clicks
 button.addEventListener("click", function(){

    if (symbolsRight.includes(value)){
      if (value == "="){
         if(A !=null){
            B = display.value;
            let numA = Number(A);
            let  numB= Number(B);

            if ( operator == "/"){
               display.value=numA/numB;
            }
            else if ( operator == "*"){
               display.value=numA*numB;
            }
            else if ( operator == "-"){
               display.value=numA-numB;
            }
            else if ( operator== "+"){
               display.value=numA+numB;}
            
               clearAll();
         }


      }else{
          operator=value;
         A=display.value;
         display.value="";
      }


    }
    else if (symbolsTop.includes(value)){
      if(value =="AC"){
         clearAll();
         //make in empty to clear
         display.value="";

      }else if (value =="+/-"){
         if(display.value !="" && display.value !="0"){
            if (display.value[0]=="-"){//remove -
               display.value =display.value.slice(1);}
               else{
                  display.value ="-" + display.value;
               };
         }

      }else if (value =="%"){
         display.value = Number(display.value)/100;
      }


    }
    else{//numbers or .
        if(value =="."){
         //!= not equal !not  with . one time then if you put . first it will not working
            if(display.value !="" && !display.value.includes(value)){
               display.value +=value;
            }

        }
        //only 1 time zero and you put the value zero will gone
        else if (display.value =="0"){
         display.value =value;
        }
        
        else{
            //this type for 1234569
            display.value +=value;
        }

    }



 });

  

 //add button to calculator connected btnvalues to html
 document.getElementById("buttons").appendChild(button);

}