# End-to-End Testing Workshop

End-to-end automated testing with real web browsers is one of the the most effective methods of ensuring that our product works for the people who rely on us to list their short term rentals.

Using WebDriver.io and other great technologies, this workshop will help us to build more confidence in the code we release, improve the experience for users, and ensure that the most critical app paths are protected. We want our customers to achieve their goals, and to protect and improve our company's revenue streams.

_This workshop was first given at Expedia Group's UI Developer Conference in London, June 2018._

<!-- TOC -->

- [Required pre-work](#required-pre-work)
- [Setting up your environment](#setting-up-your-environment)
  - [Node.js](#nodejs)
  - [A Code Editor (IDE)](#a-code-editor-ide)
  - [Browsers](#browsers)
  - [Git](#git)
- [Running the Workshop Example](#running-the-workshop-example)
  - [Clone the workshop repo from GitHub](#clone-the-workshop-repo-from-github)
  - [Exercises](#exercises)

<!-- /TOC -->

## Required pre-work

**If you want to be ahead of the game, get your environment setup before you arrive at the workshop!**  You can do this by completing each section of the instructions in this main README file.

We will spend some time reviewing the steps to [setting up your development environment](#setup-your-environment) and [cloning the workshop repo from GitHub](#clone-the-workshop-repo-from-github), but we won't have time to download & install everything you'll need.  Please come prepared!

## Setting up your environment

_Here's what you'll need to get started ..._

### Node.js

I'm using **v8.9.4**, but any of the "Latest LTS: Carbon" releases should be fine.

To check which version you have installed, simply run:

```bash
node --version
```

For maximum fun with various versions of Node.js, I recommend [installing NVM](https://github.com/creationix/nvm) for managing your installed/active versions of Node.

### A Code Editor (IDE)

[Visual Studio Code](https://code.visualstudio.com/) is popular these days.  Lots of folks prefer [Atom](https://ide.atom.io/).  And [Sublime Text](https://www.sublimetext.com/) is awesome, too.  You'll just want a nice code editor to do syntax highlighting and other handy code stuff for you.

### Browsers

We may be using both Chrome and Firefox, so please have both installed.

### Git

It's probably pre-installed on your Mac, or there's a ton of tutorials for installing git on the interwebs, just Google for `install git on mac`.

**Pro tip:** Make life easy for yourself and get a GUI for Git.  [Sourcetree](https://www.sourcetreeapp.com/) is free and highly useful if you're a more visual person, or if you just want to keep your command line use to a minimum.

## Running the Workshop Example

The code has a sample web server and application, and some starter code for our end-to-end test exercises.  It was created using Facebook's [Create React App](https://github.com/facebook/create-react-app).

Each exercise is in its own folder, and we'll work through them one by one.  For each, there will be our starter code, as well as the full solution.

The example app called "Verbo" exists in the `/verbo` directory.  We'll run our e2e tests against this app running on http://localhost:3000.

### Clone the workshop repo from GitHub

#### CLI

From your terminal, in whichever directory where you prefer to create your apps:

```bash
git clone git@github.com:grantnorwood/expedia-e2e.git
```

#### Sourcetree

From the _Repository Browser_ or _File_ menu, click _New ..._ and choose to clone a new repo.

The SSH url to the repo is: `git@github.com:grantnorwood/expedia-e2e.git`

✅ _**Congratulations, your pre-work is done!**  But of course you are free to look ahead to the exercises we'll be working on ... you'll save yourself some time if you get the example application in [exercise-1](exercise-1) up and running before the workshop begins._

## Exercises

_Let's go!_

- [Exercise 1: Setup the example application](exercise-1)
- [Exercise 2: Install WebDriver.io and write your first test](exercise-2)
- [Exercise 3: Using the `wdio` test runner](exercise-3)
- [Exercise 4: Adding `mocha` and `chai`](exercise-4)
- [Exercise 5: Practice with selectors and commands](exercise-5)
- [Exercise 6: The Page Object Pattern](exercise-6)
- [Exercise 7: Personas and paths](exercise-7)
- [Exercise 8: Level up](exercise-8)
