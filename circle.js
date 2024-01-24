
function bar(a,b){

let one=document.querySelector(a);


let start=0;
let end=b;

speed=10;

const progress=setInterval(()=>
{
    start++;

    one.innerHTML=`${start}%`;


    if(start===end)
    {
        clearInterval(progress);
    }
},speed)

}

bar("#one",80);
bar("#two",70);
bar("#three",90);
bar("#four",70);
