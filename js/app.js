$(document).ready(function(){


  /* Initialize inputs and display.*/
  let inputArray=[];
  let operArr=[];
  let decimalCounter=0;
  document.getElementById('display').value='0'
  var total=0;

  //updateDisplay(total);
  /*Clear button functionality that reinitialize the calculator*/
  $('.clear-card').on('click',function(){
    document.getElementById('display').value='0'
    total=0;
    decimalCounter=0
  })
  /* Click functionality for cacluator grid for operations and inputs*/
  $('.card').on('click',function (event){
    let display=document.getElementById('display')
    //console.log(display.text)
    var input=$(this).text();
    inputArray.push(input)
    console.log(input)
    let regex=/[0-9]/g
    let operRegex=/[+-/*]/g

    console.log(typeof input)

    if(regex.test(input)){
      if(inputArray[0]=='0' && inputArray[1]=='0'){
        document.getElementById("zero").disabled = true;
      }else if(document.getElementById('display').value=='0'){
        document.getElementById('display').value = input;
      }
      else{
        console.log('a number')
        let inputArray=[];
        document.getElementById("zero").disabled = false;
        document.getElementById('display').value += input;
      }

    }else if(input=='+' || input=='-'|| input=='*' || input=='/'){
      if(operRegex.test(document.getElementById('display').value[document.getElementById('display').value.length-1])){
        document.getElementById('display').value=document.getElementById('display').value.slice(0,document.getElementById('display').value.length-1)+input;
      }else{
        document.getElementById("zero").disabled = false;
        document.getElementById("decimal").disabled = false;
        document.getElementById('display').value += input;
        //console.log(document.getElementById('display').value[document.getElementById('display').value.length-1])
        inputArray=[];
        decimalCounter=0;
      }



    }else if(input=='.'){
      let inputArray=[];
      document.getElementById("zero").disabled = false;
      decimalCounter++;
      if(decimalCounter==1){
        document.getElementById('display').value += input;
        document.getElementById("decimal").disabled = true;
      } else{

      }
    }
    else if(input=='='){
      console.log(operArr)
      if(operRegex.test(document.getElementById('display').value)){
        console.log('the display has operators')
        total=eval(document.getElementById('display').value);
         document.getElementById('display').value=total
      }else{

      }



      }
    })

});
    //displayStorage.push(input)
/*
    if (input=='Clear'){
      total=0;
      currentDisplay='0';
    } else if( input==='.'){
      currentDisplay+=".";
    } else if (isNumber(input)){
        if(currentDisplay=='0'){
          currentDisplay=input
        }
        else {
          currentDisplay=currentDisplay+input;
        }
    } else if (isOperation(input)){
      console.log(currentDisplay)
      firstNum=parseFloat(currentDisplay) //parseFloat(currentDisplay);
      console.log(firstNum)
      operator=input;
      currentDisplay='';
    }else if( input==='='){
      currentDisplay = calculate(firstNum,currentDisplay,operator);
      operator=null;
    }
    //currentDisplay=input;
    updateDisplay(currentDisplay);
  });
});

function updateDisplay(displayValue){
  var displayValue=displayValue.toString();
  $('#display').html(displayValue.substring(0, 10))
}

function isNumber(num){
  return !isNaN(num);
}

function isOperation(value) {
  return (value == '/' || value == '*' || value == '+' || value == '-');
};

function calculate(num1,num2,operation){
  num1=parseFloat(num1);
  num2=parseFloat(num2);
  console.log(num1,operation,num2)
  switch(operation){
    case '+':
      return num1+num2;
      break;
    case '-':
      return num1-num2;
      break;
    case '*':
      return num1*num2;
      break;
    case '/':
      return num1/num2;
      break;
  }

}
    //document.getElementById('display').innerHTML=num;
/*    $('#display').append(num);
    displayStorage=displayStorage+num;

    //console.log(displayStorage);


    if (num=='.'){
      decimalCounter++;
    }
    /*Prevents the entering of multiple decimal points, prevents further entering, and won't clear until the clear button is pushed*/
  /*  if (decimalCounter >1){
        document.getElementById('display').innerHTML="error";
        //$('#decimal').off('click',console.log("stop"));
        //document.getElementById('card').disabled=true;
        $('.card').attr('disabled', true);
        console.log('No more than two decimals places');
      }
      if ($('.card').attr('disabled')){
        console.log("STOPPP")
      }
      else if((num=='+' || num=='-'|| num=='*' || num=='/') && (equalCounter!=0)){
          console.log(equalCounter)
          operArr.push(displayStorage[displayStorage.length-1]);
          decimalCounter=0;
          document.getElementById('display').innerHTML=total+displayStorage[displayStorage.length-1];
          console.log(inputs)
          console.log(total)
          console.log(displayStorage)
      }
      /*Handling an operator and saves the input to a separate array*/
  /*  else if (num=='+' || num=='-'|| num=='*' || num=='/'){



      operArr.push(displayStorage[displayStorage.length-1]);
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      displayStorage=''
      decimalCounter=0;
      console.log(displayStorage)
      console.log(inputs);
      //console.log(operArr)
//document.getElementById('display').innerHTML="";

}
    /*calculates all inputs based on excutation formula, includes prior calculated totals */

/*    if(num=='='){
      equalCounter+=1;
      console.log(operArr)
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      /*=inputs[0] ;*/

  /*    for (let i=0;i<operArr.length;i++){


        if(operArr[i]=='+'){
            console.log(inputs)
            total=inputs[i]+inputs[i+1]
            displayStorage=''
            displayStorage=inputs[i]+"+"+inputs[i+1]+"="+total.toString()
            inputs=[];
            inputs.push(total)
            console.log(inputs)
            console.log(total)
            console.log(displayStorage)
            document.getElementById('display').innerHTML=displayStorage

        }


       else if(operArr[i]=='-'){
          console.log(inputs)
          total=inputs[i]-inputs[i+1]
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
  })
})*/
