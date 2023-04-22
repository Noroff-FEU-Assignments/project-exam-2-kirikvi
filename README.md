# projectExam
 
## Setting up and running the project
This project is created with create-react-app. To install CRA, see the documentation here https://create-react-app.dev/

To start the project locally, write "npm start" in the terminal.

## Special instructions
You have to register to be able to login and get access to the social media content. 

### Registering
You must register with a "@stud.noroff.no" or "@noroff.no" email. For example: "my_username@stud.noroff.no".

### Logging in
After successfully registering you may now log in. 

### Create, update and delete post
After logging in you may create a post. To edit or delete a post you have created, click on the single post. You will see three dots in the top right corner. Click on them to display the "update or delete"-form.

### Comment on post
To make a comment on a post, click on the post you want to comment. This will display the specific post, and you can write a comment below the post.

### Updating the avatar and banner
Click on your profile picture in the navigation to go to your user profile. You will see three dots in the top right corner. Click on them to display the "update"-form.

If you want to delete the avatar and/or banner, simply remove the URL in the form and click "upload media".

## Report
### Project planning and management
I started out by making a Kanban board using trello.com. This gave me a detailed view of what needs to be done. After that I made a Gantt chart using clickup.com to see how much time I had on each task.
### Design
Since I did't know what the target group was, I wanted to keep the design minimalistic, clean and "fit for all". I chose the colours because "colour psychology" blue, purple, white, yellow.

I don't know the name of the company, and did not want to spend too much time coming up with a name and logo, so I went with "socialize" and created a simple logo and favicon using the font "omnes" that I chose for the whole design on the website.

I made a style guide and a prototype for mobile screens.

I made a checklist on what to include in the design based off the "required user stories" in the project's read me file. This was a good way to know what I had to have in mind when designing all the different pages of the application. 

I browsed pinterest for inspiration, and I was also inspired by facebook's and instagram's simple design. 

As experienced in earlier projects, the design changed a bit during the process, which is ok.

### Technical
The technical part is still where I am struggling the most, so this project exam has given me a lot of challenges, which has been both fun and frustrating. 

I wanted to implement all the required tasks on the user stories checklist before focusing on improwing the user experience and user flow. I believe this was a good decision, as I could spend the last couple of weeks improving the styling and user flow knowing the site had all required functions. 

Coming up to the deadline, the site still has a lot of things I would improve, but I am pleased with what I have achieved so far.

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

### Deploying the site
It would have been great if it would work perfectly, but of course it did not. 


## References
Noroff Lessons

Noroff API Documentation

Noroff Discord Forum

TK. "Dropdown Menu - React Tutorial for Beginners" [Url (16.04.2023): https://www.youtube.com/watch?v=KROfo7vuIGY]

TK. "Click Outside to Close - React Hook" [Url (16.04.2023): https://www.youtube.com/watch?v=HfZ7pdhS43s]

useHooks. useLocalStorage. [Url: https://usehooks.com/useLocalStorage/]