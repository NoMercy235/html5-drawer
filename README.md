# styleco-vue

> An application which consists of a single canvas on which the user can draw by entering commands in an input element.

## Project Structure

This project was initialized using the `vue-cli` and therefore has the standard Vue structure. Leaving all the Vue-related details aside, the main parts of the project are located in `./src/components/`. There you will find the following:
- `Styleco.vue` - the main component which encapsulates the application
- `Command.vue` - the component which handles the processing of commands
- `Autocomplete.vue` - handles the user input and aids them with autocompletion
- `Canvas.vue` - handle drawing of shapes based on processed commands
- `utils.js` - a utility class used throughout the application

The main commands that the user can enter are:
- rectangle: rectangle x y width height [color=black]
- line: line x1 y1 x2 y2
- circle: circle x y radius [color=black]
- clear [color=black] - clears the entire canvas with the designated color

The `fill` command was not implemented due to time constraints. 

## Assumptions

The user should know the following:
- Pressing the `Enter` key will send whatever string is currently in the input field
- Pressing the `Tab` key will autocomplete *only* the main part of the command. If it's already completed, it won't do anything
- Pressing with the left mouse button on any of the suggested commands will act as if the user pressed the `Tab` key
- Errors are shown beneath the autocomplete field, not as a popup or toaster.
- Autocomplete should work only for parts of the commands that are static. In other words, it shouldn't autocomplete arguments (but a usage helper is shown)
- The canvas occupies the entire screen (even the space behind the autocomplete element)
- The canvas will be cleared when the screen is resized. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start
OR
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
