const zomatoAPIURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${zomatoAPIKey}`

const searchZomatoAPI = () => {
    fetch(zomatoAPIURL)
        .then(restaurants => restaurants.json())
        .then(parsedRestaurants => {
            const allRestaurants = parsedRestaurants.restaurants

            allRestaurants.forEach(restaurant => {
                searchResults.innerHTML += restaurantResultMaker(restaurant.restaurant.name, restaurant.restaurant.location.locality)
            });
        })
}

// zomatoAPIfetch()

