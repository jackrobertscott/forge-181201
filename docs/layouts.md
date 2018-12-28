# Layouts

Determine the display arrangement.

```ts
type ISnippetProps = DataComponent<{
  snippet: IUserSnippetSingle
}, {
  editSnippet: IEditSnippetHandler
  deleteSnippet: IDeleteSnippetHandler
}>;

/**
 * It's quite nice to destructure props on multiple lines like
 * this.. it makes it super easy to read.
 *
 * Also, don't destructure database object properties so that
 * it's clear what the data is related to when using it e.g.
 * No: const { id, contents } = snippet; doSomething(id, contents);
 * Yes: doSomething(snippet.id, snippet.contents);
 */
const Snippet: FunctionComponent<ISnippetProps> = ({
  data: {
    snippet,
  },
  handlers: {
    editSnippet,
    deleteSnippet,
  }
}) => {
  const handleEditSnippet = () => editSnippet(snippet);
  const handleDeleteSnippet = () => deleteSnippet(snippet);
  return (
    <Shape use="card">
      <Layout use="rows" key={snippet.id}>
        <Text use="big">{snippet.name}</Text>
        <Text use="second">{snippet.contents}</Text>
        <Shape onClick={handleEditSnippet}>
          <Text>Edit</Text>
        </Shape>
        <Shape use="remove bold" onClick={handleDeleteSnippet}>
          <Text>Remove</Text>
        </Shape>
      </Layout>
    </Shape>
  );
}

type ISnippetListProps = DataComponent<{
  snippets: IUserSnippets,
}>;

/**
 * This is concerned only about layout and consists of *no*
 * visuals or styling.
 */
export const SnippetList: FunctionComponent<ISnippetListProps> = ({
  data: {
    snippets,
  },
  handlers,
}) => {
  return (
    <Layout use="list">
      snippets.map(snippet => (
        <Snippet
          data={{ snippet }}
          handlers={handlers}
        />
      ));
    </Layout>
  );
};
```

## Navigation

- [Requests](https://github.com/jackrobertscott/forge/blob/master/docs/requests.md): concerned with saving and retrieving data from persistent data sources.
- [Logics](https://github.com/jackrobertscott/forge/blob/master/docs/logics.md): maps data from our requests to our graphical layouts.
- [Layouts](https://github.com/jackrobertscott/forge/blob/master/docs/layouts.md): concerned with the structure and composition of the data and visual components.
- [Visuals](https://github.com/jackrobertscott/forge/blob/master/docs/visuals.md): manages all the visuals on the page such as color, size, and spacing.