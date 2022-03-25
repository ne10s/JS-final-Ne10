document.querySelector("#btn2").addEventListener("click", () => {
  const API_URL2 =
    "https://api.unsplash.com/search/photos?query=hydration&client_id=iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ";

  fetch(API_URL2)
    .then((res) => res.json())
    .then((data) => {
      const srcUrl2 = data.results[1].urls.thumb;
      let newImage2 = document.getElementById("newPic2");
      newImage2.src = srcUrl2;

      let element2 = document.getElementById("result2");
      element2.innerHTML =
        "Based on gender and age, the USDA recomends drinking between 2.7- 3.7 liters of water per day.";
    });
});
