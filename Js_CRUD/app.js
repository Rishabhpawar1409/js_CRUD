const addValue = document.getElementById("btnAdd");
const tbody = document.getElementById("data");

var counter = 0;

function ADDdata(){
    const Name = document.getElementById("nameInput").value.charAt(0).toUpperCase() + document.getElementById("nameInput").value.slice(1).toLowerCase();
    if(Name == ""){
        alert("Name must be filled out");
        return false;
    }

    const Subject = document.getElementById("subjectInput").value.charAt(0).toUpperCase() + document.getElementById("subjectInput").value.slice(1).toLowerCase();
    if(Subject == ""){
        alert("Language/Framework must be filled out");
        return false;
    }

    tbody.innerHTML += `
        <tr>
           <td>${counter+=1}</td>
           <td>${Name}</td>
           <td>${Subject}</td>
           <td><button id = "editBtn" onclick = "onEdit(this);">Edit</button> <button id ="del" onclick = "deleteRow(this);" >Delete</button></td>
        </tr>
    `;
}

addValue.addEventListener("click" , ADDdata);



function onEdit(td){
    selectedRow = td.parentNode.parentNode;
    document.getElementById("nameInput").value = selectedRow.cells[1].innerHTML;
    document.getElementById("subjectInput").value = selectedRow.cells[2].innerHTML;
}

function deleteRow(td){
    var del = td.parentNode.parentNode;
    del.parentNode.removeChild(del);
    alert("Are you sure you want to delete this item?");

    setTimeout(() => {
        alert("Deleted!!");
    },500);
}

const resetValue = document.getElementById("btnReset");

resetValue.addEventListener("click" , function(){
    document.getElementById("nameInput").value = ''
    document.getElementById("subjectInput").value = ''
})



