$(document).ready(function () {
    $('h1').hide();
    $('img').hide();
    window.addEventListener('load', function () {
        const title = $('#title');
        
        // Trigger the title animation after a short delay
        setTimeout(() => {
            title.addClass('show-title');
            $('h1').fadeIn(600);
            $('img').fadeIn(600);
        }, 500); // Delay for title animation
    });

    // Define the sendEmail function globally
    window.sendEmail = function () {
        var story = $('#success-stories-text').text();
        if (story) {
            alert('Emailed successfully');
        } else {
            alert('Please write a success story before submitting.');
        }
    };
});
