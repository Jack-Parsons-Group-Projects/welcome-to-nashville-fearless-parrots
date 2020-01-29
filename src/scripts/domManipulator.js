// Mike's code //

parkButton.addEventListener("click", (event) => {
    const searchParam =document.getElementById("searchCriteriaParks").value
    console.log(searchParam)
  
    ApIfetch(searchParam)
    
})
