import displayData from "./appendData.js";
import DetailData from"./bikedata.js";
DetailData();
let parent=document.getElementById("product_container");
let Data=JSON.parse(localStorage.getItem("product_Data"));
console.log(Data)
displayData(Data,parent,true)
let elements=document.getElementsByClassName("checked_value");
console.log(elements)
let arr=[];
for (let i=0;i<elements.length;i++)
{
    elements[i].addEventListener("click",function ()
    {
        filterfunction(element[i].value);
    });
}
import filter_data from "./filter.js";
let count=0;
function filterfunction(index)
{ count++;
    console.log(index);
    console.log(count)
    let flag;
    
    if (count==1&&)
    {
         flag=true;
    }
    else
    flag=false;
    let filter_value;
    for (let i=0;i<elements.length;i++)
    {
         if(elements[i].checked)
         filter_value=elements[i].value;
    }
    console.log(filter_value);
    console.log(1);
    let res=filter_data(Data,filter_value);
    console.log(res);
    displayData(res,parent,flag)
}








let arr1=[]
let arr=[1,2,2,3,4,5,9]
console.log(arr[i])
arr1.push(arr[index])