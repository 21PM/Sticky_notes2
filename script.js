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
        <span class="material-symbols-outlined" id="save-btn" style="display: none" >
        task_alt
        </span>
        <h2 class="title-bg-color">${title_text.value}</h2>
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

            if(e.target.id === "edit"){
                const editIcon = e.target.id;
                console.log(e.firstChild.id);
                

            }
        })


        // edit_icon.addEventListener('click',()=>{
        //     new_text_area.disabled = false;
        //     save_btn.style.display = "block";
        //     edit_icon.style.display = "none";

        //     save_btn.addEventListener('click',()=>{
        //         save_btn.style.display = "none";
        //     edit_icon.style.display = "block";
        //     new_text_area.disabled = true;


        //     })
            
        // })

    


})