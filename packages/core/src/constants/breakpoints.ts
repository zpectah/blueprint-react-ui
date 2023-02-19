import { BreakpointKey } from '../enums';

export const BREAKPOINTS = {
    [BreakpointKey.xs]: 0,
    [BreakpointKey.sm]: 576,
    [BreakpointKey.md]: 768,
    [BreakpointKey.lg]: 992,
    [BreakpointKey.xl]: 1200,
    [BreakpointKey.xxl]: 1400,
};

export const CONTAINER_WIDTH = {
    [BreakpointKey.xs]: '100%',
    [BreakpointKey.sm]: '540px',
    [BreakpointKey.md]: '720px',
    [BreakpointKey.lg]: '960px',
    [BreakpointKey.xl]: '1140px',
    [BreakpointKey.xxl]: '1320px',
};
