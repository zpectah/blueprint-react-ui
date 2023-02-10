import { SyntheticEvent, MouseEvent as ReactMouseEvent } from 'react';

export type BaseEventProps<T extends SyntheticEvent> = T & HTMLElement;

export type ClickEventProps = {
    target: HTMLElement;
} & BaseEventProps<ReactMouseEvent<HTMLElement>>;
