function selectChanged(value) { // period selection
    switch(value) {
        case "1":
            getExchangePast();
            console.log(1);
            break;
        case "2":
            getExchangeNow();
            console.log(2);

        break;
    }
}

var arr = []; //array of exchange rates
function getExchangeNow(){  // getting the current course
    fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0') // query string
    .then(response => response.json()) 
    .then(response => {
        for(let i=0; i<response.length; i++)
        {
            arr.push({
                name: response[i].Cur_Abbreviation, //recording the name of the currency
                curs: response[i].Cur_OfficialRate / response[i].Cur_Scale // relation to one Belarusian ruble
            })
        }
        arr.push({
            name: "BYN",
            curs: 1
        })
        addList();
    })
    
    .catch(err => {
        console.log(err)
        alert("Нет подключения к интернету или исчезла ссылка")
    })
}

function getExchangePast(){ // getting a retro course
    fetch('https://www.nbrb.by/api/exrates/rates?ondate=2016-7-6&periodicity=0')
    .then(response => response.json())
    .then(response => {
        for(let i=0; i<response.length; i++)
        {
            arr.push({
                name: response[i].Cur_Abbreviation,
                curs: response[i].Cur_OfficialRate / response[i].Cur_Scale
            })
        }
        arr.push({
            name: "BYN",
            curs: 1
        })
        addList();
    })
    .catch(err => {
        console.log(err)
        alert("Нет подключения к интернету или исчезла ссылка")
    })
}


let val = document.getElementById('val'); // Getting the data entry element
let result = document.getElementsByClassName('convert_result')[0]; // We get the field where we will write the result
function summ() { // currency exchange rate calculation
    let currencyIn = 0;
    let currencyOut = 0;

    for(let i=0; i < arr.length; i++)
    {
        if(arr[i].name == document.getElementById('cur1').value)
            currencyIn = arr[i].curs;

            if(arr[i].name == document.getElementById('cur2').value)
            currencyOut = arr[i].curs;
    }
    let z = 0;
    if(currencyIn === currencyOut){ // If both values in the selectors are equal
        document.getElementById("result").value = val.value; // Then just enter the data from the input field
    } else {
        if(currencyIn != 'BYN'){ // If they are not equal to the ruble, then
            z = val.value*currencyIn; // We transfer the amount to rubles
            document.getElementById("result").value = Math.ceil((z/currencyOut)*100)/100; // Divide by the course and round to hundredths
        } else { // Если не равны
            document.getElementById("result").value = Math.ceil((val.value*currencyOut)*100)/100; // Multiply by the rate and round to hundredths
        }
    }
}
val.oninput = function () { // When entering data into the field, we call the function.
    summ();
};
document.getElementById('cur1').onchange = function () { //  When changing the first select, we call the function.
    summ();
};
document.getElementById('cur2').onchange = function () { // When changing the second select, we call the function.
    summ();
}

var str = "";
function  enterValueFromButton(buttonValue){ //data entry from the virtual keyboard
    if(buttonValue=="c") //when you click on the c button, we clear the field
    { 
        document.getElementById("val").value="";
        summ();  
    }
    else if(buttonValue=="del")//deleting one character
    { 
       str = document.getElementById("val").value;
       str = str.substring(0, str.length - 1);    
       document.getElementById("val").value = str; 
       summ(); 
    }
    else
    {
        str = document.getElementById("val").value += buttonValue;
        summ();
    }       
}

function addList(){ //adding a list of currencies
    var str = "";
    for(let i = 0; i < arr.length; i++)
    {
        str += "<option>" + arr[i].name + "</option>"  ;     
    }
    document.getElementById("cur1").innerHTML = document.getElementById("cur1").innerHTML + str;
    document.getElementById("cur2").innerHTML = document.getElementById("cur2").innerHTML + str;
}

//changing color styles
function changeThemeBlack(){ 
    document.getElementById("wrapper").style.backgroundColor = "#171818";
    document.getElementById("header").style.backgroundColor = "#000";
    document.getElementById("footer").style.backgroundColor = "#000";
    document.getElementById("converter").style.backgroundColor = "#171818";
}

function changeThemeGreen(){
    document.getElementById("wrapper").style.backgroundColor = "white";
    document.getElementById("header").style.backgroundColor = "yellowgreen";
    document.getElementById("footer").style.backgroundColor = "yellowgreen";
    document.getElementById("converter").style.backgroundColor = "yellowgreen";
}
    
function changeThemeGray(){
    document.getElementById("wrapper").style.backgroundColor = "#6F7472";
    document.getElementById("header").style.backgroundColor = "#414443";
    document.getElementById("footer").style.backgroundColor = "#414443";
    document.getElementById("converter").style.backgroundColor = "#414443";
}
    