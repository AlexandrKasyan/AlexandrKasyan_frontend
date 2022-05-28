const numberOfRowsDisplayed = 4; //the number of rows displayed in the table
let memoryPage = 0;

//Getting the length of the list of students to form a page-by-page navigation
function getCountStudentList() {
    fetch('/getCount',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        pagination(response);
    })
}

function getFile(idStart, count) {//Getting a list of students
    memoryPage = idStart;
    fetch('/getInfo',{
        method: 'POST',
        body: JSON.stringify({
            'idStart' : idStart,
            "count" : count
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        const row = document.getElementById('row');
        row.innerHTML ="";
        
        if(response.students[0] == null && memoryPage >= 0) {
            getFile(memoryPage - numberOfRowsDisplayed, numberOfRowsDisplayed)
            createTable(response.students, row); 
        }
        else if(response.students[0] == null && memoryPage <= 0) {
            alert("File empty");
        }
        else{
            createTable(response.students, row); 
        }
    })
}

function deleteByid(id){//deleting by id
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
        getFile(memoryPage, numberOfRowsDisplayed);
        getCountStudentList();
    })
    .catch(err => {
        console.log(err);
    })
}
  
function edit(){//Changing Student Information
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
        getFile(memoryPage, numberOfRowsDisplayed);

    })
    .catch(err => {
        console.log(err);
    })
}

function addStudent(){//Adding a new student
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
        getFile(memoryPage, numberOfRowsDisplayed);
    })
    .catch(err => {
        console.log(err);
    })
}

function pagination(response) {//implementation of navigation buttons
    document.getElementById("paginationButton").innerHTML= ''; 
    let count = response.count;
    let paginationButton = document.getElementById("paginationButton");
    let page = 1;
    for (let i = 0; i < count; i = i + numberOfRowsDisplayed) {
        let button = document.createElement("button");
        button.setAttribute("onclick", `getFile(${i},${numberOfRowsDisplayed})`);
        button.innerHTML = page;
        page += 1;
        paginationButton.appendChild(button);
    }
}

function createTable(students, row) {//drawing a list of students
    let listStudent = "";
    for (let i = 0; i < students.length; i++) {
        if (students[i] != null) {
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

function readFormData(){//reading the entered information about the student
    let studentData = {};
    studentData["id"] = document.getElementById("id").value;
    studentData["firstName"] = document.getElementById("firstName").value;
    studentData["secondName"] = document.getElementById("secondName").value;
    studentData["age"] = document.getElementById("age").value;
    return studentData;
}

function chooseStudent(id, firstName, secondName, age) {//Inserting the entered information about students into the form
    document.getElementById("id").value = id;
    document.getElementById("firstName").value = firstName;
    document.getElementById("secondName").value = secondName;
    document.getElementById("age").value = age;
}

getCountStudentList();