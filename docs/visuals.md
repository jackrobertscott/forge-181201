# Visuals

Specify how the display will be visually styled.

```ts
/**
 * This is using a little helper style library which provides
 * a number of valid properties and default values for a component.
 */
const Text = createStyle('div', {
    color: '#000',
    fontSize: '30px',
  })
  .extra('danger', {
    color: 'red',
    '&:hover': {
      color: 'lightRed',
    },
  })
  .extra('big', {
    fontSize: '30px',
    backgroundColor: 'green', // Error: property not in defaults
  });

/**
 * Set the children specifically as a string to prevent
 * incorrect usage of the component.
 */
interface ITextProps {
  children?: string;
  [name: string]: any;
}

export default FunctionComponent<ITextProps> = ({
  children,
  ...args,
}) => (
  <Text {...args}>{children}</Text>
);
```

Currently, every element can be styled with the same CSS properties. Instead, we want each element to have a specific purpose and matching set of properties.

- Text
  - Color
  - Font size
  - Text decoration
  - Text shadow
- Input
  - Color
  - Line height
  - Font size
  - Rows
- Shape
  - Height and width
  - Padding
  - Background color
  - Border and border radius
- Layout
  - Flex properties
  - Margin between items

The reason why we are splitting and limiting the responsibilities is because we want to reduce the amount of mental effort required to construct a layout. More ways of doing things leads to more mental effort to decide between options. Less ways of doing things ensures quick and consistent products.

## Navigation

- [Requests](https://github.com/jackrobertscott/forge/blob/master/docs/requests.md): concerned with saving and retrieving data from persistent data sources.
- [Logics](https://github.com/jackrobertscott/forge/blob/master/docs/logics.md): maps data from our requests to our graphical layouts.
- [Layouts](https://github.com/jackrobertscott/forge/blob/master/docs/layouts.md): concerned with the structure and composition of the data and visual components.
- [Visuals](https://github.com/jackrobertscott/forge/blob/master/docs/visuals.md): manages all the visuals on the page such as color, size, and spacing.