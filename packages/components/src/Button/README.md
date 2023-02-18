The button as a basic building block of all actions and selections.

## Import
```jsx static
import { Button } from '@blueprint-react-ui/components';
```

## Usage
### Default
```jsx
<Button>Button contained</Button>
<Button variant="outlined">Button outlined</Button>
<Button variant="text">Button text</Button>
```
```jsx
<Button>Button primary</Button>
<Button color="secondary">Button secondary</Button>
<Button color="info">Button info</Button>
<Button color="success">Button success</Button>
<Button color="warning">Button warning</Button>
<Button color="error">Button error</Button>
```
```jsx
<Button size="sm">Button small</Button>
<Button>Button medium</Button>
<Button size="lg">Button large</Button>
```

### Button as an anchor element
```jsx
<Button as="a" href="#">Button example</Button>
```

### Button as custom component
It can be used as a styled wrapper for `Link` from **ReactRouter**.
```jsx static
<Button as={Link} to="#">Button example</Button>
```

### Button with icons
```jsx spaced
<Button iconBefore={<span>icon</span>}>Button example</Button>
<Button iconAfter={<span>icon</span>}>Button example</Button>
<Button iconBefore={<span>icon</span>} iconAfter={<span>icon</span>}>Button example</Button>
```

### Full width Button
```jsx
<Button fullWidth>Button example</Button>
```

### Button with loading state
```jsx
<Button loading>Button example</Button>
```

### Button with disabled state
```jsx
<Button disabled>Disabled Button</Button>
```

### Button with custom class
```jsx
<Button className="my-custom-class">Button example</Button>
```

### Button with custom styles
```jsx
<Button style={{ padding: '1rem' }}>Button example</Button>
```

## Structure

- `.Button`
  - `.Button-icon.Button-icon--before`
  - `.Button-text`
  - `.Button-icon.Button-icon--after`
  - `.Button-preloader`
  

## Classes

| Name                                  | Description                                 |
| ------------------------------------- | ------------------------------------------- |
| `.Button`                             | Root button class         |
| `.Button.Button--{size}`              | Button size class         |
| `.Button.Button--{color}`             | Button color class         |
| `.Button.Button--{variant}`           | Button variant class         |
| `.Button.Button--fullwidth`           | Button with width as 100% of its parent         |
| `.Button.is-loading`                  | Button with loading state         |
| `.Button.is-disabled`                 | Button with disabled state. It does not replace, but only complements the disabled state of the element itself.         |
| `.Button-icon`                        | Button icon element wrapper class         |
| `.Button-icon.Button-icon--before`    | Button icon before element wrapper class         |
| `.Button-icon.Button-icon--after`     | Button icon after element wrapper class         |
| `.Button-text`                        | Button text node element class         |
| `.Button-preloader`                   | Button preloader element class         |

