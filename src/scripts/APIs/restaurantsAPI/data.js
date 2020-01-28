const searchZomatoAPI = (searchString) => {
    const zomatoAPIURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${zomatoAPIKey}&q=${searchString}`

    return fetch(zomatoAPIURL)
        .then(restaurants => restaurants.json())
}

