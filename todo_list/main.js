document.querySelector('#add').onclick = function(){
    if(document.querySelector('#input-container input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#input-container input').value}
                </span>
                <button class="delete">
                    <ion-icon name="trash-outline" class="trash"></ion-icon>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    document.querySelector('#input-container input').value="";
}