// background.js

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('Extension installed!');
    } else if (details.reason === 'update') {
        console.log('Extension updated!');
    }
});

// Event listener for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'scrapeWebsite') {
        // Perform web scraping or any other background task here
        // For demonstration purposes, let's send a dummy response
        const scrapedData = 'This is scraped data.';
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            chrome.windows.create({
                url: 'window.html',
                type: 'popup',
                width: 300,
                height: 200
            });
            chrome.tabs.sendMessage(activeTab.id, { action: 'displayScrapedData', data: scrapedData });
        });
    }
});
