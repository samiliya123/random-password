const btnEl =  document.querySelector(".btn");
const inputEl = document.getElementById("input");
 const copyEl = document.querySelector(".far");
 const aletEl = document.querySelector(".alert-container")

 
 
btnEl.addEventListener("click", ()=>{
    createPassword()
})

copyEl.addEventListener("click", ()=>{
   copyPassword()

   if (inputEl.value) {
    aletEl.classList.remove("active");
    setTimeout(()=> {aletEl.classList.add("active")}, 2000)
   }
    
})

function createPassword(){

    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 10;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const  randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
 
        
    }

    inputEl.value = password;

    aletEl.innerText = password + " Copied!";

}

function copyPassword() {
    inputEl.select();
    //for mobile
    inputEl.setSelectionRange(0, 9999)

    navigator.clipboard.writeText(inputEl.value);
}