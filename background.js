chrome.tabs.onUpdated.addListener(function () {
    clearSearchHistoryOnExit();
});
  
function clearSearchHistoryOnExit() {
    chrome.history.deleteAll(function () {
        console.log("history cleared on Chrome");
    });
}