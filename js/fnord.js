var random, toShow, count = 0;

function fnord() {
    var words = [
        "apple", "fnord", "objectivism", "foulcout", "calf", "what",
        "TODO", "add", "more", "words", "this", "has", "a", "hidden", "message"];
    return words[Math.floor(Math.random() * words.length)];
}

$('html').click(function(e) {
    random = Math.random();
    count += random < Math.PI / (13 * 13)
        ? 1 + Math.random()
        : random > .89898989 
          ? Math.E 
          : 1;

    if (random < .12) {
        count = Math.round(count) - 2;
    }
    
    toShow = Math.random() < .129032 
        ? fnord()
        : count.toString();
    
    $(".eros")
        .html('<p>' + toShow + '</p>')
        .css('color', Math.floor(Math.random() * 16777215).toString(16))
        .css("margin-top", Math.floor(Math.random() * screen.height / 2).toString())
        .css("margin-left", Math.floor(Math.random() * screen.width / 2).toString())
        .show()
        .delay(1500)
        .fadeOut();
});