const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        console.log("Error: ", error);
      }

      body = JSON.parse(body);

      if (body.length === 0) {
        return callback(error, "Invalid breed");
      } else {
        return callback(error, body[0].description.trim());
      }
    }
  );
};

module.exports = { fetchBreedDescription };
