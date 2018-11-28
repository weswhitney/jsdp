var bookOfLove = (function(){
  
  var privateSongs = "boy"

  var privateFunc = function() {
    console.log('private function');
  }
  
  return {

    pubSongs: "smell the roses",

    getSongs: function() {
      return {
        title: privateSongs
      }
    }
  }

})();

module.exports = bookOfLove
