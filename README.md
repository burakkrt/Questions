
# Questions-VanillaJavascript

A web application where you can solve beginner-level English questions, store data in the browser's memory without using any database, and continue from where you left off in other time zones.

### What is Vanilla Javascript?
Vanilla JavaScript refers to using plain Javascript without any additional libraries or frameworks.

### What does this project aim for ?
It processes question objects created in Object Oriented Programming (OOP) structure with vanilla Javascript, just like other javascript libraries, in component structure. This avoids code confusion and simplifies future updates.
In addition, with Local Storage, the data is stored in JSON type and allows the user to continue from where they left off when they return to the application in other time zones.

[**Go Live**](https://burakkrt.github.io/Questions-VanillaJavascript/)
## Technologies used and dependencies

- [**Javascript**](https://www.javascript.com) ES5, ES6 (Class)
- [**Tailwind CSS**](https://tailwindcss.com) 3.2.7
- [**Prettier**](https://prettier.io) 2.8.4 (Prettier Plugin Tailwindcss 0.2.4)



## Run it on your PC

Clone the project

```bash
  git clone https://github.com/burakkrt/Questions-VanillaJavascript.git
```

Go to the project directory

```bash
  cd Questions-VanillaJavascript
```

Install required packages

```bash
  npm install
```

Run Tailwind CSS

```bash
  npm run tailwind
```

Finally, you can edit on your local server.

## Optimization

The simultaneous loading of the created questions caused slowdowns in the browser used. As a solution, only 50 questions will be displayed to the user at the beginning, then additional questions will start to be loaded as the browser scrolls down with the javascript scroll event.

https://user-images.githubusercontent.com/99482906/225287872-2a3c0875-1ce1-47f3-9a0c-cb8a62634fec.mp4

## Responsive

https://user-images.githubusercontent.com/99482906/225288688-c28c8899-61d2-446c-80c1-d2982cb3ffae.mp4
