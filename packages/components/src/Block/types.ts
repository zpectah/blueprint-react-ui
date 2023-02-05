import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

export type BlockProps<C extends ElementType> = {
    children?: ReactNode;
    as?: C;
} & ComponentPropsWithoutRef<C>;
