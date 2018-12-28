# Forge

> 🏹 Unobtrusive and beautiful desktop app built to improve the development experience.

![Forge](https://raw.githubusercontent.com/jackrobertscott/forge/master/assets/Intro.png)

## Technologies

The Forge repository is a testing ground for a new sort of application design architecture.

### Desktop

The desktop application is built with [TypeScript](https://www.typescriptlang.org/) and is using:

- [Electron](https://electronjs.org/): enables desktop applications to be built using web technologies.
- [React](https://reactjs.org/): composes the interface layout and structure.
- [lumbridge](https://github.com/jackrobertscott/lumbridge): manages application state and routing.
- [monaco-editor](https://microsoft.github.io/monaco-editor/): the editor behind [Visual Studio Code](https://code.visualstudio.com/).

### Server

The server is also built with [TypeScript](https://www.typescriptlang.org/) and is using:

- [Node.js](https://nodejs.org/en/about/): enables JavaScript to be run as a server.
- [Apollo GraphQL](https://www.apollographql.com/): creates a GraphQL interface for server data.
- [MongoDB](https://www.mongodb.com/): a NoSQL database which works well with Node.js.
- [mongoose](https://mongoosejs.com/): a schema validator used when working with MongoDB.

## Architecture

There are very few good examples of good React application design and so we designed one. The front-end design system was the most challenging part. As such, we broke down the roles of the application into a specific modules.

- [Requests](https://github.com/jackrobertscott/forge/blob/master/docs/requests.md): concerned with saving and retrieving data from persistent data sources.
- [Logics](https://github.com/jackrobertscott/forge/blob/master/docs/logics.md): maps data from our requests to our graphical layouts.
- [Layouts](https://github.com/jackrobertscott/forge/blob/master/docs/layouts.md): concerned with the structure and composition of the data and visual components.
- [Visuals](https://github.com/jackrobertscott/forge/blob/master/docs/visuals.md): manages all the visuals on the page such as color, size, and spacing.

## Screenshots

|   |   |
|---|---|
| ![Forge Screenshot](https://uploads-ssl.webflow.com/5be925d4130794d6c2052d79/5c133ce8d3261ab085c37be4_Main%20Bundle%20Snippets%20Menu.png) | ![Forge Screenshot](https://uploads-ssl.webflow.com/5be925d4130794d6c2052d79/5c133ce7ae722d326f9d7e37_Main%20Bundle%20Snippets%20Inserting.png) |
| ![Forge Screenshot](https://uploads-ssl.webflow.com/5be925d4130794d6c2052d79/5c133ce8ae722dd2099d7e38_Edit%20Snippet.png) | ![Forge Screenshot](https://uploads-ssl.webflow.com/5be925d4130794d6c2052d79/5c133ce8d3261ab085c37be4_Main%20Bundle%20Snippets%20Menu.png) |
