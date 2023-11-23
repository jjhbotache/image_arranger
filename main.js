const gallery = document.querySelector('.gallery__pics-container');
const addImageBtn = document.querySelector('#addImageBtn');
const galleryCounter = document.querySelector('.gallery__counter');
const removeImageBtn = document.querySelector('#removeImageBtn');
const colsInput = document.querySelector('.controller__input');
const topicInput = document.querySelector('.controller__topic');


const pics = []

async function getImg(query) {
    
    const fetchInfo = await fetch(`https://pixabay.com/api/?key=33503807-b3af0ad6b43841c66a831c83f&lang=en&q=${query}`)
    const data = await fetchInfo.json()
    const random = Math.floor(Math.random() * data.hits.length);
    const pic = data.hits[random].largeImageURL;
    return pic;
}

function updateGallery(newPic) {
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

addImageBtn.addEventListener('click', () => {
    getImg(topicInput.value).then((pic) => {
      updateGallery(pic);  
    })
});
colsInput.addEventListener('change', (e) => {
    gallery.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
})
removeImageBtn.addEventListener('click', () => {
    pics.pop();
    updateGallery();
})
