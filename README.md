OMBORI
====
This is a social app that displays friends and information about them.

Features
----

- Display a custom loading component for 3 seconds.
- Fetch user data from https://reqres.in/.
- each user has :
  - an "avatar" field, which is the their display picture.
  - a "name" field, displaying the name of the user.
  - an "email" field, which lets you see their contact email.
- Displays fetched users in a grid (desktop) and scrollable view (mobile) that lazy loads more users when you've reached the bottom of the list (indicated by a smaller preloader).
- When there are no more users to load, a notification box pops up showing the message and automatically fades away.
- Web app is responsive, looks great and works well on different devices, especially various mobile screens.


### Extra features

- Adaptive UI with a sidebar for navigation within the app though there are no other pages (this resizes the user list on desktop and also works well on mobile).
- A basic fallback basic loading spinner (Preloader component), which could be user alternatively with the main loader.
- Unit and snapshot testing using Jest and Enzyme.


What i have learnt and achieved
----

- Building a production level app entirely using TypeScript (Not an expert on it but I tried to apply its basic principles into creating the app, seeing that this could be an important tool in the company’s work-flow).
- Implementing my components in .tsx and integrating Parcel with Typescript.
- Using interfaces to type check React component props
- Setting up Jest and Enzyme for a React Typescript project for unit and snapshot tests which required some additional setup and configuration.
- Further expanding my CSS abilities and creating the animated pre-loader.

Challenges
----

- Tried to reach a 100% code coverage and although I built all the components using as stateless function components using hooks. The Users component which controls the initial load, lazy loading, user display could not be adequately tested because of limitations of Jest and Enzyme to access internal state and properties in limited to a particular functional component and its hooks, hence the difficulty in testing for all use cases. 

FAQ
----

### How do I start the app?

Start with `npm i`. It will install all dependencies for the app to run smoothly.

Also run from your command line `npm run dev`. It'll launch the Ombori web app at port 1234.

### What libraries/frameworks, packages, tools did I use?

This app was built using ReactJS, Typescript, SASS and bundled with Parcel. Also did testing using Jest

### How do I run the tests

Run `npm test`. It will display all tests and results.

To show test coverage, run `npm test -- --coverage --watchAll`. It will show current code coverage

### Additional information

This web app was built with a simple UI in mind... Named it Ombori after the company...😁
