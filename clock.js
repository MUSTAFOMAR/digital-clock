const hourEL = document.getElementById('hour');
const minuteEL = document.getElementById('minute');
const secondEL = document.getElementById('second');
const ampmEL = document.getElementById('ampm');


function finishClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h >12){
    h = h-12;
    ampm = 'pm';
    }
  h = h<10 ? "0"+h :h;
  m = m<10 ? "0"+m :m;
  s = s<10 ? "0"+s :s;
    ampmEL .innerText= ampm
    hourEL .innerText =h;
    minuteEL .innerText= m;
    secondEL .innerText= s; 
    setTimeout(()=>{
        finishClock()
    },1000)
 
    
}
finishClock()