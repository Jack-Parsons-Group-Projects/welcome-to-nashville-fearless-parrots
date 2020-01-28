const restaurantSearchButton = document.querySelector("#restSearch-btn")
const saveButton = document.querySelector(".restaurant-save-button")

const searchResults = document.querySelector("#results")

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


parkButton.addEventListener("click", (event) => {
    const searchParam =document.getElementById("searchCriteriaParks").value
    console.log(searchParam)
  
    ApIfetch(searchParam)
    
})
