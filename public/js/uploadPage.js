const input = document.querySelector("#file-input")
const uploadSection = document.getElementById("uploadSection")
const progress = document.getElementById("progress")
const percentage = document.getElementById("percentage")
const fileName = document.getElementById("fileName")
console.log("joined")

uploadSection.addEventListener("click",function(){
    input.click()
})

// function uploadFile(file){
//     let xhr = new XMLHttpRequest()
//     console.log(xhr)
//     xhr.upload.onprogress = (event) =>{
//         console.log(event)
//         fileName.innerHTML = file.name;
//         progress.style.width = `${((event.loaded/event.total)*100)}%`;
//         percentage.innerHTML = `${Math.floor((event.loaded/event.total)*100)}%`
//     }
//     xhr.open('POST','/upload')
//     xhr.send(file)
// }
// input.addEventListener("change",function(e){
//     // console.log(e.target.files)
//     let file = e.target.files[0]
//     if(file){
//         console.log(file.name)
//         uploadFile(file)
//     }
// })


$('#file-input').change(function(e){
    var file = e.target.files[0]
    console.log(file)
    var formData = new FormData();
    formData.append('inputFile',file)

    $.ajax({
        url:"/upload",
        type:"post",
        data:formData,
        processData:false,
        contentType:false,
        success:function(response){
            console.log(response)
            location.reload()
        },
        crossDomain:true,
    })
})