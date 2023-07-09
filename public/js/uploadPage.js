const input = document.querySelector("#file-input")
const uploadSection = document.getElementById("uploadSection")
const progress = document.getElementById("progress")
const percentage = document.getElementById("percentage")
const fileName = document.getElementById("fileName")

// Adding event listener to whole upload section
uploadSection.addEventListener("click",function(){
    input.click()
})

// Adding event listener when user clicks on the input element
$('#file-input').change(function(e){
    var file = e.target.files[0]

    // Checking the validation of csv file for the notification
    if(!file.name.includes("csv")){
        console.log(false)
        $("#notifyError").css("display","block")
        setTimeout(function(){
            $("#notifyError").css("display","none")

        },3000)
    }else{

        var formData = new FormData();
        formData.append('inputFile',file)
        // Uploading the data in the backend using the ajax library
        $.ajax({
            url:"/upload",
            type:"post",
            data:formData,
            processData:false,
            contentType:false,
            success:function(){
                setTimeout(function(){
                    location.reload()
                },2000)
                // Showing the notification when uploading is done
                $("#notifySuccess").css("display","block")
                setTimeout(function(){
                    $("#notifySuccess").css("display","none")
                },3000)
            },
            crossDomain:true,
        })
    }
})