window.addEventListener('scroll', function() {
    const title = document.getElementById('image-container');
    setTimeout(() => {
        title.classList.add('image-show');
    }, 1500);
});
