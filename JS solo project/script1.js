document.querySelector("#btn1").addEventListener("click", () => {
  const API_URL1 =
    "https://api.unsplash.com/search/photos?query=posture&client_id=iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ";

  fetch(API_URL1)
    .then((res) => res.json())
    .then((data) => {
      const srcUrl1 = data.results[1].urls.thumb;
      let newImage1 = document.getElementById("newPic1");
      newImage1.src = srcUrl1;

      let element1 = document.getElementById("result1");
      element1.innerHTML =
        "Adjust chair height so your feet are flat on the floor and knees are in line with hips. Sit up straight and keep your hips far back in the chair.";
    });
});
