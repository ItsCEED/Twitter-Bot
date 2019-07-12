var Twit = require('twit')
var T = new Twit({
    consumer_key:         ' ... ',
    consumer_secret:      ' ... ',
    access_token:         ' ... ',
    access_token_secret:  ' ... ',
})
// Twitter ID's of: Train, Serena Williams, Michelle Obama, Beyonce, the National Science Foundation and WeRateDogs
var users = ["26589987", "409486555", "31239408", "2463721", "16245822","4196983835",];
var stream = T.stream('statuses/filter', {follow: users});
stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
        })
    }
})

