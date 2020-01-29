const restaurantResultMaker = (name, locality) => {
  return `
    <div class="search-result">
    <h3>${name}</h3>
    <p>${locality}</p>
    <button class="restaurant-save-button">Save button</button>
    </div>`;
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
