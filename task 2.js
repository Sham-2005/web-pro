// alert("Welcome to the Skill Test!");
document.getElementById("b").addEventListener( 'submit', function(event){
    event.preventDefault();
    let n=document.getElementById("n"),e=document.getElementById("e"),m=document.getElementById("m");
    let sn=document.getElementById("sn"),se=document.getElementById("se"),sm=document.getElementById("sm");
    let a=/^[a-zA-Z0-9]+@[a-z]{4,}\.[a-z]{2,}$/,q=true;
    if(n.value ===""){
        sn.innerText="Name is reqired";
        q=false;
    }
    else{
        sn.innerText="";
    }
    if(e.value===""){
        se.innerText="Email is reqired";
        q=false;
    }
    else if(!a.test(e.value)){
        se.innerText="Enter a Valid Email";
        q=false;
    }
    else{
        se.innerText="";
    }
    if(m.value ===""){
        sm.innerText="Message is reired";
        q=false;
    }
    else if(!/^[a-zA-Z0-9]{10,}$/.test(m.value)){
        sm.innerText="Minimum 10 words reqired";
        q=false;
    }
    else{
        sm.innerText="";
    }
    if(q){
        document.getElementById("h2").innerText="The Details have been Submitted Succesfully."
        n.value=e.value=m.value="";
    }
});
document.getElementById("s").addEventListener("submit",function(e){
    e.preventDefault();
    let n=document.getElementById("N"),a=document.getElementById("A"),s=document.getElementById("S");
    let sn=document.getElementById("SN"),sa=document.getElementById("SA"),ss=document.getElementById("SS");
    let q=true;
    if(n.value ===""){
        sn.innerText="Name is reqired";
        q=false;
    }
    else{
        sn.innerText="";
    }
    if(a.value===""){
        sa.innerText="Age is reqired";
        q=false;
    }
    else{
        sa.innerText="";
    }
    if(s.value===""){
        ss.innerText="Skill is reqired";
        q=false;
    }
    else{
        ss.innerText="";
    }
    if(q){
        let tr=document.createElement("tr");
        tr.innerHTML=`<td>${n.value}</td><td>${a.value}</td><td>${s.value}</td>`;
        document.getElementById("tbody").append(tr);
        let v=document.getElementById("v");
        v.innerText=parseInt(v.innerText)+1;
        n.value=a.value=s.value="";
    }
});
var m="black";
function mode(){
    document.body.style.backgroundColor=m;
   let n=document.getElementById("Mode");
    if(m=="black"){
        m="antiquewhite";
        n.style.color="red";
    }
    else{
        m="black";
        n.style.color="aqua";
    }
    n.style.backgroundColor=m;
    document.body.style.color=m;
}