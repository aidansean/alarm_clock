<?php
$title = 'Alarm clock' ;
$js_scripts  = array('youtube_jsapi.js' , 'functions.js') ;
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
  <div class="right">
    <div class="blurb center">
      <p>This page is an alarm clock.</p>
      <div id="youtube_wrapper">
          <object width="640" height="390" id="main_youtube_player" type="application/x-shockwave-flash" data="https://www.youtube.com/v/DYhpmlEB-JI?version=3&amp;enablejsapi=1">
          <param name="movie" id="youtube_object_movie" value=""/>
          <param name="allowScriptAccess" value="always"/>
          <param name="allowFullScreen" value="true" />
        </object>
      </div>
    </div>
  <div>

<?php foot() ; ?>
