function getXml() {
    let xhr = new XMLHttpRequest(); // initialize the newly created query
    xhr.open("GET", "schedule.xml"); // define parameters for the request 

    xhr.responseType = "document"; //if specified, the data type must be the empty string, or "document"
    xhr.overrideMimeType("text/xml"); // override the MIME type and force parse the response returned by the server in XML format

    xhr.onload = function () { // add an event handler
        let array = xhr.responseXML;
        xmlRoot = array.documentElement;
        let name = Array.from(xmlRoot.getElementsByTagName("name"));//array with ship name
        let arrival = Array.from(xmlRoot.getElementsByTagName("arrival"));//arrival time array 
        let departure = Array.from(xmlRoot.getElementsByTagName("departure"));// array with departure time

        var str = "";
        for (let i = 0; i < name.length; i++) {

            str += "<tr><td>" + name[i].textContent + "</td><td>" + departure[i].textContent + "</td><td>" + arrival[i].textContent + "</td></tr>"
        }
        document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + str;
    };

    xhr.send();
}

getXml();