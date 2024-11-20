// SpeakHello.js
var helloSpeaker = (function() {
    var speakWord = "Hello";
    return {
        speak: function(name) {
            console.log(speakWord + " " + name); // Logs the greeting to the console
        }
    };
})();