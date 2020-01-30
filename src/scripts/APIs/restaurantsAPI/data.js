// Jack's Restaurant API Code //

const searchZomatoAPI = (searchString) => {
    const zomatoAPIURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${zomatoAPIKey}&q=${searchString}`

    return fetch(zomatoAPIURL)
        .then(restaurants => restaurants.json())
}

// Restaurant Global DOM variables //

const restaurantSearchButton = document.querySelector("#restSearch-btn")
const restaurantItineraryBox = document.querySelector("#restaurantItinerary")
const restaurantSearchResults = document.querySelector("#results")

// Restaraunt Render to HTML function //

const restaurantResultMaker = (name, locality, id) => {
    return `
    <div class="restaurant-search-result" id="restarurant-search-result_${id}">
    <h3 id=h3_${id}>${name}</h3>
    <p>${locality}</p>
    <button class="restaurant-save-button button-rounded" id="restarurant-search-result_${id}_save">Save</button>
    </div>`
}

// Restaurant Search Feature //

restaurantSearchButton.addEventListener("click", event => {
    const restaurantsSearchCriteria = document.querySelector("#rest-search-criteria").value
    searchZomatoAPI(restaurantsSearchCriteria)
        .then(parsedRestaurants => {
            const allRestaurants = parsedRestaurants.restaurants

            restaurantSearchResults.innerHTML = " "

            allRestaurants.forEach((restaurant, index) => {
                restaurantSearchResults.innerHTML += restaurantResultMaker(restaurant.restaurant.name, restaurant.restaurant.location.locality, index)
            });
            addRestaurantSaveEventListener()
        })
})

// Restaurant Save To Itinerary Feature //

const saveRestaurantEventHandler = (event) => {
    const buttonId = event.target.id;
    const index = buttonId.split("_")[1];

    const individualRestaurants = document.querySelector(`#h3_${index}`)
    restaurantItineraryBox.innerHTML = `Restaurant: ${individualRestaurants.outerText}`
}

const addRestaurantSaveEventListener = () => {
    const restaurantSaveButtons = document.querySelectorAll(".restaurant-save-button")
    restaurantSaveButtons.forEach(restaurantSaveButton => {
        restaurantSaveButton.addEventListener("click", saveRestaurantEventHandler);
        })
    }


