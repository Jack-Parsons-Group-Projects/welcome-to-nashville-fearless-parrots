//Api Manager
const artApiManager = {
  searchPublicArt(searchCriteria) {
    const artApiUrl = `https://data.nashville.gov/resource/eviu-nxp6.json?`;
    const criteria = encodeURIComponent(`"%${searchCriteria}%"`);
    const url = artApiUrl + `$where=description like ${criteria}`;
    return fetch(url).then(resp => resp.json());
  }
};

//Event listener on search button
const artSearchEventManager = {
  addArtSearchEventListener() {
    console.log("addArtSearchEventListener");

    const artSearchButton = document.getElementById("artSearch-btn");

    artSearchButton.addEventListener("click", () => {
      const input = document.getElementById("art-search-criteria");

      const searchCriteria = input.value;
      const searchResultPromise = artApiManager.searchPublicArt(searchCriteria);
      searchResultPromise.then(searchResults => {
        console.log(searchResults);
        searchResultsDomManager.renderSearchResults(searchResults);
      });
    });
  }
};

//Dom manager / html factory
const searchResultsDomManager = {
  publicArtFactory(artObj, index) {
    return `
        <h2>${artObj.artwork}</h2>
        <h3>${artObj.last_name}, ${artObj.first_name}</h3>
        <p>${artObj.description}</p>
        <button class="art-save-button" id="save--${index}">Save button</button>
        `;
  },
  renderSearchResults(searchResults) {
    console.log("renderSearchResults");

    const container = document.querySelector("#results");
    container.innerHTML = "";

    for (let i = 0; i < searchResults.length; i++) {
      const artWork = searchResults[i];
      container.innerHTML += this.publicArtFactory(artWork, i);
    }
  }
};


//Move this to the domManipulator.js
artSearchEventManager.addArtSearchEventListener();

//Save function


