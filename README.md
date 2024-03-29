# Project Exam 2
![Image)](https://github.com/Noroff-FEU-Assignments/project-exam-2-kirikvi/assets/71313020/fc97b634-3da2-4d24-810d-615767150794)

A school project exam to practice the skills learnt during the education.

Demo site - https://socialize-demo.netlify.app/

## Description
The task was to create a brand new front end for a social media brand application. I was to plan, design and build a modern front end social media application using this API https://noroff-api-docs.netlify.app/social-endpoints/authentication.

The client has specified the following requirements in the form of *User Stories*:
1. A user with a `stud.noroff.no` email may register
2. A registered user may login
3. A registered user may update their avatar and banner
4. A registered user may logout
5. A registered user may view a list of `Posts`
6. A registered user may view a list of `Profiles`
7. A registered user may view a single `Post` by `id`
8. A registered user may view a single `Profile` by `name`
9. A registered user may create a `Post`
10. A registered user may update a `Post` they own
11. A registered user may delete a `Post` they own
12. A registered user may create a `Comment` on any `Post`
13. A registered user may `react` to any `Post` with an emoji
14. A registered user may `follow` and `unfollow` another `Profile`

## Built with
- React
- CSS modules

## Getting started
### Installing
This project is created with create-react-app. To install CRA, see the documentation here https://create-react-app.dev/

### Running
To start the project locally, write "npm start" in the terminal.

```
npm start
```

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

## Contact
www.kirikvistnes.no
kirikvistnes@gmail.com

## Report
### Project planning and management
I started out by making a Kanban board using trello.com. This gave me a detailed view of what needs to be done. After that I made a Gantt chart using clickup.com to see how much time I had on each task. I made a new Gantt chart using Github projects, but I did not find it very intuitive to use. It was shutting down and giving me error messages each time I wanted to add a new item/task, and even if I set the access to public it still wasnt accessable for everyone. I found out that if I created drafts instead of issues, it was visible for other users.

I have been using the Trello/Kanban board the most, as I find it clearer and simpler to use. I understand that I could have added more checkpoints and lists to both charts, especially if I were to work in a team, but it worked fine for me now as I have been working alone with this project exam.
### Design
Since I did't know what the target group was, I wanted to keep the design minimalistic, clean and "fit for all". I wanted an almost white background and an almost black primary text colour to provide good contrast for reading (Kadavy, D. p.249). 

I chose the colour pallette because I wanted to give the user the feeling of trust, stability, professionalism and wisdom. Both blue and purple is associated with these "feelings", and I went with a blue/purple colour in different tints (Pixel77.com, 2011). The colour yellow is an attention grabber and can make the user curios, so I wanted to have a yellow colour in the colour pallette, but I did not implement it in the finished design.

I don't know the name of the company, and did not want to spend too much time coming up with a name and logo, so I went with "socialize" and created a simple logo and favicon using the font "omnes" that I chose for the whole design on the website. I know that I should have at least three different fonts, but for this minimalistic application I wanted to go for the omnes font in different weights instead.

I made a checklist on what to include in the design based off the "required user stories" in the project's read me file. This was a good way to know what I had to have in mind when designing all the different pages of the application. Considering this, I made a style guide and a prototype for mobile screens. 

I made a few navigation icons in adobe illustrator, and made sure the icons had the same thickness, width and height for consistency.

I browsed pinterest for inspiration, and I was also inspired by facebook's and instagram's simple design. 

As experienced in earlier projects, the design changed a bit during the process, which is ok. Some of the changes are:

- The navigation is at the top of the site instead of the bottom on smaller screens.
- You must click on the specific post to react or comment (I would change this if I had more time) instead of doing it on the main page.
- I did not use the yellow colour from the style guide.
- The banner on the profile pages does not stretch across the full screen width, but remains the same width as the page layout width.

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

#### Unsplash images
I have used images on unsplash.com as media sources for the avatar, banner and post media.

### Deploying the site to Netlify
It would have been great if it would work perfectly, but of course it did not. I read the documentation on how to deploy a react app to both github pages and netlify, but it did not work.

I found a very helpful video by Code With Arjun on YouTube. After following along it finally worked. Yay!

I encountered a few errors on the hosted demo which works perfectly on my local host. When trying to comment or like a post or trying to follow another user, I get a 404 "Page not found" error message telling me that the URL does not exist, but when updating the page and going to that specific post or profile you can tell that the comment was published or the user was followed. I am not sure why it does not work as it should, but I am afraid to make the code not working at all if I change it, so I'd rather leave it for now and hopefully get some feedback.

### Last finishes
- Removing the console.logs
- Tidying the files for unused functions and styling
### What I would improve
If I had more time I would
- Make a single follow/unfollow button instead of having one of each
- Letting the user react and comment to a post on the main feed (and not having to click on the specific post first)
- Wathcing more CSS modules tutorials to get a better understanding of it, and to make more reusable styles.
- Make a CSS module for the dropdown menus.

## References
- Adobe Illustrator
- Adobe Xd
- Code with Arjun. "Deploy React Application using Netlify|Deploy manually using build folder" [URL (29.04.2023):"https://www.youtube.com/watch?v=tVzpC5_AC8M ]
- facebook.com (for inspiration)
- instagram.com (for inspiration)
- Kadavy, D (2011). "Design <for> Hackers /*reverse-engineering beauty*/ (p.249).
- Noroff Lessons
- Noroff API Documentation
- Noroff Discord Forum
- Pinterest [Url: https://no.pinterest.com/search/pins/?q=social%20media%20ux%20design&rs=typed]
- Pixel77(2011) "Color Psychology in Web Design - Big Websites Case Studies". [Url: (30.04.2023): https://pixel77.com/color-psychology-web-design-color-schemes-big-websites/]
- TK. "Dropdown Menu - React Tutorial for Beginners" [Url (16.04.2023): https://www.youtube.com/watch?v=KROfo7vuIGY]
- TK. "Click Outside to Close - React Hook" [Url (16.04.2023): https://www.youtube.com/watch?v=HfZ7pdhS43s]
- unsplash.com 
- useHooks. useLocalStorage. [Url: https://usehooks.com/useLocalStorage/]

