let model={}
function appendModel(a,b,c){
    let count=1
    while (model[count]){
        count=count+1
    }
    model[count]={
        "name":a,
        "class":b,
        "subject":c
    }
}
function controlData(appendModel){
    let name=String(document.getElementById("_name").value)
    let _class= String(document.getElementById("_class").value)
    let subject=String(document.getElementById("_subject").value)
    appendModel(name,_class,subject)
}
function createHTML(){
    let newRow=document.createElement("tr")
    let newColumn1=document.createElement("td")
    newColumn1.textContent=String(document.getElementById("_name").value)
    let newColumn2=document.createElement("td")
    newColumn2.textContent=String(document.getElementById("_class").value)
    let newColumn3=document.createElement("td")
    newColumn3.textContent=String(document.getElementById("_subject").value)
    newRow.appendChild(newColumn1)
    newRow.appendChild(newColumn2)
    newRow.appendChild(newColumn3)
    document.getElementsByClassName("data_records_")[0].appendChild(newRow)
}
document.getElementById("_submit").addEventListener("click",(e)=>{
    e.preventDefault()
    controlData(appendModel)
    createHTML()
})
document.getElementById("_decision").addEventListener("click",()=>{
    fetch("http://localhost:3000",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(model)
    })
    console.log(model)
})

