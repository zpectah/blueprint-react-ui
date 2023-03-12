import { SyntheticEvent, MouseEvent } from 'react';

export type BaseEventProps<T extends SyntheticEvent> = T & HTMLElement;

export type ClickEventProps = {
    target: HTMLElement;
} & BaseEventProps<MouseEvent<HTMLElement>>;

export type ChangeEventProps = {
    target: HTMLElement;
} & SyntheticEvent<(HTMLInputElement | HTMLTextAreaElement), KeyboardEvent>;

