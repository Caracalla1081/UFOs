# UFOs
## Overview of Project
As a data journalist with the freedom to write about topics she wants to, Dana jumped on the opportunity to write about two things she loves; her hometown of McMinnvillle, Oregon and UFOs; a topic she has been interested in since childhood. McMinnville is known for its UFO sightings and even hosting an annual gathering of UFO enthusiasts, so combining the two loves of hers will give Dana the opportunity to do some data analysis and work on her javascript and html skills.
 
Having been given a javascript containing data such as countries, states, and type of UFO sightings; Dana has posted her article online, while at the same time creating a table that shows UFO sightings based on date all in an html page. Dana would now like to provide more in-depth analysis of UFO sightings in her table by adding filters for city, state, country and UFO shape that will then also post information on the duration of the sighting and any comments associated.

## Webpage Operation Instructions
### Selecting the UFO Sigting Text
- Enter the date of the sighting you are looking for in the date format of d/mm/yyy
![Enter Text in Date Filter](https://github.com/Caracalla1081/UFOs/blob/313f4a51cba12c4556a66f4623feae2854f46afa/Images/Enter%20Date%20Filter.png)

- Enter the city of the sighting you are looking for in all lowercase format
![Enter Text in City Filter](https://github.com/Caracalla1081/UFOs/blob/9327f02d3c23bd54faa571c8814fb300daaaa5c3/Images/Enter%20City%20Filter.png)

- Enter the state of the sighting you are looking for in all lowercase and two state abbreviation format
![Enter Text in State Filter](https://github.com/Caracalla1081/UFOs/blob/9327f02d3c23bd54faa571c8814fb300daaaa5c3/Images/Enter%20State%20Filter.png)

- Enter the country of the sighting you are looking for in all lowercase and two country abbreviation format
![Enter the Text in Country Filter](https://github.com/Caracalla1081/UFOs/blob/9327f02d3c23bd54faa571c8814fb300daaaa5c3/Images/Enter%20Country%20Filter.png)

- Enter the shape of the sighting you are looking for in all lowercase format
![Enter the Text in Shape Filter](https://github.com/Caracalla1081/UFOs/blob/9327f02d3c23bd54faa571c8814fb300daaaa5c3/Images/Enter%20Shape%20Filter.png)

## Summary
After completing the update to Dana's webpage, there are significant improvements with the added filters allowing a user to gather better insight, but having said that this new design does still have its drawbacks, and could use some further improvements.
### Drawback
One such drawback is that the parameters about what can be entered into the new fields is not guided by any rules that the user is aware of. For instance a user does is not made aware if they either entered into a field text that is truly not found within the dataset, or if they mispelled it. A user would then need to scrolldown the entire list to confimd, once removing the fitlered critera from the search; something not feasible on a much larger set of data.

### Recommendations
- I would recommend building off of the drawback listed above and add into the for loop the "else" that returns an error message or alert that lets the user know that the text or datetime they entered is not valid, whether it because it does not exist, or because the text was not in all lowercase. This is particulary true of the "shape" field, as there is now clear understanding of what shapes are included in the data, thus the user could type in "semi-circle" and have no idea if it is valid or not.
- - A dropdwon list for some of the fields, specifically "shape" would be useful.
- - More flexibility in the way text is entered would also be useful. A user should be able to enter city, state, or country text starting with a capital letter.

- I would recommend adding a clear filters button at the bottom of the filters.
- - Currently a user has to individually clear each field to reset them. This is annoying and tiresome if a user is actually using the table to look up multiple different filter criteria.
