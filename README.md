# Implement screen by design created in Figma

[Link for the Figma design](<https://www.figma.com/file/0oxgD8jvXjIsG4t0h7NGFc/Homaze---Development-(Copy)?node-id=4404%3A2314&t=HxBxezi2fJMng9Sc-0>)

## Deployment of the pixel perfect project:

[Link to the website](https://master--relaxed-cajeta-a885d4.netlify.app/)

## Istructions:

“Works contractor” is a person that handles/manages projects in the home remodeling area. A contractor has a web app based dashboard where he could manage his projects.

We want to implement a new screen for him to give him the ability to look up his existing projects based on some criteria and represent them in a friendly-user way.

Available projects are listed and represented in “tile” view. Those projects are ordered by last updated date (from new to old). Each tile represents information about a customer, like its name and its unique ID, address in a predefined format, rooms names included in the project (ex.:Kitchen, Bathroom, Living Room), last updated date of the project in format MM.DD.YYYY, the total cost of the project in currency format and project state.

Additionally, the screen has a look-up functionality. The action is being performed in real-time while the contractor enters some text in the textbox. Please note, in order to activate the search, need to insert at least 2 characters. Contractor could search by name of the customer or its address.
Filtered “tiles” will be presented on the screen in the default order. If no results - no tile is present on the screen, it is blank.

### Notes:

1. Implemented design should be “pixel-perfect”
2. Code should be clear, have performance optimized, no console log printings
3. CSS should be well-defined and have clear names
4. You’re welcome to use any CSS/React plugin library
5. Preferable to use Redux (preferable) or another app state container library
6. Preferable to use React Hooks
7. Consider the screen is used by desktop and by mobile users.
8. Data should be fetched from some mock API (mocki.io, mockapi.io etc)
   JSON response [found here](https://codebeautify.org/jsonviewer/y232b92c2)

## Run the project with local host:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
