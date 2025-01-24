$(document).ready(function () {
    function check(str) {
        return /[@.]/.test(str); // Check if "@" or "." is present
    }

    function digits(str) {
        return /^\d{10}$/.test(str); // Ensure it's exactly 10 digits
    }

    async function main() {
        console.log("Yes");

        // Wait for DOM elements to load
        $("button").on('click', (events) => {
            events.preventDefault();

            // Fetch input values
            let email = $("#Email").val().trim();
            let num = $("#number").val().trim();

            // Save to localStorage
            localStorage.setItem(`email`, email);
            localStorage.setItem(`number`, num);

            // Remove existing error messages
            $(".error").remove();

            // Validation
            let div = document.createElement("div");
            div.classList.add("error");

            if (!check(email)) {
                div.innerHTML = `<h2>Please enter an email address with '@' or '.' in it.</h2>`;
                document.body.append(div);
                alert("Please write a valid email");
                return;
            }

            if (!digits(num)) {
                div.innerHTML = `<h2>Please enter a valid 10-digit mobile number.</h2>`;
                document.body.append(div);
                alert("Enter a valid mobile number");
                return;
            }

            // Success case
            alert("Thank you for your information!");
            const user = `email: ${email} \n mobile number: ${num}`;
            console.log(user);
        });

        console.log("End");
    }

    main();

    // Update domain text on click
    // const target = $(".pls");
    const domain = $('#domain');

    $(".Opensource").on('click', function () {
        const inputValue = $(this).val(); // Get the input field's value
        domain.val(this.innerHTML); // Update the label's text
        // console.log("Input value updated:", target.text());
    });
    $(".App").on('click', function () {
        const inputValue = $(this).val(); // Get the input field's value
        domain.val(this.innerHTML); // Update the label's text
        // console.log("Input value updated:", target.text());
    });
    $(".UX").on('click', function () {
        // const inputValue = $(this).val(); // Get the input field's value
        domain.val(this.innerHTML); // Update the label's text
        // console.log("Input value updated:", target.text());
    });
    $(".ROS").on('click', function () {
        // const inputValue = $(this).val(); // Get the input field's value
        domain.val(this.innerHTML); // Update the label's text
        // console.log("Input value updated:", target.text());
    });
    $(".Devlopment").on('click', function () {
        // const inputValue = $(this).val(); // Get the input field's value
        domain.val(this.innerHTML); // Update the label's text
        // console.log("Input value updated:", target.text());
    });
    $(".DSA").on('click', function () {
        // const inputValue = $(this).val(); // Get the input field's value
        domain.val(this.innerHTML); // Update the label's text
        // console.log("Input value updated:", target.text());
    });
});
