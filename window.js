// window.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'displayScrapedData') {
        // Display scraped data in the window
        const scrapedDataContainer = document.getElementById('scrapedDataContainer');
        scrapedDataContainer.textContent = message.data;
    }
});
