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










// const renderConcerts = (concerts) => {
//     const container = document.querySelector("#concertsSearch");
//     concerts.forEach(concert => {
//         const concertHtml = HTMLFactory(concert);
//         container.innerHTML += concertHtml;
//     });
// };