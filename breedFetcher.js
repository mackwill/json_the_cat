const request = require("request");
const input = process.argv.slice(2);

request(
  `https://api.thcatapi.com/v1/breeds/search?q=${input[0]}`,
  (error, response, body) => {
    if (error) {
      console.log("Error: ", error);
    }
    body = JSON.parse(body);

    if (body.length === 0) {
      console.log("Breed not found");
    } else {
      console.log(body);
    }
  }
);
