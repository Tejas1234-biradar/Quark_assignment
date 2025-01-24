document.addEventListener("DOMContentLoaded", () => {
    const storiesList = document.getElementById("stories-list");
    const storyIndexSelect = document.getElementById("story-index");
    const updateForm = document.getElementById("update-story-form");
    const addForm = document.getElementById("add-story-form");
    const updateStatusMessage = document.getElementById("status-message");
    const addStatusMessage = document.getElementById("add-status-message");

    // Populate the story selection dropdown
    function populateStoryDropdown() {
        storyIndexSelect.innerHTML = "<option value='' disabled selected>Select a story</option>";
        const stories = document.querySelectorAll(".story");
        stories.forEach((story, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = story.querySelector("h3").textContent;
            storyIndexSelect.appendChild(option);
        });
    }

    // Update an existing story
    updateForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const selectedIndex = storyIndexSelect.value;
        const newName = document.getElementById("new-name").value.trim();
        const newMessage = document.getElementById("new-message").value.trim();

        if (selectedIndex === "") {
            updateStatusMessage.textContent = "Please select a story to update.";
            updateStatusMessage.style.color = "red";
            return;
        }

        const stories = document.querySelectorAll(".story");
        const selectedStory = stories[selectedIndex];

        selectedStory.querySelector("h3").textContent = newName;
        selectedStory.querySelector("p").textContent = `"${newMessage}"`;

        updateStatusMessage.textContent = "Story updated successfully!";
        updateStatusMessage.style.color = "green";

        updateForm.reset();
        populateStoryDropdown();
    });

    // Add a new story
    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newName = document.getElementById("add-name").value.trim();
        const newMessage = document.getElementById("add-message").value.trim();
        const newImage = document.getElementById("add-image").files[0];

        if (!newName || !newMessage || !newImage) {
            addStatusMessage.textContent = "Name, message, and image are required.";
            addStatusMessage.style.color = "red";
            return;
        }

        const newStory = document.createElement("li");
        newStory.className = "story";

        const imageURL = URL.createObjectURL(newImage);

        newStory.innerHTML = `
            <img src="${imageURL}" alt="Story Image">
            <div>
                <h3>${newName}</h3>
                <p>"${newMessage}"</p>
            </div>
        `;

        storiesList.appendChild(newStory);

        addStatusMessage.textContent = "New story added successfully!";
        addStatusMessage.style.color = "green";

        addForm.reset();
        populateStoryDropdown();
    });

    // Initialize the dropdown on page load
    populateStoryDropdown();
});
