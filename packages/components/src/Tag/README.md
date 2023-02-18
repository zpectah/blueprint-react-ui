A tag is a compact element that serves the user as a choice or to perform an action.

### Import
```jsx static
import { Tag } from '@blueprint-react-ui/components';
```

### Basic usage
```jsx padded
<Tag>Default tag</Tag>
```

### Clickable usage
```jsx padded
<Tag onClick={(e) => console.log(e)}>Clickable tag</Tag>
```

### Dismissible usage
```jsx padded
<Tag onDismiss={(e) => console.log(e)}>Dismissible tag</Tag>
```

## DOM Structure

``` static
.Tag
  .Tag-label
  .Tag-action
```

## Classes

| Name                                  | Description                                 |
| ------------------------------------- | ------------------------------------------- |
| `.Tag`                             | Root tag class         |
| `.Tag.Tag--dismissible`                             | Dismissible tag class         |
| `.Tag.Tag--clickable`                             | Clickable tag class         |
| `.Tag-label`                             | Tag label class         |
| `.Tag-action`                             | Tag action class         |
