import { updateGallery, getImg } from './functions/imgFunctions.js';

const gallery = document.querySelector('.gallery__pics-container');
const addImageBtn = document.querySelector('#addImageBtn');
const galleryCounter = document.querySelector('.gallery__counter');
const removeImageBtn = document.querySelector('#removeImageBtn');
const colsInput = document.querySelector('.controller__input');
const topicInput = document.querySelector('.controller__topic');


const pics = [];

addImageBtn.addEventListener('click', () => {
    getImg(topicInput.value).then((pic) => {
      updateGallery(pic, pics, gallery, galleryCounter);  
    })
});

colsInput.addEventListener('change', (e) => {
    gallery.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
});

removeImageBtn.addEventListener('click', () => {
    pics.pop();
    updateGallery(null, pics, gallery, galleryCounter);
});
