window.addEventListener('load', function() {
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    
    // Trigger the title animation after a short delay
    setTimeout(() => {
        title.classList.add('show-title');
    }, 500); // Delay for title animation
    
    // Trigger the content animation after the title animation
    setTimeout(() => {
        content.classList.add('show-content');
    }, 1500); // Delay for content animation to ensure it fades after title animation
});
