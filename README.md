# Fitness center Cardio Sport website

## What is this project
Small website for fitness center Cardio Sport.

## Built with
 - React - Frontend library.
 - TypeScript - Programming language.
 - Visual Studio Code - Used for coding.
 - Git - Used for version control of the code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

1. Builds the app for production to the `build` folder.
2. Runs post- script. Necessary for Surge deployment.
    1. Renames `index.html` file to `200.html`.
    2. Moves `.surgeignore` and `CNAME` files to the `build` folder.

### `npm run deploy`

0. Runs pre- script.
    1. Runs the `npm run build` script.
1. Changes directory to `build`.
2. Deploys the app on Surge via `surge` command.