$(document).ready(function(){
  let displayStorage=[];
  let num=''
  $('.card').on('click',function(){

    num=$(this).text()
    console.log(num)
    document.getElementById('display').innerHTML=num;
    displayStorage.push(num);
    console.log(displayStorage);
  })


})


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
