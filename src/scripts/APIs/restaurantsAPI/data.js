const searchZomatoAPI = (searchString) => {
    const zomatoAPIURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${zomatoAPIKey}&q=${searchString}`

    return fetch(zomatoAPIURL)
        .then(restaurants => restaurants.json())
}

// Jack's Restaurant API Code //

const restaurantSearchButton = document.querySelector("#restSearch-btn")
const restaurantSaveButton = document.querySelector(".restaurant-save-button")
const restaurantResultBox = document.querySelector("#restaurantItinerary")
const searchResults = document.querySelector("#results")

// Restaurant Search Feature //

restaurantSearchButton.addEventListener("click", event => {
    const restaurantsSearchCriteria = document.querySelector("#rest-search-criteria").value
    searchZomatoAPI(restaurantsSearchCriteria)
    .then(parsedRestaurants => {
        const allRestaurants = parsedRestaurants.restaurants

        searchResults.innerHTML = " "

        allRestaurants.forEach(restaurant => {
            searchResults.innerHTML += restaurantResultMaker(restaurant.restaurant.name, restaurant.restaurant.location.locality)
        });
    })
})

// Restaurant Save To Itinerary Feature //

restaurantSaveButton.addEventListener("click", event => {
    restaurantResultBox.innerHTML += restaurant.restaurant.name
})

