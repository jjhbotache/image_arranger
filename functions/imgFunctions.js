export async function getImg(query) {
    
    const fetchInfo = await fetch(`https://pixabay.com/api/?key=33503807-b3af0ad6b43841c66a831c83f&lang=en&q=${query}`)
    const data = await fetchInfo.json()
    const random = Math.floor(Math.random() * data.hits.length);
    const pic = data.hits[random].largeImageURL;
    return pic;
}

export function updateGallery(newPic,pics, gallery, galleryCounter) {
    newPic && pics.push(newPic);
    galleryCounter.innerHTML = pics.length;
    gallery.innerHTML = ``;
    

    pics.forEach((pic) => {
        const img = document.createElement('img');
        img.src = pic;
        img.classList.add('gallery__img');
        gallery.appendChild(img);
    })
}