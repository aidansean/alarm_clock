var current_index = 0 ;
var delay = 100 ;
var alarms = [] ;
var main_player = null ;

function start(){
  main_player = Get('main_youtube_player') ;
  Get('button_hours_up'    ).addEventListener('click', increment_hours  ) ;
  Get('button_hours_down'  ).addEventListener('click', decrement_hours  ) ;
  Get('button_minutes_up'  ).addEventListener('click', increment_minutes) ;
  Get('button_minutes_down').addEventListener('click', decrement_minutes) ;
  
  Get('input_hours'  ).addEventListener('blur', normalise_hours  ) ;
  Get('input_minutes').addEventListener('blur', normalise_minutes) ;
  
  Get('input_hours'  ).value = '00' ;
  Get('input_minutes').value = '00' ;
  
  Get('button_add_alarm').addEventListener('click', add_alarm) ;
  
  heartbeat() ;
}

function add_alarm(){
  var h = parseInt(Get('input_hours'  ).value) ;
  var m = parseInt(Get('input_minutes').value) ; 
  var accept = true ;
  for(var i=0 ; i<alarms.length ; i++){
    if(alarms[i].hour==h && alarms[i].minute==m){
      accept = false ;
      break ;
    }
  }
  if(accept){
    current_index++ ;
    var alarm = new alarm_object(current_index, h, m) ;
    alarm.add_tr() ;
    alarms.push(alarm) ;
  }
  else{
    var div = Get('div_stahp') ;
    div.className = 'error' ;
    div.innerHTML = '! An alarm already exists for that time !' ;
    window.setTimeout(remove_message, 2500) ;
  }
}

function remove_message(){
  var div = Get('div_stahp') ;
  div.className = 'no_message' ;
  div.innerHTML = '&nbsp;' ;
}

function remove_alarm(evt){
  var index = parseInt(evt.target.id.split('_')[2]) ;
  for(var i=0 ; i<alarms.length ; i++){
    if(alarms[i].index==index){
      alarms[i].remove_tr() ;
      alarms.splice(i,1) ;
      break ;
    }
  }
}

function increment_hours(){
  var input = Get('input_hours') ;
  var h = parseInt(input.value)+1 ;
  if(h==24) h = 0 ;
  if(h<10) h = '0'+h ;
  input.value = h ;
}
function decrement_hours(){
  var input = Get('input_hours') ;
  var h = parseInt(input.value)-1 ;
  if(h<0) h = 23 ;
  if(h<10) h = '0'+h ;
  input.value = h ;
}
function increment_minutes(){
  var input = Get('input_minutes') ;
  var m = parseInt(input.value)+1 ;
  if(m==60) m = 0 ;
  if(m<10) m = '0'+m ;
  input.value = m ;
}
function decrement_minutes(){
  var input = Get('input_minutes') ;
  var m = parseInt(input.value)-1 ;
  if(m<0) m = 59 ;
  if(m<10) m = '0'+m ;
  input.value = m ;
}


function normalise_hours(){
  var input = Get('input_hours') ;
  var h = Math.min(23, Math.max(parseInt(input.value), 0)) ;
  if(h<10) h = '0'+h ;
  input.value = h ;
}
function normalise_minutes(){
  var input = Get('input_minutes') ;
  var m = Math.min(59, Math.max(parseInt(input.value), 0)) ;
  if(m<10) m = '0'+m ;
  input.value = m ;
}

function heartbeat(){
  update_time() ;
  check_alarms() ;
  window.setTimeout(heartbeat, delay) ;
}

function check_alarms(){
  var time = new Date() ;
  var h = time.getHours()   ;
  var m = time.getMinutes() ;
  for(var i=0 ; i<alarms.length ; i++){
    if(h==alarms[i].hour && m==alarms[i].minute){
      alarms[i].activate() ;
      break ;
    }
  }
}

function update_time(){
  var time = new Date() ;
  var h = time.getHours()   ;
  var m = time.getMinutes() ;
  var s = time.getSeconds() ;
  if(h<10) h = '0'+h ;
  if(m<10) m = '0'+m ;
  if(s<10) s = '0'+s ;
  Get('span_hours'  ).innerHTML = h ;
  Get('span_minutes').innerHTML = m ;
  Get('span_seconds').innerHTML = s ;
}

function deactivate_all_alarms(){
  for(var i=0 ; i<alarms.length ; i++){
    alarms[i].active = false ;
  }
}

function stop_alarm(){
  main_player.stopVideo() ;
  Get('div_stahp').innerHTML = '&nbsp; '
}

function alarm_object(index, hour, minute){
  this.index  = index ;
  this.hour   = hour ;
  this.minute = minute ;
  this.active = false ;
  this.activate = function(){
    if(this.active) return ;
    deactivate_all_alarms() ;
    main_player.stopVideo() ;
    main_player.playVideo() ;
    
    var button = Create('button') ;
    button.innerHTML = 'STOP ALARM!' ;
    button.addEventListener('click', stop_alarm) ;
    button.id = 'button_stahp' ;
    Get('div_stahp').appendChild(button) ;
    this.active = true ;
  }
  this.add_tr = function(){
    this.tr = Create('tr') ;
    this.tr.id = 'tr_alarm_' + this.index ;
    var td = Create('td') ;
    td.className = 'alarm_clock' ;
    var h = this.hour ;
    var m = this.minute ;
    if(h<10) h = '0'+h ;
    if(m<10) m = '0'+m ;
    td.innerHTML = h+':'+m ;
    this.tr.appendChild(td) ;
    
    var td = Create('td') ;
    var button = Create('button') ;
    button.id = 'button_removeAlarm_' + this.index ;
    button.className = 'remove_alarm' ;
    button.addEventListener('click', remove_alarm) ;
    button.innerHTML = 'Remove' ;
    td.appendChild(button) ;
    this.tr.appendChild(td) ;
    Get('tbody_alarms').appendChild(this.tr) ;
  }
  this.remove_tr = function(){
    this.tr.parentNode.removeChild(this.tr) ;
  }
}
function    Get(id  ){ return document.getElementById(id)  ; }
function Create(type){ return document.createElement(type) ; }
