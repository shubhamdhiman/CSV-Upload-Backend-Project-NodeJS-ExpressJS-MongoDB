const input = document.querySelector(".file-input")
const uploadSection = document.getElementById("uploadSection")
console.log("joined")

uploadSection.addEventListener("click",function(){
    input.click()
})

input.addEventListener("change",function(e){
    // console.log(e.target.files)
    let file = e.target.files[0]
    if(file){
        console.log(file.name)
    }
})