// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Welcome!</h1>' +
      '<a href="/cuteness">' + '<h2>Cute Animals</h2>' + '</a>' +
      '<a href="/random-joke">' + '<h2>Random Joke</h2>' + '</a>')
  } else if (request.url === '/random-joke') {
    var randomNumber = Math.random()
    if (randomNumber < 0.3) {
      response.end(
        '<h1>Knock knock</h1>' +
        '<h2>Who\'s there?</h2>' +
        '<h2>The door</h2>' +
        '<a href="/">' + '<h2>Home</h2>' + '</a>')
    } else if (randomNumber < 0.6 && randomNumber > 0.3) {
      response.end(
        '<h1>Knock knock</h1>' +
        '<h2>Who\'s there?</h2>' +
        '<h2>Beats</h2>' +
        '<h2>Beats who?</h2>' +
        '<h2>Beats me</h2>' +
        '<a href="/">' + '<h2>Home</h2>' + '</a>')
    } else {
      response.end(
        '<h1>Knock knock</h1>' +
        '<h2>Who\'s there?</h2>' +
        '<h2>Double</h2>' +
        '<h2>Double who?</h2>' +
        '<h2>W!</h2>' +
        '<a href="/">' + '<h2>Return Home</h2>' + '</a>')
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute Dog</h1>' +
      '<img src="http://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Golden-Retriever-Pictures.jpg" alt="dog" width="400" height="250">' +
      '<a href="/">' + '<h2>Home</h2>' + '</a>')
  } else {
    response.end(
      '<h1>404 Error</h1>' +
      '<h2>The requested URL:</h2>' +
      '<h2>' + request.url + '</h2>' +
      '<h2>Was not found on this server.</h2>' +
      '<a href="/">' + '<h2>Home</h2>' + '</a>')
  }
})

// Listen on port 8080 (local), so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
