const parkButton = document.getElementById("parkSearch-btn")

const htmlContainer = document.getElementById("results")

const parkItineraryContainer = document.getElementById("parkItinerary")

const resultsHtml = parksFromAPI => {
  const addressObject = JSON.parse(parksFromAPI.mapped_location.human_address)
  return `
        <section class = "parkResults" id = "parkResultsId-${parksFromAPI.park_name}">
            <h3>${parksFromAPI.park_name}</h3>
            <p>${addressObject.address}, ${addressObject.city}, ${addressObject.state}, ${addressObject.zip}</p>
            <button class = "parkSaveBtn button-rounded buttonSize" id = "parkSaveBtnId-${parksFromAPI.park_name}">Save</button>
        </section>
    
    `
}

const ApIfetch = (searchParam) => {
  const apiUrl = `https://data.nashville.gov/resource/74d7-b74t.json?${searchParam}=Yes`;
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(allParks => {

      saveEventManager.removeSaveEventListeners()

      htmlContainer.innerHTML = " "
      allParks.forEach(park => {


        htmlContainer.innerHTML += resultsHtml(park)

      })


      saveEventManager.addSaveEventListeners()

    })
}

const saveEventHandler = (event) => {
  parkItineraryContainer.innerHTML = "Park: "
  const buttonId = event.target.id;
  const index = buttonId.split('-')[1];



  const individualParks = document.getElementById(`parkResultsId-${index}`)
  parkItineraryContainer.innerHTML += " " + index


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
