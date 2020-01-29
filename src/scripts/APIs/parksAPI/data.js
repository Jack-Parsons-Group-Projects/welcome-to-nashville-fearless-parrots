const parkButton = document.getElementById("parkSearch-btn")

const htmlContainer = document.getElementById("results")

const parkItineraryContainer = document.getElementById("parkItinerary")



const resultsHtml = parksFromAPI => {
    const addressObject = JSON.parse(parksFromAPI.mapped_location.human_address)
    return `
        <section class = "parkResults" id = "parkResultsId-${parksFromAPI.park_name}">
            <p>${parksFromAPI.park_name}</p>
            <p>${addressObject.address}, ${addressObject.city}, ${addressObject.state}, ${addressObject.zip}</p>
            <button class = "parkSaveBtn" id = "parkSaveBtnId-${parksFromAPI.park_name}">Save</button>
        </section>
    
    `
 
}

const ApIfetch = (searchParam) => {
    const apiUrl = `https://data.nashville.gov/resource/74d7-b74t.json?${searchParam}=Yes`;
    fetch (apiUrl)
    .then (resp => resp.json())
    .then (allParks => {

        saveEventManager.removeSaveEventListeners()

        htmlContainer.innerHTML = " "
        allParks.forEach(park => {
            console.log(park[searchParam])
            
            htmlContainer.innerHTML += resultsHtml(park)
                     
        })
        console.log(allParks)

        saveEventManager.addSaveEventListeners()
       
    })
}

const saveEventHandler = (event) => {
    parkItineraryContainer.innerHTML = "Park: "
    const buttonId = event.target.id;
    const index = buttonId.split('-')[1];

    console.log(buttonId)

    
  
    const individualParks = document.getElementById(`parkResultsId-${index}`)
    parkItineraryContainer.innerHTML += " " + index
    console.log(individualParks)
    // const routeDiv = document.getElementById(`routename-${index}`);
    // const stopDiv = document.getElementById(`stopname-${index}`);
    // const stopText = `${routeDiv.textContent.trim()}: ${stopDiv.textContent.trim()}`;
    // alert(`You like\n${stopText}`);
  
    // const busStopSection = document.getElementById(`busstop-${index}`);
    // busStopSection.classList.add('favorite');
  };

const saveEventManager = {
    addSaveEventListeners() {
      const parkButtons = document.querySelectorAll(".parkSaveBtn");
      for (let parkButton of parkButtons) {
        parkButton.addEventListener("click", saveEventHandler);
      }
    },

    removeSaveEventListeners() {
      const parkButtons = document.querySelectorAll(".parkSaveBtn");
      for (let parkButton of parkButtons) {
        parkButton.removeEventListener("click", saveEventHandler);
      }
    }
  }

  // const saveButtonMaker = () => {

//     const parkItineraryButton = document.getElementById("parkSaveBtn")
//     parkItineraryButton.addEventListener("click", (event) => {
//         parkItineraryContainer.innerHTML += "A Park"
//     })
// }