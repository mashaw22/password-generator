const characterArray = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","'",",",">",".","?","/"]

const charInput = document.getElementById("char-input")
function getCharInputValue() {
    charInput.addEventListener("input", function() {
        return charInput.value
    })
}

const generateBtn = document.getElementById("generate-btn")

const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const password3 = document.getElementById("password3")
const password4 = document.getElementById("password4")

generateBtn.addEventListener("click", function() {
    generatePasswordHtml()
    createCopyBtns()
})

function generatePassword() {
    getCharInputValue()
    console.log(charInput.value)
    if(charInput.value > 0) {
        const password = []
        for(let i = 0; i < charInput.value; i++){
            password.push(characterArray[Math.floor(Math.random()*characterArray.length)])
    }
        return password.join("")
    } else {
        const password = []
        for(let i = 0; i < 8; i++){
            password.push(characterArray[Math.floor(Math.random()*characterArray.length)])
    }
        return password.join("")
    }
}

function generatePasswordHtml() {
    const passwordsArray = []
    for(let i = 0; i < 4; i++){
        passwordsArray.push(generatePassword())
    }
    password1.classList.remove("password")
    password2.classList.remove("password")
    password3.classList.remove("password")
    password4.classList.remove("password")

    password1.innerHTML = `
        <input id="input1" class="password" type="text" value="${passwordsArray[0]}">
    `
    password2.innerHTML = `
        <input id="input2" class="password" type="text" value="${passwordsArray[1]}">
`
    password3.innerHTML = `
        <input id="input3" class="password" type="text" value="${passwordsArray[2]}">
`
    password4.innerHTML = `
        <input id="input4" class="password" type="text" value="${passwordsArray[3]}">
`
    console.log(passwordsArray)
}

function createCopyBtns() {
    document.getElementById("input1").addEventListener("click", function() {
        navigator.clipboard.writeText(input1.value)
        const originalInput1 = input1.value
        input1.value = " Copied!"
        setTimeout(function() {
            input1.value = originalInput1
        }, 1000)
    })

    document.getElementById("input2").addEventListener("click", function() {
        navigator.clipboard.writeText(input2.value)
        const originalInput2 = input2.value
        input2.value = " Copied!"
        setTimeout(function() {
            input2.value = originalInput2
        }, 1000)
    })

    document.getElementById("input3").addEventListener("click", function() {
        navigator.clipboard.writeText(input3.value)
        const originalInput3 = input3.value
        input3.value = " Copied!"
        setTimeout(function() {
            input3.value = originalInput3
        }, 1000)
    })

    document.getElementById("input4").addEventListener("click", function() {
        navigator.clipboard.writeText(input4.value)
        const originalInput4 = input4.value
        input4.value = " Copied!"
        setTimeout(function() {
            input4.value = originalInput4
        }, 1000)
    })

}