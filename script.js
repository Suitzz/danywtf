let shareMenuVisible = false;
let menuIcon;

window.onload = function () {
    menuIcon = document.querySelector(".menu-icon");
}

// Function to toggle the visibility of the TikTok dropdown menu
function toggleTikTokDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    const tiktokButton = document.getElementById('tiktokButton');

    if (dropdown.style.display === 'block' && tiktokButton.classList.contains('selected')) {
        dropdown.style.display = 'none';
        tiktokButton.classList.remove('selected');
    } else {
        dropdown.style.display = 'block';
        tiktokButton.classList.add('selected');
    }
}

// Function to navigate to the TikTok profile
function navigateToProfile(lang) {
    const tiktokProfileUrls = {
        'portuguese': 'https://www.tiktok.com/@sapienz_pt',
        'english': 'https://www.tiktok.com/@sapienz_en?lang=pt-BR',
    };

    window.open(tiktokProfileUrls[lang] || tiktokProfileUrls['english'], '_blank');
}


function toggleMenu(event) {
    const shareMenu = document.querySelector(".share-menu");
    const overlay = document.getElementById("overlay");

    if (menuIcon && !shareMenu.contains(event.target) && !menuIcon.contains(event.target) && shareMenuVisible) {
        shareMenu.style.display = "none";
        overlay.style.display = "none";
        shareMenuVisible = false;
    } else {
        shareMenu.style.display = shareMenuVisible ? "none" : "flex";
        overlay.style.display = shareMenuVisible ? "none" : "block";
        shareMenuVisible = !shareMenuVisible;
    }
}

function closeMenu() {
    const shareMenu = document.querySelector(".share-menu");
    const overlay = document.getElementById("overlay");

    shareMenu.style.display = "none";
    overlay.style.display = "none";
    shareMenuVisible = false;
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function shareOnSocialMedia(platform) {
    const url = 'https://summerloyal.com'; // Replace with your website URL
    let shareUrl;

    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        default:
            shareUrl = url;
    }

    window.open(shareUrl, '_blank');
}

function copyLink() {
    const url = 'https://summerloyal.com'; // Replace with your website URL
    navigator.clipboard.writeText(url)
        .then(() => {
            alert('Link copied to clipboard!');
        })
        .catch((err) => {
            console.error('Unable to copy link', err);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    // ...

    // Show Cookie Policies pop-up
    document.getElementById('cookie-preference-link').addEventListener('click', function () {
        document.querySelector('.popup-cookie').style.display = 'block';
        document.querySelector('.overlay').style.display = 'block';
    });

    // Close Cookie Policies pop-up when clicking outside the box
    document.querySelector('.overlay').addEventListener('click', closeCookiePopup);
});

function closeCookiePopup() {
    document.querySelector('.popup-cookie').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

// Add click event listener to the TikTok button
document.getElementById('tiktokButton').addEventListener('click', function (event) {
    // Prevent the click event from propagating to the body and closing the dropdown immediately
    event.stopPropagation();
    toggleTikTokDropdown();
});

// Close the dropdown when clicking outside of it
document.body.addEventListener('click', function () {
    const dropdown = document.getElementById('tiktokDropdown');
    const tiktokButton = document.getElementById('tiktokButton');
    const whatsappButton = document.querySelector('.whatsapp-button');

    if (dropdown.style.display === 'block' && tiktokButton.classList.contains('selected')) {
        dropdown.style.display = 'none';
        tiktokButton.classList.remove('selected');
        whatsappButton.style.marginTop = '10px'; // Reset the margin
    }
});

// Add click event listeners for TikTok language buttons
document.getElementById('tiktokPortugueseButton').addEventListener('click', function () {
    navigateToProfile('portuguese');
});

document.getElementById('tiktokEnglishButton').addEventListener('click', function () {
    navigateToProfile('english');
});
