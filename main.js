try {
    observer.disconnect()
} catch (err) { }

parentNode = document.getElementsByClassName("_9tCEa")[0];
observer = new MutationObserver(onMsg);
observer.observe(parentNode, { childList: true });


function onMsg(e) {
    let msgNodes = [];
    e.filter(element => element.previousSibling != null) //Check that Node is actually a message
    //TODO check that message was sent in the last five minutes
    .forEach(element => { //Iterate through mutation records
            element.addedNodes.forEach(element => {
                msgNodes.push(element)
            })
        });


    let msgNodes = e[0].addedNodes[0];
    console.log(e)
    console.log(e[0].addedNodes)

    if (msgNode == undefined) { return };
    //if (msgNode.getElementsByClassName("message-in")[0] == undefined) { return } //Check to see if this is (1) actually a message (2) from another client
    let textNodes = msgNode.getElementsByClassName("emojitext")[0];
    //nodeListToMarkdown(textNodes.childNodes);

    console.log(textNodes);
    document.lastValue = textNodes;

};

/*function htmlToMarkdown(nodeList) {

    [];
    .textContent
    .nodeName
}*/