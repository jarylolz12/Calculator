var buttons = document.querySelectorAll("button");
var text = document.querySelector("#textBox1");
var buts = document.querySelector("#but");


var arr0 = [];
var operators = ""
var sagot = 0
//arr1[0] + arr1[1]
var end = false;

// buts.addEventListener("click", function(e){
//     if(e.target.classList == 'buttons'){ 
    
        

//     }
// });

    for(var x=0;x<buttons.length;x++){

        buttons[x].addEventListener("click", function(){
            if(!end){
                if(this.className == "buttons"){

                    text.value = text.value === 0 ? this : text.value + this.textContent 

                } else if(this.className == "operators"){

                    if (this.textContent == "^2"){
                        arr0.unshift(parseFloat(text.value))
                        sagot =  arr0[0] * arr0[0]
                        text.value = sagot;

                    }else if(this.textContent == "+" || "-" || "*" || "*"){
                        arr0.unshift(parseFloat(text.value))
                        operators = this.textContent
                        text.value = ""
                    }

                } else if(this.className == "compute"){

                    arr0.push(parseFloat(text.value))
                    text.value = ""

                    if (operators == "*"){
                        sagot =  arr0[0] * arr0[1]
                        text.value = sagot;

                    }else if (operators == "-"){
                        sagot =  arr0[0] - arr0[1]
                        text.value = sagot;

                    }else if (operators == "/"){
                        sagot =  arr0[0] / arr0[1]
                        text.value = sagot;

                    }else if (operators == "+"){
                        sagot =  arr0[0] + arr0[1]
                        text.value = sagot;
                    }
                }else if(this.className == "delete"){
                    text.value = ""

                }else if(this.className == "clear"){
                    text.value = ""
                    arr0 = []
                }
            }
        });
    };


   

    


// buts.addEventListener("click",function(e){
//     if(e.target.classList == 'buttons'){ 
//         text.value = e.target.textContent; 
        
//     }else if (e.target.classList == 'operators'){
//         arr0.unshift(text.value)
//         operators = e.target.textContent;
//         text.value = "";

//     }else if(e.target.classList == 'clear'){
//         for (var x = 0;x <= arr0.length; x++){
//            console.log(arr0[x]);
           
//         };

//     }else if(e.target.classList == 'delete'){
//         arr0.shift
//         text.value = "";
//     }else if(e.target.classList == 'compute'){
//         arr0.push(text.value)
//         arr1 = arr0.map(x =>+x);

//         if (operators == "*"){
//             text.value = arr1[0] * arr1[1]   
//         }else if (operators == "/"){
//             text.value = arr1[0] / arr1[1] 
//         }
//         else if (operators == "-"){
//             text.value = arr1[0] - arr1[1] 
//         }
//         else if (operators == "+"){
//             text.value = arr1[0] + arr1[1] 
//         }
//     }
// });

// text.addEventListener("keypress",function(e){
//     if (e.which === 13){
//         console.log("atah")
//     };
// });