function generate() {
    var quotes = { 
        "- Hitch -" : '“Life is not the amount of breaths you take. It is the moments that take your breath away.”',
        "-  The Secret Life of Walter Mitty -" : '“To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the purpose of life.”',
       "- 10 Things I Hate About You -": '“Don`t let anyone ever make you feel like you don`t deserve what you want.”'
    }
    var movies = Object.keys(quotes);
    var movie = movies[Math.floor(Math.random() * movies.length)];
    var quote = quotes[movie];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("movie").innerHTML = movie;


}