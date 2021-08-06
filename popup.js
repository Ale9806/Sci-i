var button = document.getElementById("GoToPage");
button.onclick = function() {
    chrome.tabs.getSelected(null,function(tab) {
        var tablink = tab.url;
        let myNewUrl = "https://sci-hub.se/" + tablink;
        chrome.tabs.update(undefined, { url: myNewUrl });
    });
    
    
    
}