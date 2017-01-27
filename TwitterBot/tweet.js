
var Twitter = require('twitter');
var cred = require('./cred');
var Tweet = new Twitter(cred); //creates new instance of twitter api npm

// ------- twitter get/search --------//

function gotData(){
    
 }


// grabs tweets with the paramaters and runs the twit function 
    Tweet.get('users/show', params, twit);

// -------- twitter post a tweet -------//

function tweetIt(){
    // Paramaters
    var statusTweet = {
        status: 'It Worked!',
    }
    
    //          tweet APi       what to tweet //this grabs the response
    Tweet.post('statuses/update',statusTweet, twitPost);

    function twitPost(error, data, response) {
        
        if(error) {
            console.log(error);
        } else {
            console.log('You tweeted!');
        }
    }
}

gotData();



console.log(xhr.status);
console.log(xhr.statusText);
