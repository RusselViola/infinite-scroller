var page = 2;
var tweetFormat = function(){
  return '<li class="tweet"><div class="body">' + tweet.text + '</div><div class="user">' + tweet.username + '</div></li>';
};

$(document).ready(function() {
  $('.more-sprouts').hide();
	var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
			$('#loading').show();

			$.ajax({
				method: 'GET',
				url: '/tweets.json',
        data: {page: page},
				success: function(tweetList) {
          for (tweet of tweetList) {
          $('.tweets').append(tweetFormat);
          $('.loading').hide();
         }
				}
			});
      page++;
		}
	});
});
