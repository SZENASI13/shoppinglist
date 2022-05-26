adatok=[
    {id:1,
    nev:"alma",
    mennyiseg:"2kg"},
    {id:2,
    nev:"rozskenyér",
    mennyiseg:"negyed"},
    {id:3,
    nev:"joghurt",
    mennyiseg:"2 darab"},
    {id:4,
    nev:"sajt",
    mennyiseg:"300g"},
]
 function render(){
    for(let obj of adatok){
        document.querySelector('.lista').innerHTML+=`
        <div class="d-flex justify-space-between termekek rounded">
        <div>
            ${obj.nev} - ${obj.mennyiseg}
        </div>
        <div class="ml-auto">
            <span><i id="${obj.id}" class="fa-solid fa-circle-xmark" onclick="torles(this)"></i></span>
        </div>
    </div>`
     
       }
 }

 render()
function hozzaad(){
    let termek = document.querySelector('#termek').value
    let mennyiseg = document.querySelector('#mennyiseg').value
    let maxId=adatok.reduce((m,obj)=>obj.id>m?obj.id:m,0)
    console.log(maxId)
    let obj = {}
    obj.id = maxId
    obj.nev = termek
    obj.mennyiseg = mennyiseg
    adatok.push(obj)


    document.querySelector('.lista').innerHTML=''
    render()

    
   
}

function torles(obj){
    console.log(obj.id)
    let id=obj.id
    let newArr =adatok.filter(obj=>obj.id!=id)
    adatok=newArr
    document.querySelector('.lista').innerHTML=''
    render()

}
 

 
function osszes(){
    document.querySelector('.lista').innerHTML=""
    adatok=[]
}
