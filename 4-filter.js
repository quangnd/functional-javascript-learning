function getShortMessages(messages) {

    return messages.filter(function (m) {
        return m.message.length < 50;
    }).map(function(mess){
        return mess.message;
    })

}

module.exports = getShortMessages;