const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clear_btn = document.getElementById('clear');
let exp;
buttons.forEach(btn=>{
    btn.addEventListener("click", (e) => {
        btn.classList.add('active');
        setTimeout(()=>{
            btn.classList.remove('active');
        },100)
        if(e.target.innerHTML=='C')
        {
            display.value="";
        }
        else if(e.target.innerHTML=='='){
            display.value=eval(exp);
        }
        else if(e.target.innerHTML=='DEL'){
            if(display.value!=''){
                display.value=display.value.slice(0,-1);
            }
            
        }
        else{
            exp = display.value+=e.target.innerHTML;
        }
    })
})