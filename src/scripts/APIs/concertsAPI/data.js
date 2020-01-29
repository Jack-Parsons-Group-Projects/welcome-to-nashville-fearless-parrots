const concertsApiFetch = {
    searchForConcerts: (searchConcert) => {
        return fetch(`http://app.ticketmaster.com/discovery/v1/events.json?apikey=${concertsAPIKey}&keyword=${searchConcert}`)
            .then(response => response.json())

    }
};

concertsApiFetch.searchForConcerts(`rock`)
    .then(concertsFromAPI => {
        console.log(concertsFromAPI);
    });

const concertsHTMLFactory = (concert) => {
    return `
      <section id="search-box">
        <div>Title: ${concert.name}</div>
        <div>Date: ${concert.date}</div>
        <div>Time: ${concert.time}</div>
      </section>
    `;
};




const concertHTML = (concertName, concertDate, concertTime) => {
    return `
      <div class="concert-search-result">
      <h3>${concertName}</h3>
      <p>${concertDate}</p>
      <p>${concertTime}</p>
      <button class="concert-save-button">Save button</button>
      </div>
      `;
  };
  




const concertSearchButton = document.querySelector("#concertSearch-btn")
// const concertSaveButton = document.querySelector(".concertSave-button")

concertSearchButton.addEventListener("click", event => {
    const concertSearchCriteria = document.querySelector("#concert-search-criteria").value
    const concertSearchResults = document.querySelector("#results")
    concertsApiFetch.searchForConcerts(concertSearchCriteria)
        .then(concertsAPI => {
            const concerts = concertsAPI._embedded.events
            concertSearchResults.innerHTML = " "
            concerts.forEach(concert => {
                concertSearchResults.innerHTML += concertsHTMLFactory(concert)
            });
        })
})

// for (let i=0; i<concertSearchResults.length; i++) {
//     const concert = concertSearchResults[i];
//     concertSearchResult.innerHTML += this.concertsHTMLFactory(concert, i);
//   }





const saveConcertEventHandler = (event) => {
    const buttonId = event.target.id;
    const index = buttonId.split('-')[1];

const 






console.log(concertSearchButton)



