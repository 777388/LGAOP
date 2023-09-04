chrome.contextMenus.create({
    id: "LocalGlobalAnonymous",
    title: "LocalGlobalAnonymous",
    contexts: ["selection"]
});
chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "LocalGlobalAnonymous") {
        
        async function f(f){ f = (f) => {f = (f) => {f(f).push(f(f)+info.selectionText); console.log(f(f)); return f(f);}; return f(f);};};
        chrome.tabs.create({url: "https://"+info.selectionText.replace(" ", "")+String(f(f)).replace(/[^a-zA-Z0-9]/g, "")});
        //chrome.tabs.create({url: "javascript:fetch(`https://192.168.0.35:666`, {method: 'GET', headers: {'Connection': 'Upgrade', 'Upgrade': 'h3',},});"});
        //chrome.tabs.create({url: "javascript:fetch(`https://192.168.0.35:555`, {method: 'GET', headers: {'Connection': 'Upgrade', 'Upgrade': 'h3',},});"});
    };
});
