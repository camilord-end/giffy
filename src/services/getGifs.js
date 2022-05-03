const apiKEY = "38QcgRyTv6KdOfs3W8xeHSOtM8RpsVni";
const apiLIMIT = 10;
const apiLANG = 'en';
const apiRATING = 'g';


export default function getGifs({ keyword = 'cat' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=${apiLIMIT}&offset=0&rating=${apiRATING}&lang=${apiLANG}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      });
      return (gifs);
    });
}