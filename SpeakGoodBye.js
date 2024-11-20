// SpeakGoodBye.js
var byeSpeaker = (function() {
    var speakWord = "Good Bye";
    return {
        speak: function(name) {
            console.log(speakWord + " " + name); // Logs the farewell to the console
        }
    };
})();