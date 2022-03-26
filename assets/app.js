// search tex and load api ;
const searchBtn = document.getElementById("search-button");
let searchText = document.getElementById("searche-text");

searchBtn.addEventListener("click",function() {
    let searchValue = searchText.value;
    city = searchValue.toLowerCase();
    searchText.value = "";
    const API_KEY = "68bf0c5bd9cf8613c27f084632a5ffab";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => display(data));
    searchText.setAttribute("placeholder","Enter a location for Weather ...") 
});

// common function 
const setInnerTex = (id,value) => {
    document.getElementById(id).innerText = value;
}
// icon load by id 
const setIcon = (icon) =>{
    url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById("iconImg").setAttribute("src",url);
}
// set dynamic value 
const display = (data) => {
    setIcon(data.weather[0].icon);
    setInnerTex("city-name",data.name);
    setInnerTex("temp",data.main.temp);
    setInnerTex("cl",data.weather[0].main);
}

// onfocus input field clear 
searchText.addEventListener("focusin",() => { 
    searchText.setAttribute("placeholder","") ;
});
