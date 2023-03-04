document.getElementById('btn').addEventListener('click', () => {
    chrome.tabs.query( {active:true, currentWindow:true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {message: 'getname'}, (content) => {
        });
    });
})