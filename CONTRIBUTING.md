## Pull Requests

If you are working on your first pull request, I highly recommend this free series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

We will accept all kinds of pull requests. Whether it is a grammar mistake in the README or a major feature (though make sure to create an issue for discussion before spending a bunch of time working on a PR).

## Code Breakdown

As of right now, this is a single page application that uses React Router for routing, and Material UI for styling. The idea is that you first click on the book you want, then you click on the chapter of that book which routes you to the first question for that chapter. You then start answering questions and move on to the next question until you are done with the questions for that chapter.

Before you do anything, I recommend setting up the project locally and messing around with it. Next, if you aren't familiar with React Router, take a look at the docs and some examples.

Now for the code...

All of the questions are stored in [src/data](src/data), imported into [App.js](src/App.jsx), and then sent to child components as needed. The Home page needs to know which books there are, each book page needs to know which chapters there are, and each chapter page needs to have the right list of questions.

I tried to make the components as reusable as possible. If all the book pages and chapter pages have the same format (with different data), then it would be unnecessary to have a component for every book and a component for every chapter.

We also don't need separate Route components in `App.jsx` for every single book and every single chapter...that would be a lot of routes. The basic format is that `App` handles all the routing, `Home` is the home page. `BookRouter` handles all the routing of each Book's children and `BookHome` renders each book page. `ChapterRouter` handles all the routing of each Chapter's routing and `ChapterHome` is tasked with rendering each chapter page.

## We need your help!

Check out [the issues](https://github.com/austintackaberry/ydkjs-exercises/issues) to see where you can contribute!
