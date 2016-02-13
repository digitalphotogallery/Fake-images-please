// Generated by CoffeeScript 1.3.3
var clic, id;

clic = function(dom_id, width, height) {
  if (width == null) {
    width = 500;
  }
  if (height == null) {
    height = 300;
  }
  return dom_id.onclick = function() {
    window.open(dom_id.href, "", "width=" + width + ", height=" + height);
    return false;
  };
};

id = function(dom_id) {
  return document.getElementById(dom_id);
};

window.onload = function() {
  var facebook_id, tweet_id;
  tweet_id = id("tweet");
  facebook_id = id("facebook");
  if (tweet_id) {
    clic(tweet_id);
  }
  if (facebook_id) {
    return clic(facebook_id, 640, 280);
  }
};
