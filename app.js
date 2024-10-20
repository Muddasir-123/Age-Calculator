const input=document.getElementById('birthday')
const btn=document.getElementById('btn')
const res=document.getElementById('result')
const name=document.getElementById('name')
function calculateAge(){
    const value=input.value;
    const nameValue=name.value;
    if(value===""){
        alert('Enter your age........')
    }else{
        const age=getAge(value)
        res.textContent=`${nameValue}-You are ${age} ${age>1?"years":"year"} old.`
        input.value=''
        name.value=''
    }
}
function getAge(val){
    const currentDate=new Date()
    const BirthdayDate=new Date(val)
    let age=currentDate.getFullYear()-BirthdayDate.getFullYear()
    const month=currentDate.getMonth()-BirthdayDate.getMonth()
    if(month<0 || (month===0 && currentDate.getDate()<BirthdayDate.getDate())){
        age--
    }else{
        return age
    }
}
btn.addEventListener('click',calculateAge)