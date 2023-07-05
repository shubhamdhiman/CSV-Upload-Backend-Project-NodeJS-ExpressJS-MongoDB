console.log("file Page")

const dataFromServer = document.getElementById("dataFromFilePage")
const parsedData = JSON.parse(dataFromServer.value)
console.log(parsedData)


const searchBar = document.getElementById("searchBar")
const searchButton = document.getElementById("searchButton")
// const tableBody = document.getElementById("tableBody")
const mainTable = document.getElementById("mainTable")
searchButton.addEventListener("click", searchFunction)
searchBar.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        searchFunction()
        
    }
})
let run = 0;
function searchFunction(){
    if(searchBar.value === ""){
        location.reload()
    }
    else if(searchBar.value !== ""){
        let arr = []
        for(i=0;i<parsedData.length;i++){
            if(parsedData[i].FullName.includes(searchBar.value)){
                arr.push(parsedData[i])
            }
        }
        // console.log(arr)
        if(run==0){

            tableBody.style.display="none";
        }
        const tbody = document.createElement("tbody")
        for(let row of arr){
            const tr = document.createElement('tr')
            for(let key of Object.keys(row)){
                const td = document.createElement('td')
                td.innerHTML = row[key]
                // console.log(td)
                tr.append(td)
            }
            console.log(tr)
            tbody.append(tr)
        }
        console.log(mainTable.children.length)
        if(mainTable.children.length>1){
            mainTable.removeChild(mainTable.children[1])
            console.log("yes length is greater than 1")
        }
        mainTable.append(tbody)
        console.log(arr)
        run++;
    }
}