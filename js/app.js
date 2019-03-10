$(document).ready(function(){
  let displayStorage='';
  let num=''
  let inputs=[];

  let operArr=[];
  $('.card').on('click',function(){

    num=$(this).text()
    console.log(num)
    //document.getElementById('display').innerHTML=num;
    $('#display').append(num);
    displayStorage=displayStorage+num;

    //console.log(displayStorage);

    if (num=='Clear'){
      displayStorage='';
      inputs=[];
      operArr=[];
      console.log(inputs)
      document.getElementById('display').innerHTML=""
    }
    if (num=='+' || num=='-'|| num=='*' || num=='/'){

        $('#status').hide();

      operArr.push(displayStorage[displayStorage.length-1]);
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      displayStorage=''
      //console.log(inputs);
      //console.log(operArr)
      document.getElementById('display').innerHTML="";

    }


    if(num=='='){
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      let total=inputs[0];
      for (let i=0;i<operArr.length;i++){
        if(operArr[i]=='+'){
          console.log(inputs)
          total=total+inputs[i+1]
          document.getElementById('display').innerHTML=total
          //delete inputs[0];

          console.log(inputs)
          console.log(total)
        }
        else if(operArr[i]=='-'){
          console.log(inputs)
          total=total-inputs[i+1]
          document.getElementById('display').innerHTML=total
          //delete inputs[0];

          console.log(inputs)
          console.log(total)
        }

        else if(operArr[i]=='*'){
          console.log(inputs)
          total=total*inputs[i+1]
          document.getElementById('display').innerHTML=total
          //delete inputs[0];

          console.log(inputs)
          console.log(total)
        }

        else if(operArr[i]=='/'){
          console.log(inputs)
          if(inputs[i+1]==0){
            console.error("STOPS");
            document.getElementById('display').innerHTML='UNDEFINED'
          }else{
            total=total/inputs[i+1]
            document.getElementById('display').innerHTML=total
            //delete inputs[0];

            console.log(inputs)
            console.log(total)
          }

        }
      }
    }




    /*
    if(num=='='&& add>=1){
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      console.log(inputs)
      document.getElementById('display').innerHTML=inputs.reduce(function(total,num){
        return total+num;
      }).toFixed(4)
      //inputs=[];
    }
    else if(num=='='&& subtract>=1){
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      console.log(inputs)
      document.getElementById('display').innerHTML=inputs.reduce(function(total,num){
        return total-num;
      }).toFixed(4)
      //inputs=[];
    }
    else if(num=='='&& multi>=1){
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      console.log(inputs)
      document.getElementById('display').innerHTML=inputs.reduce(function(total,num){
        return total*num;
      }).toFixed(4)
      //inputs=[];
    }
    else if (num=='='&& divide>=1){

        inputs.push(parseFloat(displayStorage.slice(0,-1)))
        console.log(inputs)
        document.getElementById('display').innerHTML=inputs.reduce(function(total,num){
          return total/num;
        }).toFixed(4)
        //inputs=[];

    }
  })*/


})
})
function validateNumber(number) {
  return (typeof parseFloat(number)==='number');
}

function add(number1,number2){
  return number1+number2;

}

function subtract(number1,number2){
  return number1-number2;
}

function multiple(number1,number2){
  return number1*number2;
}

function divide(number1,number2){

    if (number2==0){
      return "ERROR!!"
      } else{
          return number1/number2
      }

  }

/*
console.log(add([1,2,5,10]).toFixed(4));
console.log(subtract([10,2,2]).toFixed(4));
console.log(multiple([10,10,10]).toFixed(4));
console.log(divide([10,2,2]).toFixed(4*/

console.log(validateNumber('1.00'));
