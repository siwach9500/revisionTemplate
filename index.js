document.querySelector("form").addEventListener("submit",myfunct);

var arrData= JSON.parse(localStorage.getItem("questData")) || [];

myDisplay(arrData);

// window.addEventListener("load",function (){
//     myDisplay(arrData);
// })

function myfunct(event){
    event.preventDefault();
    
    var dataobj = {
        questitle : document.querySelector("#title").value,
        qLink : document.querySelector("#link").value,
        level : document.querySelector("#difficulty").value,
    };

    arrData.push(dataobj);
    
    myDisplay(arrData);
    
    localStorage.setItem("questData",JSON.stringify(arrData));
    

}
    function myDisplay(arrData){
        document.querySelector("tbody").innerHTML="";
    arrData.forEach(function(elem){
        
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.questitle;
        var td2=document.createElement("td");
        td2.innerText=elem.qLink;
        var td3=document.createElement("td");
        td3.innerText=elem.level;
        var td4=document.createElement("td");
        if(elem.level=="Easy")
        td4.innerText="No";
        else
        td4.innerText="Yes";
        var td5=document.createElement("td");
        td5.innerText="DELETE";
        td5.style.color="red";

        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);
        
    })
}