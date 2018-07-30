# General Philosophy

Marginal improvements are better than nothing. Some feedback might be provided to help you for the future, but most pull
requests will be merged. If a contributor's solution is less than ideal, then someone else can come in and improve it.
For example, you don't need to add tests for your bug fix if you don't want to. If you have any questions at all, feel free to open an issue!

# Pull Requests

If you are working on your first pull request, I highly recommend this free series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

We will accept all kinds of pull requests. Whether it is a grammar mistake in the README or a major feature (though make sure to create an issue for discussion before spending a bunch of time working on a PR).

**Also, if you see an open issue that you want to fix, make sure to drop a comment saying that you would like to take it on. If an issue has been claimed with no activity for 2 weeks, then someone else can claim it.**

Feel free to add yourself to the list of contributors!

Just execute `$ npm run contributors:add` and then follow the prompts.

# Code Breakdown

As of right now, this is a single page application that uses React Router for routing, and styled components for styling. The idea is that you first click on the book you want, then you click on the chapter of that book which routes you to the first question for that chapter. You guide your own experience. If you want to hop around, you can do that. If you want to quiz yourself and go through all of the questions in order in one go, you can do that too.

Before you do anything, I recommend setting up the project locally and messing around with it. Next, if you aren't familiar with React Router, take a look at the docs and some examples.

Now for the code...

All of the questions are stored in [src/data](src/data), imported into [App.js](src/App.js), and then sent to child components as needed. The Home page needs to know which books there are, each book page needs to know which chapters there are, and each chapter page needs to have the right list of questions.

The components are highly reusable. If all the book pages and chapter pages have the same format (with different data), then it would be unnecessary to have a component for every book and a component for every chapter.

We also don't need separate Route components in `App.js` for every single book and every single chapter...that would be a lot of routes. The basic format is that `App` handles all the routing, `Home` is the home page. `BookRouter` handles all the routing of each Book's children and `BookHome` renders each book page. `ChapterRouter` handles all the routing of each Chapter's routing and `ChapterHome` is tasked with rendering each chapter page (which currently is just the first book in the chapter).

We are using the new React Context API (ooooh aaaah) as our state management system currently, and we use localStorage to persist state.

# Contribution breakdown by time/skill level

Below are the best ways to contribute depending on your time available and skill level.

## Beginners / Don't know React / Limited time

### Questions

We need questions! There are 6 books with a total of 33 chapters. 10 questions per chapter would mean we need 330 questions! Here is the first question of the first chapter of the first book:

https://github.com/austintackaberry/ydkjs-exercises/blob/master/src/data/UpGoing/ch1.js

We are targeting approximately 10 questions per chapter. Some chapters will have more questions, and others will have less. Ideally, the denser chapters will be the ones with more questions, but that is not the case right now.

### Open issues

There are open issues for changing text color, changing eslint rules, and most importantly adding more questions!

## Intermediate / Learning React / Have some time

### Styling

Thanks to @nikrb, we now have styled components! The next major step is to make the styling responsive.

### Unit Testing

We have tests which is great, but our tests are fairly brittle because they test implementation details. There is an open issue to make them more robust, such that they keep us from breaking the app rather than keep us from developing new features.

## Advanced / Comfortable with React / Have more time

### State management

We have implemented state persistence via `localStorage`, but it would be nice to have an option to log in, so that the state can persist via multiple devices, browsers, etc.

### Sidebar Improvements

We are in the process of adding more functionality to our sidebar. Check out the issue via the link below to see how you can help!

# We need your help!

Check out [the issues](https://github.com/austintackaberry/ydkjs-exercises/issues) to see where you can contribute!
