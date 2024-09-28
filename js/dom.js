import { api } from "./api.js";

let div = document.querySelector(".div")

export function get(data) {
    div.innerHTML = "";
    data.forEach((e) => {
        let box = document.createElement("div")
        box.classList.add("box")

        let name = document.createElement("h3")
        name.innerHTML = e.name.common
        console.log(name);
        
        let flags= document.createElement("img")
        flags.src = e.flags.png
        flags.classList.add("flags")
        flags.style.height = "100px"
        flags.style.width = "200px"

        let region = document.createElement("p")
        region.innerHTML = "Region : " + e.region

        let capital = document.createElement("p")
        capital.innerHTML = "Capital : " + e.capital

        let popelation = document.createElement("p")
        popelation.innerHTML = "Population : " + e.population 
        popelation.classList.add("popelation")

        let googleMaps = document.createElement("a")
        googleMaps.href =  e.maps.googleMaps
        googleMaps.innerHTML = "Learn More"
        googleMaps.target = "_blank"
        googleMaps.classList.add("googleMaps")

        box.append(flags,name,region,capital,popelation,googleMaps)
        div.append(box)
    });
}


// Search
let search = document.querySelector(".searchByCommon")
search.oninput=()=>{
    let input=search.value.toLowerCase();
    let boxes=document.querySelectorAll('.box');
    boxes.forEach((e)=>{
        let name=e.querySelector('h3').innerHTML.toLowerCase();
        if(name.includes(input)){
            e.style.display='block';
        }else{
            e.style.display='none';
        }
    })
}

// Dark Mode 

let dark = document.querySelector('.dark');
let nav = document.querySelector(".nav");

dark.onclick = () => {
    if (dark.checked){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        nav.style.backgroundColor = "black"; 
    }
    else {
        document.body.style.backgroundColor = "white"; 
        document.body.style.color = "black";
        nav.style.backgroundColor = "white"; 
    }
}

// Select 

let select = document.querySelector(".selectByMaterik")
select.onchange=()=>{
    let region=select.value;
    let boxes=document.querySelectorAll('.box');
    boxes.forEach((e)=>{
        let region1=e.querySelector('p').innerHTML.toLowerCase();
        if(region1.includes(region)){
            e.style.display='block';
        }else{
            e.style.display='none';
        }
        })
    }