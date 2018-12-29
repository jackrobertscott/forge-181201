# Requests

Declare data to be received from server.

```ts
/**
 * Create an interface which will make it easier to use in
 * other component props and throughout our TS app.
 */
export interface IUserSnippetSingle {
  id: string;
  name: string;
  contents: string;
  language?: string;
}
export interface IUserSnippets {
  userSnippets: IUserSnippetSingle[];
}

/**
 * Export the persistor instance so that other logic components
 * can refresh or re-execute it somewhere else in the code base.
 */
export const querySearchSnippets = apolloPersistor.on.query({
  graphql: `
    query UserSnippets {
      userSnippets {
        id
        name
        contents
        language
      }
    }
  `,
});
```

Declare mutations to be made on data.

```ts
/**
 * Create an interface which will make it easier to use in
 * other component props and throughout our TS app.
 */
export interface IDeleteSnippet {
  deleteSnippet: {
    id?: string;
  };
}

/**
 * Export the persistor instance so that other logic components
 * can refresh or re-execute it somewhere else in the code base.
 */
export const mutationDeleteSnippet = apolloPersistor.on.mutation({
  graphql: `
    mutation DeleteSnippet($id: String!) {
      deleteSnippet(id: $id) {
        id
      }
    }
  `
});
```

## Navigation

- [Requests](https://github.com/jackrobertscott/forge/blob/master/docs/requests.md): concerned with saving and retrieving data from persistent data sources.
- [Logics](https://github.com/jackrobertscott/forge/blob/master/docs/logics.md): maps data from our requests to our graphical layouts.
- [Layouts](https://github.com/jackrobertscott/forge/blob/master/docs/layouts.md): concerned with the structure and composition of the data and visual components.
- [Visuals](https://github.com/jackrobertscott/forge/blob/master/docs/visuals.md): manages all the visuals on the page such as color, size, and spacing.
