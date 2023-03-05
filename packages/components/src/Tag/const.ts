import { GLOBALS } from '../../../core/src';

export const TAG_SCOPE_NAME = 'Tag';

export const TAG_ROOT_CLASSNAME = `${GLOBALS.COMPONENT_CLASSNAME_PREFIX}${TAG_SCOPE_NAME}`;
export const TAG_LABEL_CLASSNAME = `${TAG_ROOT_CLASSNAME}-label`;
export const TAG_ACTION_CLASSNAME = `${TAG_ROOT_CLASSNAME}-action`;
export const TAG_CLICKABLE_CLASSNAME = `${TAG_ROOT_CLASSNAME}--clickable`;
export const TAG_DISMISSIBLE_CLASSNAME = `${TAG_ROOT_CLASSNAME}--dismissible`;

export const TAG_DEFAULT_ELEMENT_TYPE = 'div';
export const TAG_DEFAULT_ELEMENT_ROLE = 'button';
export const TAG_DEFAULT_CLOSE_LABEL = 'Close';
export const TAG_DEFAULT_COLOR = 'primary';
export const TAG_DEFAULT_VARIANT = 'filled';
export const TAG_DEFAULT_SIZE = 'md';