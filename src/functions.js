var s = 1000 ;
var m = 60*s ;
var h = 60*m ;

var large_delay =  h*7 ; // 7 hours
var small_delay = 10*m ; // 10 minutes
var n_alarms = 10 ;

var main_player = null ;

function start(){
  main_player = document.getElementById('main_youtube_player') ;
  for(var i=0 ; i<n_alarms ; i++){
    var delay = large_delay + i*small_delay ;
    window.setTimeout('alarm()', delay) ;
  }
}

function alarm(){
  main_player.playVideo() ;
}
