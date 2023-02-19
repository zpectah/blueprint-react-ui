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
<Tag onDismiss={(e, ref) => console.log(e, ref)}>Dismissible tag</Tag>
```

### Clickable & Disabled usage
```jsx padded
<Tag onClick={(e) => console.log(e)} disabled>Clickable disabled tag</Tag>
```

### Dismissible & Disabled usage
```jsx padded
<Tag onDismiss={(e, ref) => console.log(e, ref)} disabled>Dismissible disabled tag</Tag>
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
| `.Tag`                                | Root tag class         |
| `.Tag.Tag--{size}`                    | Tag size class         |
| `.Tag.Tag--{color}`                   | Tag color class         |
| `.Tag.Tag--{variant}`                 | Tag variant class         |
| `.Tag.Tag--dismissible`                             | Dismissible tag class         |
| `.Tag.Tag--clickable`                             | Clickable tag class         |
| `.Tag-label`                             | Tag label class         |
| `.Tag-action`                             | Tag action class         |
