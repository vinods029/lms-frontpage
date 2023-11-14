# LMS Frontend

### setup instructions

1. Clone the project

```
gh repo clone vinods029/lms-frontend

```

2. Move into the directory

```
cd lms-frontend

```

3. Install dependencies


```
npm i

```

4. Run the server

```
npm run dev

```

### How to setup tailwind in your project

1. Install tailwind and other dependecies[link] 
(https://tailwindcss.com/docs/guides/vite)

```
npm install -D tailwindcss postcss autoprefixer
```

2. create the 'tailwind.config.js' file

```
npx tailwindcss init -p

```

3. Add the files and extensions to tailwind config in the content property

```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

```

4. Add the tailwind directives on the top of index.css file

```
@tailwind base;
@tailwind components;
@tailwind utilities

```

5. Then run the server , tailwind should be integrated...

### Adding plugins and dependencies

```
 npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```