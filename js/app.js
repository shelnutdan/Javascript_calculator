$(document).ready(function(){
  let displayStorage='';
  let num=''
  let inputs=[];
  let decimalCounter=0;
  let operArr=[];
  $('.clear-card').on('click',function(){
    num=''
    displayStorage='';
    inputs=[];
    operArr=[];
    decimalCounter=0;
    console.log(inputs)
    document.getElementById('display').innerHTML=""
    $('.card').removeAttr('disabled');
  })
  $('.card').on('click',function (){
    //$('#decimal').on('click',console.log("start"));
    num=$(this).text()

    console.log(num)
    //document.getElementById('display').innerHTML=num;
    $('#display').append(num);
    displayStorage=displayStorage+num;

    //console.log(displayStorage);


    if (num=='.'){
      decimalCounter++;
    }
    if (decimalCounter >1){
        document.getElementById('display').innerHTML="error";
        //$('#decimal').off('click',console.log("stop"));
        //document.getElementById('card').disabled=true;
        $('.card').attr('disabled', true);
        console.log('No more than two decimals places');
      }
      if ($('.card').attr('disabled')){
        console.log("STOPPP")
      }else if (num=='+' || num=='-'|| num=='*' || num=='/'){



      operArr.push(displayStorage[displayStorage.length-1]);
      inputs.push(parseFloat(displayStorage.slice(0,-1)))
      displayStorage=''
      decimalCounter=0;
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







})
})
