import { SyntheticEvent, MouseEvent } from 'react';

export type BaseEventProps<T extends SyntheticEvent> = T & HTMLElement;

export type ClickEventProps = {
    target: HTMLElement;
} & BaseEventProps<MouseEvent<HTMLElement>>;
