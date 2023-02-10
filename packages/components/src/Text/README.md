A basic text component enabling the display of a specific type of text and its respective properties.

## Import
```jsx static
import { Text } from '@blueprint-react-ui/components';
```

## Basic usage
```jsx
<Text>
    Mattis aliquet, odio vehicula volutpat ut ante magna et sollicitudin, 
    nunc vulputate ultricies cras dictum. Molestie et, molestie cursus 
    pharetra bibendum molestie et nisi vestibulum
</Text>
```

## Usage as headings
```jsx { "props": { "className": "checks" } }
<Text as="h1">H1 heading text</Text>
<Text as="h2">H2 heading text</Text>
<Text as="h3">H3 heading text</Text>
<Text as="h4">H4 heading text</Text>
<Text as="h5">H5 heading text</Text>
<Text as="h6">H6 heading text</Text>
```

## Usage with simple text block
```jsx { "props": { "className": "checks" } }
<Text>
    Imperdiet vivamus, rhoncus erat mollis ornare lectus quis et condimentum proin, 
    <Text as="span">vivamus libero urna sodales</Text>. Quam scelerisque, ut nisl 
    mauris integer eget condimentum fusce vitae <Text as="em">bibendum lectus, 
    quisque id dolor dolor</Text> sit amet purus. Aenean nunc, nunc pellentesque 
    <Text as="small">porttitor adipiscing nulla tristique odio</Text> morbi, ligula 
    porta purus sed. Faucibus euismod, id dolor et <Text as="a" href="#">vehicula 
    vivamus urna aenean non nulla nibh</Text>, sagittis quam nunc enim in. Fusce 
    vitae vel arcu, efficitur sem placerat donec non nulla mauris ullamcorper, 
    ullamcorper <Text as="s">aliquet donec arcu. Semper curabitur</Text> eget  
    pulvinar feugiat venenatis vivamus, purus congue nulla luctus finibus.
</Text>
```
