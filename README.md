# projectExam
 
## Setting up and running the project

## Special instructions

## Report
### Project planning and management
I started out by making a Kanban board using trello.com. This gave me a detailed view of what needs to be done. After that I made a Gantt chart using clickup.com to see how much time I had on each task.
### Design
Since I don't know what the target group is, I wanted to keep the design minimalistic, clean and "fit for all". I chose the colours because "colour psychology" blue, purple, white, yellow.

I don't know the name of the company, and did not want to spend too much time coming up with a name and logo, so I went with "socialize" and created a simple logo and favicon using the font "omnes" that I chose for the whole design on the website.

I made a style guide and a prototype for mobile screens.

### Technical
The technical part is still where I am struggling the most. I prefer to not use frameworks and do everything "from scratch", so I spent some time figuring out how to use react bootstrap for both content, functionality and styling. After encountering some problems with react bootstrap, I decided to only focus on getting all the content before trying to style anything.

I wanted to implement all the required tasks on the user stories checklist before focusing on improwing the user experience and user flow.

#### API
I followed the Noroff lessons and Noroff API on how to get the access token when registering and logging in, and it was a huge relief when it finally worked. After that I spent a lot of time creating the different files and pages to get all the data and content.

After spending a whole day styling the project, something went wrong. I am not sure why, but the local storage cleared itself and I lost access to the API content. I was still able to use the login form to get the correct response wich would give me access to the social endpoints, but it would not save it in Local storage. I did rewatch the lessons on how to save it in local storage with the useLocalStorage hook, but I could not find a reason why my code was not working anymore. I asked my fellow students on Discord if anyone was experiencing the same. 

I did not get any answers from anyone, so I decided to start all over again while trying to find the problem.

It was a good idea, as I ended up with tidier code and got everything up and running again. I believe the problem was with the useLocalStorage hook and my placement of the <Authprovider> in the App.js file.

#### Create, update and delete post
At first I wanted to include the tags array when creating a new post, but I could not figure out how to write the code to get the correct response. It did not work when trying to publish the post, so I ended up excluding the tags from the form and finally the post was created. I decided to just leave out the tags from there, and if I got time later I would look back into it, but as its not required I had to prioritize the required tasks first.

I followed the Noroff lesson on how to update and delete a post, and I successfully was able to update and delete the post I created. 

I wanted to create a drop down "edit" function, and found TK's tutorials "Dropdown menu - React Tutorial for Beginners" and "Click Outside to Close - React Hook" very helpful.

#### Follow, reaction and comment
I followed the Noroff API documentation, and both follow/unfollow and reacting went fine, but when trying to comment on a post with a PUT request (as described in the API documentation) I received a 404 error message. I wrote a question in the Noroff discord forum about this, and got a tip to try making a POST request instead. It worked when changing it from a PUT to a POST request, which made sense.

#### CSS Modules
I decided to go for CSS Modules for styling. I have not used CSS Modules before, so I would like some feedback on where to improve.

I ran into some problems styling the forms and buttons. When adding styles the buttons and forms stopped working.

I'm finding this way of styling quite difficult, because I need to make a lot of different files in different folders, and I am not mastering the art of making tidy folders and files. If time I will see if I can find a tutorial on how to do this better.


## References
Noroff Lessons

Noroff API Documentation

Noroff Discord Forum

TK. "Dropdown Menu - React Tutorial for Beginners" [Url (16.04.2023): https://www.youtube.com/watch?v=KROfo7vuIGY]

TK. "Click Outside to Close - React Hook" [Url (16.04.2023): https://www.youtube.com/watch?v=HfZ7pdhS43s]

useHooks. useLocalStorage. [Url: https://usehooks.com/useLocalStorage/]