function getAndUpdate() {
    tit = document.getElementById('title').value;
    desc = document.getElementById('descrption').value;
    if(tit !== ""){
        if(localStorage.getItem('itemJson') == null){
            itemJsonArray = [];
            itemJsonArray.push([tit, desc]);
            localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
        }else{
            itemJsonArraystr = localStorage.getItem('itemJson');
            itemJsonArray = JSON.parse(itemJsonArraystr);
            itemJsonArray.push([tit, desc]);
            localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
        }
        update();
    }
    else{
        alert("Error... !");
    }
}

function update(){
        if(localStorage.getItem('itemJson') == null){
            itemJsonArray = [];
            localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
        }
        else{
            itemJsonArraystr = localStorage.getItem('itemJson');
            itemJsonArray = JSON.parse(itemJsonArraystr);
        }
        // Display the list 
        let tablebody = document.getElementById('tableBody');
        let str = '';
        itemJsonArray.forEach((element, index) => {
            str += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
        });
    tablebody.innerHTML = str;   
}

function deleted(item) {
    console.log("delete", item);
    itemJsonArraystr = localStorage.getItem('itemJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);

    itemJsonArray.splice(item, 1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    update();
}
add = document.getElementById('add');
add.addEventListener('click', getAndUpdate);
update();


// Dyanminc Year Update 

document.addEventListener("DOMContentLoaded", function(){
    const yeDom = document.getElementById('yeDom');
    const year = new Date().getFullYear();
    yeDom.innerHTML = year;
});