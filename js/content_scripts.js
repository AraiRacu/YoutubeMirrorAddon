chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    $('#movie_player').toggleClass('mirroring');
});