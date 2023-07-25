# web-copilot-demo

This is a simple web app built using github copilot

## Instructions

### Before the demo

1. Create a react project in any way you like:

```sh
npm create vite@latest web-copilot-demo --template react
cd web-copilot-demo
npm install
npm run dev
```

1. Clean up `src/App.jsx` and `src/App.css` to simplify them for the demo.
1. Make sure you have Github Copilot installed as an extension and you have signed in.

Now you should be set!

### Create a button

1. Create a new empty file in `src/Button.jsx`.
1. Add this comment:  `// Write a button component` but don't press return yet.
1. Copilot will make a suggestion. Point this out to the students. 
1. Press `tab` to accept the suggestion,  and edit it if needed: ```// Write a button component with the label "Click me!".```
1. Press return. Copilot will start a new comment and suggest what to do when clicked.
1. Edit the line to say a click should trigger an alert.
1. Press return twice and Copilot will begin suggesting code.
1. Use tab to accept suggestions. Press return twice and wait a moment if Copilot isn't making suggestions. 
1. Once you have the button, add it to `App.jsx`.
1. Run the demo (for example: `npm run dev`)

### Change the button to use a click handler and have state

The AI might not give you what you want the first time, and it's normal to change the request
until you get something you like. We can erase the old button and try again.

1. Erase all but the first comment. (You can retype it too, if you like.)
1. Add a new line saying the button should count its clicks. ```// When the button is clicked, display the number of times it has been clicked.```. Then have Copilot make its suggestion.

*Note* You might have to experiment with the words and make multiple tries. This is normal. It's easy to confuse.
If Copilot keeps creating the same code over and over, remove the end of a line and accept its suggestion or add your own.

### Add some CSS

You can ask Copilot for some CSS. Try ```# Make button 400 pixels wide and 50 pixels high```. 

(Since CSS doesn't have comments, you'll need to remove that line before you run the app.)

## If Copilot becomes confused

When Copilot gets confused, it will keep suggesting instructions:

```
# Add a button class
# It should be 400px wide and 50px tall
# It should have a border-radius of 5px
# It should have a background-color of #646cff
# It should have a font-size of 1.2em
```

In this example, everything under the size was a sugegstion. 

If this happens, go back to what you typed, delete a little off the end, and it should suggest what you just deleted. Press tab to accept that, then press return twice to skip the next suggestion.

Have fun exploring Copilot!




