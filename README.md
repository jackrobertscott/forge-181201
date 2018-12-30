# Forge

> 🏹 Unobtrusive and beautiful desktop app built to improve the development experience.

[See the website](https://useforge.co/) to download the latest version.

![Forge](https://raw.githubusercontent.com/jackrobertscott/forge/master/assets/Preview.png)

| Search by Name | Use ${1:Variables} | Edit in Seconds |
|:---:|:---:|:---:|
| ![Forge Screenshot](https://uploads-ssl.webflow.com/5be925d4130794d6c2052d79/5c133ce8d3261ab085c37be4_Main%20Bundle%20Snippets%20Menu.png) | ![Forge Screenshot](https://uploads-ssl.webflow.com/5be925d4130794d6c2052d79/5c133ce7ae722d326f9d7e37_Main%20Bundle%20Snippets%20Inserting.png) | ![Forge Screenshot](https://uploads-ssl.webflow.com/5be925d4130794d6c2052d79/5c133ce8ae722dd2099d7e38_Edit%20Snippet.png) |

## Overview

Forge is a tool designed to aid 🏥 developers with basic development tasks such as creating and finding code snippets. While designing Forge, we wanted to address the following difficulties faced when you only use a code editor while developing.

**Problems with current tools:**

1. 🤔 Snippet shortcuts are hard to remember e.g. `rccp` or `conc`.
2. 😧 Creating custom snippets is really hard (usually you need to create an entire JSON page).
3. 😠 Settings don't save across your computers.
4. 😩 You can't preview a snippet before you start using it.
5. 😳 You can't search snippets by keywords.

Forge was designed to overcome these issues by providing a developer tool which complements your code editor.

**Features of Forge:**

1. 🔥 Doesn't interrupt workflow; the app pops up above your editor and hides when you're done.
2. 😻 Easier to use; search snippets by full name *or* shortcut.
3. 💃 Preview your snippets before using them.
4. 🏆 Use `${1:variables}` inside your snippets in the same way you use VS Code snippets.
5. 🏎 Code in style with Forge's the sleek and modern user interface.

**Shortcut:** press `CmdOrCtrl+Shift+D` to toggle the Forge app's visibility.

## Technologies

The Forge repository is a testing ground for a new sort of application design architecture. We have made Forge open source so that you can preview how we use and built this application using the lastest in app development technologies.

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
