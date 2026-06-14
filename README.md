# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Setting Up Tailwind CSS in Create React App

## Prerequisites
- Node.js v16+
- Create React App project

## Installation Steps

### 1. Install Tailwind CSS v3 (pinned versions)
```bash
npm install -D tailwindcss@3.4.17 postcss@8.4.47 autoprefixer@10.4.20
```

### 2. Generate Tailwind config
```bash
./node_modules/.bin/tailwindcss init -p
```

### 3. Create PostCSS config (important — do this manually)
```bash
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF
```

### 4. Update `tailwind.config.js`
```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 5. Replace `src/index.css` with
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Start the app
```bash
npm start
```

## ⚠️ Common Pitfalls
- **Do not use Tailwind v4** — it is not compatible with CRA, use v3 only
- **Always create `postcss.config.js` manually** — the `init -p` command may not generate it correctly
- **Restart the dev server** after any config changes

# Netflix GPT
-create React App
-Configured TailwindCss
-Header
-Routing of App
-Login Form
-signup Now
-Form validation(email validation regex - https://saturncloud.io/blog/how-can-i-validate-an-email-address-using-a-regular-expression/)
-useRef Hook
-Firebase setup
-deploying our app to production
-Create Signup User Account
-Implement Sign In User Api
-Create Redux Store with userSlice
-Implemented Signout
-Update Profile 
-Fetch from TMDB Movies
-Bug Fix: Sign up user dispalyName and profile picture update
-Bug Fix: if the user is not logged in Redirect /browse to Login Page and vice-versa
-Unscribed to the onAuthStateChanged callback
-Add hardcoded values to the constant file***
-Register TMDB API & create an app & get access token
-Get Data from TMDB now playing movies list API
-Custom GHook for Now Playing Movies
-Create movieSlice
-Update Store with movies data
-Planning for MainContainer & Secondary Container
-Fetch Data for Trailer Video
-Update Stor with Trailer Video Data
-Embedded the Youtube Video and make it autoplay and mute
-Tailwind Classes to amke it Main Container look awesome
-Build Secondary Component
-Build Movie List
-Build Movie Card
-TMDB Image CDN URL
-MAde the Browse page amazing with Tailwind CSS
-usePopularMovies Custom Hook
-GPT Search Feature


### Features
Login/Signup
    -Sign In/Sign up Form
    -redirect to Browse Page
-Browse (after authentication)
    -Header
    -Main Movie
        -Tailer in Background
        -Title & Description
        -Movie Suggestions
            -MovieList * N
-NetflixGPT
    -Search Bar
    -Movie Suggestions

