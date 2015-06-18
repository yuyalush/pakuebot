var _ = require('lodash');
var responses = require('./responses');

module.exports = function (request, response, next) {

  // store username
  var userName = request.body.user_name;

  // create a payload to send back
  var botPaylod = {
    text: _.sample(responses) // use lodash's sample function to grab a random string from the responses array
  }

  // avoid an infinite loop
  if (userName !== 'slackbot') {
    return response.status(200).json(botPaylod);
  }
  else {
    return reponse.status(200).end();
  }

}