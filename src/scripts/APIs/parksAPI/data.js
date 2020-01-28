const parkButton = document.getElementById("parkSearch-btn")

const htmlContainer = document.getElementById("results")

const resultsHtml = parksFromAPI => {
    return `
        <section class = "parkResults">
            <p>${parksFromAPI.park_name}</p>
            <button id="parkSaveBtn">Save</button>
        </section>
    
    `
}

const ApIfetch = (searchParam) => {
    const apiUrl = `https://data.nashville.gov/resource/74d7-b74t.json?${searchParam}=Yes`;
    fetch (apiUrl)
    .then (resp => resp.json())
    .then (allParks => {

        htmlContainer.innerHTML = " "
        allParks.forEach(park => {
            console.log(park[searchParam])
            
            htmlContainer.innerHTML += resultsHtml(park)
                     
        })
        console.log(allParks)
       
    })
}

