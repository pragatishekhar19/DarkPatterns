// popup.js

document.getElementById('detectButton').addEventListener('click', function() {
    // Send a message to background.js to initiate web scraping
    chrome.runtime.sendMessage({ action: 'scrapeWebsite' });
});
