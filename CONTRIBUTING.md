# Pull Requests

If you are working on your first pull request, I highly recommend this free series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

We will accept all kinds of pull requests. Whether it is a grammar mistake in the README or a major feature (though make sure to create an issue for discussion before spending a bunch of time working on a PR).

**Also, if you see an open issue that you want to fix, make sure to drop a comment saying that you would like to take it on. If an issue has been claimed with no activity for 2 weeks, then someone else can claim it.**

Feel free to add yourself to the list of contributors!

Just execute `$ npm run contributors:add` and then follow the prompts.

# Code Breakdown

As of right now, this is a single page application that uses React Router for routing, and Material UI for styling. The idea is that you first click on the book you want, then you click on the chapter of that book which routes you to the first question for that chapter. You then start answering questions and move on to the next question until you are done with the questions for that chapter.

Before you do anything, I recommend setting up the project locally and messing around with it. Next, if you aren't familiar with React Router, take a look at the docs and some examples.

Now for the code...

All of the questions are stored in [src/data](src/data), imported into [App.js](src/App.js), and then sent to child components as needed. The Home page needs to know which books there are, each book page needs to know which chapters there are, and each chapter page needs to have the right list of questions.

I tried to make the components as reusable as possible. If all the book pages and chapter pages have the same format (with different data), then it would be unnecessary to have a component for every book and a component for every chapter.

We also don't need separate Route components in `App.js` for every single book and every single chapter...that would be a lot of routes. The basic format is that `App` handles all the routing, `Home` is the home page. `BookRouter` handles all the routing of each Book's children and `BookHome` renders each book page. `ChapterRouter` handles all the routing of each Chapter's routing and `ChapterHome` is tasked with rendering each chapter page.

# Contribution breakdown by time/skill level

Below are the best ways to contribute depending on your time available and skill level.

## Beginners / Don't know React / Limited time

### Questions

We need questions! There are 6 books with a total of 33 chapters. 10 questions per chapter would mean we need 330 questions! And I have only written one...and it is here:

https://github.com/austintackaberry/ydkjs-exercises/blob/master/src/data/UpGoing/ch1.js

You could follow the same format and add questions for Up & Going Ch1 to that array. Or you could add questions to other chapters and other books.

### Open issues

Currently, there are a couple open issues for misspellings / incorrect numberings that require some digging to find the bug, but once you find where it is, it should be pretty quick

## Intermediate / Learning React / Have some time

### Styling

I didn't put too much thought into the styling. I had only worked with CSS and Sass. I thought it would be neat to try something new, so I went with Material UI, but if someone wants to make styling improvements, then great!

Also, it'd be good if the styling was responsive.

### Unit Testing

There are no tests right now, so some basic unit testing would probably be a good idea.

### Adding features

* onSubmit, show the correct answer and update the user state.
* Add explanations and a way to display them to the user

## Advanced / Comfortable with React / Have more time

### State management

We need to determine how we are going to manage state and if we are going to save it to local storage and/or some kind of backend. Maybe it would make sense to allow the user to save their progress with login credentials if they want, and if not, then save it to local storage?

Maybe add a sidebar that keeps track of the user's progress

### Testing

Some testing integration and perhaps end to end testing to make sure that the questions get imported correctly and render properly would be a good idea. It would probably be good to set up some basic unit testing as well.

# We need your help!

Check out [the issues](https://github.com/austintackaberry/ydkjs-exercises/issues) to see where you can contribute!
