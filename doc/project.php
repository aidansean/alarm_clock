<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/alarm_clock" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=alarm_clock" ;
$project = new project_object("alarm_clock", "Alarm clock", "https://github.com/aidansean/alarm_clock", "http://aidansean.com/projects/?tag=alarm_clock", "alarm_clock/images/project.jpg", "alarm_clock/images/project_bw.jpg", "This project was written very quickly one evening to give myself an emergency alarm clock after my phone was stolen.  As a result it is not very user friendly.", "Tools", "CSS,HTML,JavaScript,YouTube") ;
?>