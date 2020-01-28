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
        allParks.forEach(park => {
            console.log(park[searchParam])
            
            htmlContainer.innerHTML += resultsHtml(park)
          
            
        })
        console.log(allParks)

        // resultsHtml(allParks)

       
    })
}

parkButton.addEventListener("click", (event) => {
    const searchParam =document.getElementById("searchCriteriaParks").value
    console.log(searchParam)
    // return searchParam.value
    // const option = searchParam.value
    ApIfetch(searchParam)

    
})



// const APImanager = {
//     searchAPI(searchCriteria) {
//         const criteria = encodeURIComponent(`"${searchCriteria}`);
//         const url = apiBaseURL + `'thing like ${criteria}'`;
//         return fetch(url).then(resp => resp.json)
//     }
// }


// console.log(ApIfetch)


// const apiUrl = "https://data.nashville.gov/resource/74d7-b74t.json";

// const apiManager = {
//   searchParks(searchCriteria) {

//     console.log("searchBusStops");

//     const criteria = encodeURIComponent(`"%${searchCriteria.toLowerCase()}%"`);
//     // const url = apiUrl + `$where=route_name like ${criteria}`;
//     return fetch(apiUrl).then(resp => resp.json());

//   }
// };

// const searchEventManager = {
//     addSearchClickEventListener() {
//       console.log("addSearchClickEventListener");
  
//       const button = document.getElementById("search-btn");
  
//       button.addEventListener("click", () => {
  
//         console.log("button click handler");
  
//         const input = document.getElementById("search-criteria");
//         const searchCriteria = input.value;
//         const searchResultPromise = apiManager.searchBusStops(searchCriteria);
//         searchResultPromise.then(searchResults => {
//           searchResultsDomManager.renderSearchResults(searchResults);
//         });
//       });
//     }
//   }