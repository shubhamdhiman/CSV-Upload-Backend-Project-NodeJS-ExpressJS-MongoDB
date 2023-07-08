const dataFromServer = document.getElementById("dataFromFilePage");
const parsedData = JSON.parse(dataFromServer.value);
const fullDataFromServer = document.getElementById("fullDataFromFilePage")
const fullParsedData = JSON.parse(fullDataFromServer.value)
const fileId = document.getElementById("fileId")
const fileIdParsed = JSON.parse(fileId.value)
const pageNumberFromServer = document.getElementById("pageNumber")
const pageNumberFromServerParsed = JSON.parse(pageNumberFromServer.value)
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const mainTable = document.getElementById("mainTable");


// Front-End Search Logic
searchButton.addEventListener("click", searchFunction);
searchBar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchFunction();
  }
});
let run = 0;
function searchFunction() {
  const select = document.getElementById("select");
  const optionValue = select.value;
  console.log(searchBar.value);
  if (searchBar.value === "") {
    location.reload();
  } else if (searchBar.value !== "") {
    let arr = [];
    for (i = 0; i < parsedData.length; i++) {
      if (parsedData[i][optionValue].toLowerCase().includes(searchBar.value.toLowerCase())) {
        arr.push(parsedData[i]);
      }
    }
    if (run == 0) {
      tableBody.style.display = "none";
    }
    const tbody = document.createElement("tbody");
    for (let row of arr) {
      const tr = document.createElement("tr");
      for (let key of Object.keys(row)) {
        const td = document.createElement("td");
        td.innerHTML = row[key];
        tr.append(td);
      }
      console.log(tr);
      tbody.append(tr);
    }
    console.log(mainTable.children.length);
    if (mainTable.children.length > 1) {
      mainTable.removeChild(mainTable.children[1]);
      console.log("yes length is greater than 1");
    }
    mainTable.append(tbody);
    console.log(arr);
    run++;
  }
}


// Front-End Pagination Logic
let pageNumber = 1;
const prev = document.getElementById("prev")
const current = document.getElementById("current")
const next = document.getElementById("next")

console.log(fullParsedData.length)
if(fullParsedData.length>100){
  if(pageNumberFromServerParsed*100 >= fullParsedData.length){

    next.style.display = "none";
  }else{
    next.style.display = "block";
    next.href = `/filePage/${fileIdParsed}/${pageNumberFromServerParsed+1}`
  }
}
if(fullParsedData.length<100){
  current.style.display = "none";
}
if(pageNumberFromServerParsed>1){
  prev.style.display = "block"
  current.innerHTML = pageNumberFromServerParsed;
  current.href=`/filePage/${fileIdParsed}/${pageNumberFromServerParsed}`
  if(pageNumberFromServerParsed === 2){
    prev.href=`/filePage/${fileIdParsed}`
  }
  prev.href=`/filePage/${fileIdParsed}/${pageNumberFromServerParsed-1}`
}


