let shareMenuVisible = false;

window.onload = function () {
    document.querySelector(".menu-icon").addEventListener('click', toggleMenu);
}

function toggleMenu(event) {
    const shareMenu = document.querySelector(".share-menu");
    const overlay = document.getElementById("overlay");

    if (!shareMenu.contains(event.target) && shareMenuVisible) {
        shareMenu.style.display = "none";
        overlay.style.display = "none";
        shareMenuVisible = false;
    } else {
        shareMenu.style.display = shareMenuVisible ? "none" : "flex";
        overlay.style.display = shareMenuVisible ? "none" : "block";
        shareMenuVisible = !shareMenuVisible;
    }
}

document.body.addEventListener('click', function () {
    const shareMenu = document.querySelector(".share-menu");
    const overlay = document.getElementById("overlay");

    shareMenu.style.display = "none";
    overlay.style.display = "none";
    shareMenuVisible = false;

    // Close the TikTok dropdown when clicking outside of it
    const dropdown = document.getElementById('tiktokDropdown');
    dropdown.style.display = 'none';

    // Reset the margin of the WhatsApp button when the dropdown is closed
    const whatsappButton = document.querySelector('.whatsapp-button');
    whatsappButton.style.marginTop = '10px';
});

// Function to toggle the visibility of the TikTok dropdown menu
function toggleTikTokDropdown() {
    const dropdown = document.getElementById('tiktokDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    // Move the WhatsApp button down 20px when the TikTok dropdown is displayed
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (dropdown.style.display === 'block') {
        whatsappButton.style.marginTop = '30px'; // Adjust the margin as needed
    } else {
        whatsappButton.style.marginTop = '10px'; // Reset the margin when the dropdown is hidden
    }
}

// Add click event listener to the TikTok button
document.getElementById('tiktokButton').addEventListener('click', function (event) {
    // Toggle the TikTok dropdown
    toggleTikTokDropdown();

    // Prevent the click event from reaching the body and closing the dropdown immediately
    event.stopPropagation();
});

// Add click event listener to the TikTok dropdown items
document.getElementById('tiktokDropdown').addEventListener('click', function (event) {
    // Stop the click event from reaching the body and closing the dropdown immediately
    event.stopPropagation();
});

// Additional functions (if any) can be added below this line.
