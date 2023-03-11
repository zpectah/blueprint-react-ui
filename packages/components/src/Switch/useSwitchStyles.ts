import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { SwitchBaseProps } from './types';
import { SWITCH_SCOPE_NAME, SWITCH_ROOT_CLASSNAME, SWITCH_LABEL_CLASSNAME } from './const';
import { getSwitchElementStyles } from './styles';

export type UseSwitchStylesProps = Pick<SwitchBaseProps, 'validationState'> & WithStyleProps;
export type UseSwitchStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useSwitchStyles = ({ style, className, validationState }: UseSwitchStylesProps): UseSwitchStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        SWITCH_ROOT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: SWITCH_SCOPE_NAME,
        styles: getSwitchElementStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        label: {
            className: SWITCH_LABEL_CLASSNAME,
        },
    };
};
