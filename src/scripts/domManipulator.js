// Mike's code //

parkButton.addEventListener("click", (event) => {
    const searchParam = document.getElementById("searchCriteriaParks").value


    ApIfetch(searchParam)



})




// document.body.addEventListener("click", (event) => {
//     if (event.target.matches("span")) {
//         saveButtonMaker()
//     }

// } )

// const saveButtonMaker = () => {

//     const parkItineraryButton = document.getElementById("parkSaveBtn")
//     parkItineraryButton.addEventListener("click", (event) => {
//         parkItineraryContainer.innerHTML += "A Park"
//     })
// }

