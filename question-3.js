// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
    if (userPassword.length < 6) {
        return "Weak"
    } else if (userPassword.length < 10) {
        return "Medium"
    } else {
        return "Strong"
    }
}

userPassword = "swnalWadqQ"
console.log(checkPasswordStrength(userPassword));

userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword)); 

userPassword = "abcde"
console.log(checkPasswordStrength(userPassword)); 

