
function displayData(Data,parent,)
{
    let x="daily"
    parent.innerText=""
    Data.map((ele)=>{
        console.log(x)
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.img;
        let tag=document.createElement("div");
        tag.innerText=ele.count+"left";
        tag.setAttribute("class","tag_div");
        let combine=document.createElement("div")
        combine.append(image,tag)
        combine.setAttribute("class","img_div")
        let name=document.createElement("h4");
        name.innerText=`${ele.comp_name} ${ele.name}`;
        let combine1=document.createElement("div");
        let range=document.createElement("span");
        range.innerText=ele.range;
        let excess=document.createElement("span");
        excess.innerText=ele.excess;
        combine1.append(range,excess);
        combine1.setAttribute("class","km_div");
        let combine2=document.createElement("div");
        combine2.setAttribute("class","end_div");
        let price=document.createElement("span");
        price.innerText=`RS ${ele[x]}`;
        let btn=document.createElement("button");
        btn.innerText="BOOK NOW";
        btn.addEventListener("click",()=>{
            let arr=[]
            arr.push(ele)
            localStorage.setItem("cart_Data",JSON.stringify(arr));
        })
        combine2.append(price,btn);
        div.append(combine,name,combine1,combine2);
        parent.append(div);
    })
}


export default displayData;