function getFile() {
    fetch('/getInfo',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        const row = document.getElementById('row');
        row.innerHTML ="";
        if (!response.students){
            
            const div = document.createElement('div')
            div.innerText = 'Файл пустой'
            div.style.textAlign = "center"
            row.appendChild(div)
        }
        else{
            const students = JSON.parse(response.students)
            let listStudent = "";
            for(let i = 0; i < students.length; i++){
                if(students[i]!=null){
                   listStudent += `
                   <tr>
                    <td>${students[i].id}</td>
                    <td>${students[i].firstName}</td>
                    <td>${students[i].secondName}</td>
                    <td>${students[i].age}</td>
                    <td>
                        <button onclick="deleteByid(${students[i].id})">Delete</button>
                        <button onclick="chooseStudent(${students[i].id}, '${students[i].firstName}', '${students[i].secondName}', ${students[i].age})">Choose</button>
                    </td>
                    
                   </tr>`;                   
                }
            }
            row.innerHTML = listStudent;
        }

    })
}


    

function deleteByid(id){
    fetch('http://localhost:3000/delete', {
        method: 'POST',
        body: JSON.stringify({
            'id' : id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        getFile();
    })
    .catch(err => {
        console.log(err);
    })
}

function readFormData(){
    let studentData = {};
    studentData["id"] = document.getElementById("id").value;
    studentData["firstName"] = document.getElementById("firstName").value;
    studentData["secondName"] = document.getElementById("secondName").value;
    studentData["age"] = document.getElementById("age").value;
    return studentData;
}

function chooseStudent(id, firstName, secondName, age) {
    document.getElementById("id").value = id;
    document.getElementById("firstName").value = firstName;
    document.getElementById("secondName").value = secondName;
    document.getElementById("age").value = age;
}

function addStudent(){
    let data = readFormData();
    fetch('http://localhost:3000/add', {
        method: 'POST',
        body: JSON.stringify({
            'firstName' : data["firstName"],
            'secondName' : data["secondName"],
            'age' : data["age"]

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        getFile();
    })
    .catch(err => {
        console.log(err);
    })
}

function edit(){
    let data = readFormData();
    fetch('http://localhost:3000/edit', {
        method: 'POST',
        body: JSON.stringify({
            'id' : data["id"],
            'firstName' : data["firstName"],
            'secondName' : data["secondName"],
            'age' : data["age"]

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        getFile();
    })
    .catch(err => {
        console.log(err);
    })
}