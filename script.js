// alert('hello');
const btn_one = document.getElementById('btn-1');
const btn_two = document.getElementById('btn-2');
const btn_three = document.getElementById('btn-3');
const btn_four = document.getElementById('btn-4');
const btn_five = document.getElementById('btn-5');
const form = document.querySelector('form');
const invalid = document.querySelector('.galat');
let value;
btn_one.onclick=()=>{
    value=1;
    btn_one.style.backgroundColor="hsl(216, 12%, 54%)";
    btn_one.style.color="#fff";
    //alert(value);
    return value;

}
btn_two.onclick=()=>{
    value=2;
    btn_two.style.backgroundColor="hsl(216, 12%, 54%)";
    btn_two.style.color="#fff";
    //alert(value);
    return value;
}
btn_three.onclick=()=>{
    value=3;
    btn_three.style.backgroundColor="hsl(216, 12%, 54%)";
    btn_three.style.color="#fff";
    //alert(value);
    return value;
}
btn_four.onclick=()=>{
    value=4;
    btn_four.style.backgroundColor="hsl(216, 12%, 54%)";
    btn_four.style.color="#fff";
    //alert(value);
    return value;
}
btn_five.onclick=()=>{
    value=5;
    btn_five.style.backgroundColor="hsl(216, 12%, 54%)";
    btn_five.style.color="#fff";
   // alert(value);
    //return value;
}

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    if(value==undefined){
        invalid.classList.add('error');
    }
    else{
        invalid.classList.remove('error');
         //alert(value);
    console.log(value);
    localStorage.setItem('message',value);
    window.location.assign('thank.html');
    document.getElementById('msg').innerHTML=`<p>you have selected ${value} out of five</p>`;
    alert(value);
//    alert(value);
//    console.log(value);

    }
   
})