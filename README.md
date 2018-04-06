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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
