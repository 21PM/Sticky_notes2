var title_text =  document.getElementById("title");

var Notes_text =  document.getElementById("text");

var Selectcolor = document.getElementById("text-color");

var addbtn = document.getElementById('addbutton');

var right_div = document.getElementById("right-div");



Selectcolor.addEventListener('change',()=>{
    Notes_text.style.backgroundColor = Selectcolor.value;
})

addbtn.addEventListener('click', ()=>{
  
    var NewDiv = document.createElement('div');

    NewDiv.classList.add("addedNotes")


        NewDiv.innerHTML = 
        `<span class="material-symbols-outlined" id="close">
        close
        </span>
        <span class="material-symbols-outlined" id="edit">
            edit
        </span>
        <span class="material-symbols-outlined  yellow-icon" id="save-btn" style="display: none" >
        task_alt
        </span>
        <h2 class="title-bg-color" style="text-align: center;">${title_text.value}</h2>
        <textarea cols=
        "30" rows="11" disabled placeholder="Enter your Notes" id="text_area">${Notes_text.value}</textarea>
        
        `
        NewDiv.style.backgroundColor =   Selectcolor.value;
        

        right_div.append(NewDiv);


        var new_text_area = document.getElementById("text_area");
        var edit_icon = document.getElementById("edit");
        var close_icon = document.getElementById("close");
        var save_btn = document.getElementById("save-btn");

        NewDiv.addEventListener('click',(e)=>{
            console.log(e);

            if(e.target.id === "close"){
                const closeIcon = e.target.id;
                NewDiv.remove();

            }
            else if (e.target.id === "edit"){

                let edit_text = NewDiv.lastChild.previousSibling;
                edit_text.disabled = false;
                let save_BTN =  edit_text.parentElement.lastElementChild.previousElementSibling.previousElementSibling;
                save_BTN.style.display = "block";
                let edit_BTN =  save_BTN.previousElementSibling;
                edit_BTN.style.display = "none";

                
                save_BTN.addEventListener('click',()=>{
                    save_BTN.style.display = "none";
                    edit_BTN.style.display = "block";
                    edit_text.disabled = true;
                })
                

                
            }
        })


})


