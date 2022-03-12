const images=[
    'image/image1.jpg',
    'image/image2.jpg',
    'image/image3.jpg',
    'image/image4.jpg',
    'image/image5.jpg',
    'image/image6.jpg',
    'image/image7.jpg',
    'image/image8.jpg',
    'image/image9.jpg'
];
let imageIndex =0;
const imageElement=document.getElementById('slider-image');
setInterval(()=>{
    if(imageIndex>images.length-1){
        imageIndex =0;
    }
    const imageUrl =images[imageIndex];
    console.log(imageUrl);
    imageElement.setAttribute('src',imageUrl);
    imageIndex++;
    

}, 1000)