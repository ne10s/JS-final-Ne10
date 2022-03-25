document.querySelector("#btn4").addEventListener("click", () => {
  const API_URL4 =
    "https://api.unsplash.com/search/photos?query=healthy-diet&client_id=iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ";

  fetch(API_URL4)
    .then((res) => res.json())
    .then((data) => {
      const srcUrl4 = data.results[1].urls.thumb;
      let newImage4 = document.getElementById("newPic4");
      newImage4.src = srcUrl4;

      let element4 = document.getElementById("result4");
      element4.innerHTML =
        "USDA recommends 5-9 servings of fruits and vegetables.";
    });
});
