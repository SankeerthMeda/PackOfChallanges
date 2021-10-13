//challenge 1 age
function ageInDays(){

    var birthYear=prompt('What Year were you born... ')
    var ageInDayss=(2021-birthYear)*365;
    var h1=document.createElement('h1');
    // result=document.querySelector('.flex-box-result');
    // result.innerHTML=ageInDayss;
    document.getElementById('flex-box-result').innerHTML="<h1>Your age in days is:</h1>"+"<h1>"+ageInDayss+"</h1>";
}
function resett(){
    document.getElementById('flex-box-result').innerHTML="";
}
//cat generator
function generateCat(){
    var image=document.createElement('img');
    div=document.getElementById('flex-cat-gen');
    image.src="https://placekitten.com/g/200/200";
    div.appendChild(image);
}
//color color button

var copyAll=[];
var but=document.getElementsByTagName('button');
// console.log(but);
for( let i=0;i<but.length;i++){
    copyAll.push(but[i].classList[1]);
}
console.log(copyAll)
function buttonColorChange(typo){
    // console.log(typo.value)
    if(typo.value==="green"){
        for(let i=0;i<but.length;i++){
            but[i].classList.remove(but[i].classList[1]);
            but[i].classList.add("btn-success")
        }
    }
    else if(typo.value==="red"){
        for(let i=0;i<but.length;i++){
            but[i].classList.remove(but[i].classList[1]);
            but[i].classList.add("btn-danger")
        }
    }
    else if(typo.value==="reset"){
        for(let i=0;i<but.length;i++){
            but[i].classList.remove(but[i].classList[1]);
            but[i].classList.add(copyAll[i]);
        }
    }
    else{
        var randoms=["btn-primary","btn-success","btn-danger","btn-warning"];
        for(let i=0;i<but.length;i++){
            var sel=Math.floor(Math.random()*4);
            but[i].classList.remove(but[i].classList[1]);
            but[i].classList.add(randoms[sel]);
        }
    }
}