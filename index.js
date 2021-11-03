const yesBtn= document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('HAHHAHAHAHAH Sabia que dirias que si YEIIIII <3 ')
});

const NoBtn= document.querySelector('#NoBtn');

NoBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NoBtn.style.setProperty('top',randomY + '%');
    NoBtn.style.setProperty('lef',randomX + '%');
    NoBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
})

NoBtn.addEventListener('click',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NoBtn.style.setProperty('top',randomY + '%');
    NoBtn.style.setProperty('lef',randomX + '%');
    NoBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});