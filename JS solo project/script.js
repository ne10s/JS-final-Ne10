// iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ unsplshkey
// fetch(
//   "https://api.unsplash.com/search/photos?query=london&client_id=iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ"
// )
//   .then((res) => res.jason())
//   .then((data) => console.log(data));

// async function getUnsplash(queryString) {
//     const UnsplashKey = "iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ";

//     const url =`https://api.unsplash.com/photos/random?client_id=${UnsplashKey}&query=${queryString}`;

//     const res = await fetch(url);
//     const data = await res.json();

// }
document.querySelector("#myBtn").addEventListener("click", () => {
  const UnsplashKey = "iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ";
  const API_URL =
    "https://api.unsplash.com/search/photos?query=london&client_id=iHDTTt-H22Q1NhfTGugkOxxQK-vMIGcrVCJJwH32ImQ";

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const srcUrl = data.results[1].urls.thumb;
      //const srcUrl = data.API_URL.thumb;
      let newImage = document.getElementById("newPic");
      newImage.src = srcUrl;
    });
});
