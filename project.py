from project_module import project_object, image_object, link_object, challenge_object

p = project_object('alarm_clock', 'Alarm clock')
p.domain = 'http://www.aidansean.com/'
p.path = 'alarm_clock'
p.preview_image    = image_object('%s/images/project.jpg'   %p.path, 150, 250)
p.preview_image_bw = image_object('%s/images/project_bw.jpg'%p.path, 150, 250)
p.folder_name = 'aidansean'
p.github_repo_name = 'alarm_clock'
p.mathjax = True
p.tags = 'Tools'
p.technologies = 'CSS,HTML,JavaScript,YouTube'
p.links.append(link_object(p.domain, 'alarm_clock/', 'Live page 1'))
p.introduction = 'This project was written very quickly one evening to give myself an emergency alarm clock after my phone was stolen.  As a result it is not very user friendly.'
p.overview = '''This project simply plays a YouTube video after a fixed period of time.  The alarm plays a fixed number of times at regular intervals.'''

p.challenges.append(challenge_object('Ideally, the user should be able to change the settings for the alarm.', 'I didn\'t have time to add a user interface (as doing so would have caused me to lose sleep!)', 'To be revisited.'))
