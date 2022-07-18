const percent=document.getElementById('percent');
var percentvalue=0;
setInterval(()=>{
    if(percentvalue==100){
        clearInterval();
    }
    else{

            percentvalue+=1;
            percent.textContent=percentvalue + '%';

    }


}, 80);
