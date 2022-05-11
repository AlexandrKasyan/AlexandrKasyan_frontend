let defaultURL = Function;
let update = updateDataEvent(3000);
(() => {
    setTimeout(() => {
        getFile('area[1].json', 'area1')
    }, 1000)
    setTimeout(() => {
        getFile('area[2].json', 'area2')
    }, 2000)
    setTimeout(() => {
        getFile('area[3].json', 'area3')
    }, 3000)
    defaultURL = createURL('localhost:3000')
})()

update(1000, 'area[1].json', 'area1')
update(2000, 'area[2].json', 'area2')
update(3000, 'area[3].json', 'area3')



document.forms["editForm"].addEventListener("submit", e => {
    e.preventDefault();
    addEventToJsonFile();
    document.getElementById('status').appendChild(createLog("Успешно!", 'orange'))
})

document.querySelector("select").addEventListener('change', async function (e) {
    const json = await getJson(e.target.value);
    const data = JSON.parse(json.events[0]);
    document.getElementById('ed-btn').style.display = "block";
    document.forms["editForm"].elements["date"].value = data['date'];
    document.forms["editForm"].elements["time"].value = data['time'];
    document.forms["editForm"].elements["name"].value = data['name'];
    document.forms["editForm"].elements["degree"].value = data['priority'];
    document.forms["editForm"].elements["desc"].value = data['description'];
})


function createLog(msg, color){
    let rootEl = document.createElement('div')
    rootEl.innerHTML = msg
    rootEl.style.color = color
    return rootEl
}

function createURL(hostname){
    return function(pathname){
        return `http://${hostname}/${pathname}`
    }
}

function createEvent(){
    return {
        'name' : document.getElementById('ed-name').value.toString(),
        'date' : document.getElementById('ed-date').value.toString(),
        'time' : document.getElementById('ed-time').value.toString(),
        'priority' : document.getElementById('ed-degree').value.toString(),
        'description' : document.getElementById('ed-description').value.toString(),
    }
}

async function getJson(fileName) {
    let url = new URL(defaultURL('getData'))
    let result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          'fileName' : fileName
      }),
      headers: {
          'Content-Type' : 'application/json'
      }
    })
    return await result.json();
}


function addEventToJsonFile(){
    let event = createEvent()
  
    let fileName = document.getElementById('file-ed').value.toString()
    const url = new URL(defaultURL(`files`))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'event' : event,
            'fileName' : fileName
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
  }


  function updateDataEvent(interval){
    return function(timeout, fileName, contentId){
        setTimeout(() => {
            setInterval(() => {
                getFile(fileName, contentId)
                document.getElementById('status').appendChild(createLog(`Данные из файла "${fileName}" успешно обновлены!`, 'yellow'))
            }, interval)
        }, timeout)
    }
}

function getFile(fileName, divName){
    let url = new URL(defaultURL('getData'))
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'fileName' : fileName
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        var node = document.getElementById(divName);
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        if (response.events){
            response.events.forEach(element => {
                let rootEl = document.createElement('div')
                rootEl.innerHTML = element
                document.getElementById(divName).appendChild(rootEl)
            });
        }
        else{
            let rootEl = document.createElement('div')
            rootEl.innerHTML = response.events
            document.getElementById(divName).appendChild(rootEl)
        }
        document.getElementById('status').appendChild(createLog(response.msg, '#32CD32'))
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
  }