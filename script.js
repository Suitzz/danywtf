document.addEventListener('DOMContentLoaded', function() {
    var tiktokButton = document.getElementById('tiktokButton');
    var youtubeButton = document.getElementById('youtubeButton');
    var twitterButton = document.getElementById('twitterButton');
    var instaButton = document.getElementById('instaButton');
    var twitchButton = document.getElementById('twitchButton');
    var onlyButton = document.getElementById('onlyButton');
    var patreonButton = document.getElementById('patreonButton');
    var tiktokModal = document.getElementById('tiktokModal');
    var youtubeModal = document.getElementById('youtubeModal');
    var twitterModal = document.getElementById('twitterModal');
    var instaModal = document.getElementById('instaModal');
    var twitchModal = document.getElementById('twitchModal');
    var onlyModal = document.getElementById('onlyModal');
    var patreonModal = document.getElementById('patreonModal');
    var closeButton = document.querySelector('.closeButton');
    var closeButton1 = document.querySelector('.closeButton1');
    var closeButton2 = document.querySelector('.closeButton2');
    var closeButton3 = document.querySelector('.closeButton3');
    var closeButton4 = document.querySelector('.closeButton4');
    var closeButton5 = document.querySelector('.closeButton5');
    var closeButton6 = document.querySelector('.closeButton6');

    // Updated openModal function with console log
    function openModal(modal) {
        console.log('Opening modal:', modal.id); // Debugging line
        var blur = document.getElementById('blur');
        blur.classList.add('active');
        modal.style.display = 'flex';
    }

    function closeModal(modal) {
        console.log('Closing modal:', modal.id); // Debugging line
        var blur = document.getElementById('blur');
        blur.classList.remove('active');
        modal.style.display = 'none';
    }

    // Event listeners for opening modals
    tiktokButton.addEventListener('click', function(event) {
        event.preventDefault();
        openModal(tiktokModal);
    });

    youtubeButton.addEventListener('click', function(event) {
        event.preventDefault();
        openModal(youtubeModal);
    });

    twitterButton.addEventListener('click', function(event) {
        event.preventDefault();
        openModal(twitterModal);
    });

    instaButton.addEventListener('click', function(event) {
        event.preventDefault();
        openModal(instaModal);
    });

    twitchButton.addEventListener('click', function(event) {
        event.preventDefault();
        openModal(twitchModal);
    });

    onlyButton.addEventListener('click', function(event) {
        event.preventDefault();
        openModal(onlyModal);
    });

    patreonButton.addEventListener('click', function(event) {
        event.preventDefault();
        openModal(patreonModal);
    });

    // Event listeners for closing modals
    closeButton.addEventListener('click', function() {
        closeModal(tiktokModal);
    });

    closeButton1.addEventListener('click', function() {
        closeModal(youtubeModal);
    });

    closeButton2.addEventListener('click', function() {
        closeModal(twitterModal);
    });

    closeButton3.addEventListener('click', function() {
        closeModal(instaModal);
    });

    closeButton4.addEventListener('click', function() {
        closeModal(twitchModal);
    });

    closeButton5.addEventListener('click', function() {
        closeModal(onlyModal);
    });

    closeButton6.addEventListener('click', function() {
        closeModal(patreonModal);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        var modals = [tiktokModal, youtubeModal, twitterModal, instaModal, twitchModal, onlyModal, patreonModal];
        if (event.target.className === 'popupModal') {
            modals.forEach(modal => closeModal(modal));
        }
    });
});
