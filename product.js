import displayData from "./appendData.js";
import DetailData from"./bikedata.js";
import placesData from "./PlacesData.js";
placesData();
DetailData();
let parent=document.getElementById("product_container");
let Data=JSON.parse(localStorage.getItem("product_Data"));
console.log(Data)
displayData(Data,parent,true)
let elements=document.getElementsByClassName("checked_value");
console.log(elements)
// adding event listern on all input div in filter div
for (let i=0;i<elements.length;i++)
{
    elements[i].addEventListener("click",filterfunction);
}
import filter_data from "./filter.js";

let count=0;
function filterfunction()
{ count++;
    let flag;
    if (count==1)
         flag=true;
    else
    flag==false;
    let filter_value;
    for (let i=0;i<elements.length;i++)
    {
         if(elements[i].checked)
         filter_value=elements[i].value;
    }
    let res=filter_data(Data,filter_value);
    console.log(res);
    displayData(res,parent,flag)
}

//appending the places data on bootstrap modal div.
let Places_Data=JSON.parse(localStorage.getItem("Places_Data"));
console.log(Places_Data);
let model_div=document.getElementById("modal_div");
modelData(Places_Data,model_div)
function modelData(Places_Data,model_div)
{
    let selected_city=Places_Data.filter((ele)=>{
        return ele.city=="BANGALURU"
    })
    console.log(selected_city)
   for (let i=1;i<=5;i++) 
   {
       console.log(selected_city[0][`stop${i}`]);
    let div=document.createElement("div");
    let name=document.createElement("h4");
    name.innerText=selected_city[0][`stop${i}`];
    let timing=document.createElement("h6");
    timing.innerText='Station timing : 9 AM - 9 PM'
    let landmark=document.createElement("h5");
    landmark.innerText=selected_city[0][`stop${i}_landmark`];
    let button=document.createElement("button");
    button.innerText="Aavaliable 5";
        button.addEventListener("click",()=>{
           window.location.href="./cart.html";
        })
    div.append(name,timing,landmark,button);
    model_div.append(div);
   }
}