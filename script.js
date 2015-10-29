/**
 * Created by me on 10/28/15.
 */
var quotes = ["I can't even. -Me", "This is the best pizza! -Me", "I like pie. -Me", "There's nothing in the world like kitties. -Me", "The moon is high and I am dark. -Me", "This is the crack team that foils my every plan? I am *deeply* shamed. -Spike", "Who's the little fear demon? Come on, who's the little fear demon? -Xander","And where'd you get that accent? Sesame Street? Vun, two, three...three victims. Mwa ha ha! -Xander", "We attack the Mayor with hummus. -Oz","Whenever Giles sends me on a mission, he always says \"please.\" And afterwards I get a cookie.  -Buffy", "I am powerful and beautiful and I don't need you to complete me. And you're mean! -Harmony"];
var displayQuote = "";

$(document).ready(function(){
    twitterPrep();
    $("#title").html("Buffy and Friends Quote Generator");
    $("#GenerateQuote button").html("Generate");
    setQuote();
    formatQuote();
    $("#quote").html(displayQuote);
    $("#tweetButton a").attr("data-text", displayQuote);
    $("#GenerateQuote").click(function(){
        setQuote();
        formatQuote();
        twitterUpdate();
        $("#quote").html(displayQuote);
    });
});

//random number
function randomNumber(){
    return Math.floor(Math.random() * quotes.length);
}

function setQuote(){
    displayQuote = quotes[randomNumber()];
}
function formatQuote(){
    var index = displayQuote.indexOf('-');
    var spanQuote = displayQuote.slice(index);
    $("#quote span").html(spanQuote);
    console.log(index);
    console.log(spanQuote);
}

function twitterUpdate(){
    // Remove existing iframe
    $('#tweetButton iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-text', displayQuote)
        .attr('data-size', "large");
    $('#tweetButton').append(tweetBtn);
    twttr.widgets.load();
}

function twitterPrep(){
    window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", "twitter-wjs"));
}