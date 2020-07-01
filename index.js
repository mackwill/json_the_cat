const breedName = process.argv.slice(2);

const { fetchBreedDescription } = require("./breedFetcher");

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(description);
  }

  console.log("This is at the end of the function for index.js");
});
