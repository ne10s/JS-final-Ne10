document.querySelector("#btn3").addEventListener("click", () => {
  const API_URL3 =
    "https://api.unsplash.com/search/photos?query=sleep&client_id=iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ";

  fetch(API_URL3)
    .then((res) => res.json())
    .then((data) => {
      const srcUrl3 = data.results[1].urls.thumb;
      let newImage3 = document.getElementById("newPic3");
      newImage3.src = srcUrl3;

      let element3 = document.getElementById("result3");
      element3.innerHTML =
        "Most adults need 7 to 9 hours, although some people may need as few as 6 hours of sleep.";
    });
});

// document.
