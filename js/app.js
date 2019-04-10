$(function(){
  /* Initialize inputs and display.*/


$(document).ready(function(){
  let inputArray=[], total=0, decimalCounter=0, displayValue=document.getElementById('display'), zeroInput=document.getElementById("zero"),input;
  displayValue.value='0',regex=/[0-9]/g,operRegex=/[+-/*%]/g;
  /*Clear button functionality that reinitialize the calculator*/
  $('.clear-card').on('click',function(){
    displayValue.value='0';
    total=0;
    decimalCounter=0;
  })
  /*KeyDown functionality*/
  $(document).on('keypress', function(event){
       input=event.key;
      if(regex.test(input)){
        if(inputArray[0]=='0' && inputArray[1]=='0'){
          zeroInput.disabled = true;
        }else if(displayValue.value=='0'){
          displayValue.value = input;
        }
        else{
          inputArray=[];
          zeroInput.disabled = false;
          displayValue.value += input;
        }
      }
      else if(input=='+' || input=='-'|| input=='*' || input=='/' || input=='%'){
        if(operRegex.test(displayValue.value[displayValue.value.length-1])){
          displayValue.value=displayValue.value.slice(0,displayValue.value.length-1)+input;
        }else{
          zeroInput.disabled = false;
          document.getElementById("decimal").disabled = false;
          displayValue.value += input;
          inputArray=[];
          decimalCounter=0;
        }
      }
    
      else if(input=='.'){
        inputArray=[];
        zeroInput.disabled = false;
        decimalCounter++;
        if(decimalCounter==1){
          displayValue.value += input;
          document.getElementById("decimal").disabled = true;
        } else{
        }
      }
      else if(input=='Enter'){
        operRegex.test(displayValue.value)?
         displayValue.value=eval(displayValue.value): null
        }
  });
  /* Click functionality for cacluator grid for operations and inputs*/
  $('.card').on('click',function (event){
    input=$(this).text();
    inputArray.push(input);
    if(regex.test(input)){
      if(inputArray[0]=='0' && inputArray[1]=='0'){
        zeroInput.disabled = true;
      }else if(displayValue.value=='0'){
        displayValue.value = input;
      }
      else{
        inputArray=[];
        zeroInput.disabled = false;
        displayValue.value += input;
      }
    }else if(input=='+' || input=='-'|| input=='*' || input=='/' || input=='%'){
      if(operRegex.test(displayValue.value[displayValue.value.length-1])){
        displayValue.value=displayValue.value.slice(0,displayValue.value.length-1)+input;
      }else{
        zeroInput.disabled = false;
        document.getElementById("decimal").disabled = false;
        displayValue.value += input;
        inputArray=[];
        decimalCounter=0;
      }
    }else if(input=="+/-"){
      displayValue.value=0-displayValue.value
    }
    else if(input=='.'){
      let inputArray=[];
      zeroInput.disabled = false;
      decimalCounter++;
      if(decimalCounter==1){
        displayValue.value += input;
        document.getElementById("decimal").disabled = true;
      } else{
      }
    }
    else if(input=='='){
      operRegex.test(displayValue.value)?
       displayValue.value=eval(displayValue.value): null
      }
    })
  });
});
