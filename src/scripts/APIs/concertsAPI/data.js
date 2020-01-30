// API Code

const concertsApiFetch = {
  searchForConcerts: searchConcert => {
    return fetch(
      `http://app.ticketmaster.com/discovery/v1/events.json?apikey=${concertsAPIKey}&keyword=${searchConcert}`
    ).then(response => response.json());
  }
};




// Render To DOM Function

const concertsHTMLFactory = (concert, index) => {
  return `
      <section>
      <div class="concert-search-result">
      <div>
        <div class="title" id="concertTitle--${index}">${concert.name}</div>
        <div>Date: ${concert.dates.start.localDate}</div>
        <div>Time: ${concert.dates.start.localTime}</div>
        <button class="concert-save-button" id="concert-save-button--${index}">Save</button>
        </div>
      </section>
    `;
};




// Search API Event Feature

const concertSearchButton = document.querySelector("#concertSearch-btn");

concertSearchButton.addEventListener("click", event => {
  const concertSearchCriteria = document.querySelector("#concert-search-criteria").value;
  const concertSearchResults = document.querySelector("#results");
  concertsApiFetch
    .searchForConcerts(concertSearchCriteria)
    .then(concertsAPI => {
        saveConcertEventManager.removeSaveEventListeners()
      const concerts = concertsAPI._embedded.events;
      concertSearchResults.innerHTML = " "
      for (let i = 0; i < concerts.length; i++) {
        const concert = concerts[i];
        concertSearchResults.innerHTML += concertsHTMLFactory(concert, i);
        saveConcertEventManager.addSaveEventListeners();
      }
    });
});




// Save To My Itinerary

const itineraryResult = document.querySelector("#concertItinerary")

const concertSaveEventHandler = event => {
  const buttonId = event.target.id;
  const index = buttonId.split("--")[1];
  const concertName = document.getElementById(`concertTitle--${index}`);
  itineraryResult.innerHTML = `Concert: ${concertName.innerHTML}`
};
const saveConcertEventManager = {
  addSaveEventListeners() {
    const concertButtons = document.querySelectorAll(".concert-save-button");
    for (let concertButton of concertButtons) {
      concertButton.addEventListener("click", concertSaveEventHandler);
    }
  },
  removeSaveEventListeners() {
    const concertButtons = document.querySelectorAll(".concert-save-button");
    for (let concertButton of concertButtons) {
      concertButton.removeEventListener("click", concertSaveEventHandler);
    }
  }
};