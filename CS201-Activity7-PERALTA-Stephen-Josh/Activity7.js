var passwordInput = prompt("Enter your password: ")
const password = "p@ssw0rd@2023";

if(passwordInput.length>= 8 || passwordInput.includes("p@ssw0rd@2023")){
    console.log("Valid password");
}
else{
    console.log("Invalid password");
}