$(document).ready(function(){
  let displayStorage='';
  let num=''
  let inputs=[];
  let add=0;
  let subtract=0;
  let multi=0;
  let divide=0;

  $('.card').on('click',function(){

    num=$(this).text()
    console.log(num)
    //document.getElementById('display').innerHTML=num;
    $('#display').append(num);
    displayStorage=displayStorage+num;

    console.log(displayStorage);
    /*if(num=='='){
      console.log("START Calculator")
    }*/
    if (displayStorage.length==2 && displayStorage[0]=="0" && displayStorage[1]!="."){
      console.log("Do you not know how math works")
    }
    if (num=='Clear'){
      displayStorage='';
      inputs=[];
      document.getElementById('display').innerHTML=""
    }
    if (num=='+' || num=='-'|| num=='*' || num=='/'){
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      displayStorage=''
      console.log(inputs);
      document.getElementById('display').innerHTML="";
      if (num=='+'){
        add+=1;
      }
      else if (num=='-'){
        subtract+=1;
      }
      else if (num=='*'){
        multi+=1;
      }
      else {
        divide+=1;
      }

    }
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
  })


})

function validateNumber(number) {
  return /^-?[1-9][0-9]*(.[0-9]+)?$/.test(parseFloat(number));
}

function add(numbers){
  return numbers.reduce(function(total,num){
    return total+num
  })
}

function subtract(numbers){
  return numbers.reduce(function(total,num){
    return total-num
  })
}

function multiple(numbers){
  return numbers.reduce(function(total,num){
    return total*num
  })
}

function divide(numbers){
  return numbers.reduce(function(total,num){
    return total/num
  })
}

console.log(add([1,2,5,10]).toFixed(4));
console.log(subtract([10,2,2]).toFixed(4));
console.log(multiple([10,10,10]).toFixed(4));
console.log(divide([10,2,2]).toFixed(4));
console.log(validateNumber('0.1'))
