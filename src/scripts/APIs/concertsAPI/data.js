// API Code

const concertsApiFetch = {
  searchForConcerts: searchConcert => {
    return fetch(
      `http://app.ticketmaster.com/discovery/v1/events.json?apikey=${concertsAPIKey}&keyword=${searchConcert}`
    ).then(response => response.json());
  }
};

concertsApiFetch.searchForConcerts(`concerts`).then(concertsFromAPI => {
  console.log(concertsFromAPI);
});





// Render To DOM Function

const concertsHTMLFactory = (concert, date, time) => {
  return `
      <section id="search-box">
      <div class="concert-search-result">
      <div id="concert-search-result">
        <div id="title">Title: ${concert.name}</div>
        <div>Date: ${concert.date}</div>
        <div>Time: ${concert.time}</div>
        <button class="concert-save-button">Save</button>
        </div>
      </section>
    `;
};





// Search API Event Feature

const concertSearchButton = document.querySelector("#concertSearch-btn");

concertSearchButton.addEventListener("click", event => {
  const concertSearchCriteria = document.querySelector(
    "#concert-search-criteria"
  ).value;
  const concertSearchResults = document.querySelector("#results");
  concertsApiFetch
    .searchForConcerts(concertSearchCriteria)
    .then(concertsAPI => {
      const concerts = concertsAPI._embedded.events;
      concertSearchResults.innerHTML = " ";
      concerts.forEach(concert => {
        concertSearchResults.innerHTML += concertsHTMLFactory(concert);
      });
    });
});

// for (let i=0; i<concertSearchResults.length; i++) {
//     const concert = concertSearchResults[i];
//     concertSearchResult.innerHTML += this.concertsHTMLFactory(concert, i);
//   }





// Save To My Itinerary

const concertSaveButton = document.querySelector(".concert-save-button");

const concertSaveEventHandler = (event) => {
  const buttonId = event.target.id;
  const concert = buttonId.split("_")[1];

  const concertsHTMLFactory = document.getElementById(`concert-search-result"-${concert}`");
    concertSearchResults.innerHTML += concertsHTMLFactory(concert);
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
      concertButton.removeEventListener("click", favoriteEventHandler);
    }
  }
};



