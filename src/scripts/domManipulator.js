const parkSearchButton = document.querySelector("#parkSearch-btn")
const artSearchButton = document.querySelector("#artSearch-btn")
const restaurantSearchButton = document.querySelector("#restSearch-btn")
const concertSearchButton = document.querySelector("#concertSearch-btn")

const searchResults = document.querySelector("#results")

parkSearchButton.addEventListener("click", event => {

})

artSearchButton.addEventListener("click", event => {

})

restaurantSearchButton.addEventListener("click", event => {
    const restaurantsSearchCriteria = document.querySelector("#rest-search-criteria").value
    searchZomatoAPI(restaurantsSearchCriteria)
    .then(parsedRestaurants => {
        const allRestaurants = parsedRestaurants.restaurants

        allRestaurants.forEach(restaurant => {
            searchResults.innerHTML += restaurantResultMaker(restaurant.restaurant.name, restaurant.restaurant.location.locality)
        });
    })
})

concertSearchButton.addEventListener("click", event => {

})

