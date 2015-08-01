<?php
$title = 'Alarm clock' ;
$js_scripts  = array('youtube_jsapi.js' , 'functions.js') ;
$stylesheets = array('style.css') ;
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
  <div class="right">
    <div class="blurb center">
      <p>This page is an alarm clock.  Add as many alarms as you like and keep the page open to reminded of something.</p>
      <p id="p_time">Current time: <span id="span_hours"></span>:<span id="span_minutes"></span>:<span id="span_seconds"></span></p>
      <table id="table_alarms">
        <thead><tr><th class="alarm_clock">HH:MM</th><th class="alarm_clock">Status</th></tr></thead>
        <tbody id="tbody_alarms">
          <tr>
            <td class="alarm_clock">
              <input type="text" id="input_hours"/>
              <button id="button_hours_up">+</button>
              <button id="button_hours_down">-</button>
              <span id="span_color">:</span>
              <input type="text" id="input_minutes"/>
              <button id="button_minutes_up">+</button>
              <button id="button_minutes_down">-</button>
            </td>
            <td><button id="button_add_alarm">Add</button></td>
          </tr>
        </tbody>
      </table>
      <div id="div_stahp">&nbsp;</div>
      <div id="youtube_wrapper">
          <object class="youtube" width="400" height="225" id="main_youtube_player" type="application/x-shockwave-flash" data="https://www.youtube.com/v/DYhpmlEB-JI?version=3&amp;enablejsapi=1">
          <param name="movie" id="youtube_object_movie" value=""/>
          <param name="allowScriptAccess" value="always"/>
          <param name="allowFullScreen" value="true" />
        </object>
      </div>
    </div>
  <div>

<?php foot() ; ?>
