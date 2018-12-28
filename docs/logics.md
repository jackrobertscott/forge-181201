# Logics

Connect server requests with display.

```ts
/**
 * Create a react component with no JSX. This is because
 * JSX instinctively implies "structure" in the code and
 * the logic handler should be completely unaware of the
 * structure of the app. Therefore JSX is not allowed in
 * the logic components.
 */
export const SnippetSearch = () => {
  usePersistorInstance({
    instance: mutationDeleteSnippet,
    success: 'Snippet successfully deleted.',
    error: 'There was a problem deleteing the snippet.',
  });
  const {
    status: {
      loading
    },
    data: {
      userSnippets,
    },
  } = usePersistorInstance({
    instance: querySearchSnippets,
    execute: true,
    error: true,
  });
  return React.createElement(UserSnippetList, {
    data: {
      snippets: userSnippets,
      loading: loading,
    },
    handlers: {
      editSnippet,
      deleteSnippet,
    },
  });
};

export type IEditSnippetHandler = (
  snippet: IUserSnippetSingle
) => void;

/**
 * Deal with the snippets as they are selected.
 */
const editSnippet: IEditSnippetHandler = ({ id }) => {
  Router.navigate(`/snippets/${id}/edit`);
};

export type IDeleteSnippetHandler = (
  snippet: IUserSnippetSingle
) => void;

/**
 * These mutations are not related to layouts and therefore
 * they can be moved into a seperate file so that it's
 * easier for the bloody thing to be used...
 */
const deleteSnippet: IDeleteSnippetHandler = ({ id }) => {
  mutationDeleteSnippet.execute({
    variables: id,
  });
};
```

## Navigation

- [Requests](https://github.com/jackrobertscott/forge/blob/master/docs/requests.md): concerned with saving and retrieving data from persistent data sources.
- [Logics](https://github.com/jackrobertscott/forge/blob/master/docs/logics.md): maps data from our requests to our graphical layouts.
- [Layouts](https://github.com/jackrobertscott/forge/blob/master/docs/layouts.md): concerned with the structure and composition of the data and visual components.
- [Visuals](https://github.com/jackrobertscott/forge/blob/master/docs/visuals.md): manages all the visuals on the page such as color, size, and spacing.