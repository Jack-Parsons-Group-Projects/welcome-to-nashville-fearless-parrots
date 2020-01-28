const concertsApi = {
    searchForConcerts: (searchConcert) => {
        return fetch(`http://app.ticketmaster.com/discovery/v1/events.json?apikey=${concertsAPIKey}&keyword=${searchConcert}`)
            .then(response => response.json())

    }
};

concertsApi.searchForConcerts(`rock`)
.then(concertsFromAPI => {
    console.log(concertsFromAPI);
});

const concertsAPI = (concert) => {
    return `
      <section id="search-box">
        <div>Title: ${concert.performer}</div>
        <div>Date: ${concert.showDate}</div>
      </section>
    `;
};




const searchResultsDomManager = {
    busStopFactory(busStop, index) {
      console.log("busStopFactory");
  
      // We use the "index" to make unique ids for each bus stop
      return `
        <section id="busstop-${index}" class="bus-stop">
          <div id="routename-${index}" class="bus-stop__route-name">
            ${busStop.route_name}
          </div>
          <div id="stopname-${index}" class="bus-stop__stopname">
            ${busStop.stopname}
          </div>
          <button id="favorite-${index}" class="bus-stop__favorite">
            Favorite &#11088;
          </button>
        </section>
      `;
    },
    renderSearchResults(searchResults) {
  
      console.log("renderSearchResults");
  
      favoriteEventManager.removeFavoriteEventListeners();
  
      const container = document.querySelector("#search-results");
      container.innerHTML = "";
  
      for (let i=0; i<searchResults.length; i++) {
        const busStop = searchResults[i];
        container.innerHTML += this.busStopFactory(busStop, i);
      }
  
      favoriteEventManager.addFavoriteEventListeners();
    }
  };





// const renderConcerts = (concerts) => {
//     const container = document.querySelector("#concertsSearch");
//     concerts.forEach(concert => {
//         const concertHtml = HTMLFactory(concert);
//         container.innerHTML += concertHtml;
//     });
// };