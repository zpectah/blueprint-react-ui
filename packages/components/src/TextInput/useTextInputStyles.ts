import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
    WithValidationState,
    getValidationClassName,
} from '../../../core/src';
import {
    TEXT_INPUT_SCOPE_NAME,
    TEXT_INPUT_ROOT_CLASSNAME,
    TEXT_INPUT_CONTROL_CLASSNAME,
    TEXT_INPUT_ADORNMENT_CLASSNAME,
    TEXT_INPUT_ADORNMENT_START_CLASSNAME,
    TEXT_INPUT_ADORNMENT_END_CLASSNAME,
    TEXT_INPUT_WITH_ADORNMENT_START_CLASSNAME,
    TEXT_INPUT_WITH_ADORNMENT_END_CLASSNAME,
} from './const';
import { getTextInputStyles } from './styles';

export type UseTextInputStylesProps = WithStyleProps & WithValidationState & {
    isStartAdornment?: boolean;
    isEndAdornment?: boolean;
};
export type UseTextInputStylesReturn = {
    root: WithRequiredStyleProps;
    control: {
        className: WithRequiredStyleProps['className'];
    };
    adornmentStart: {
        className: WithRequiredStyleProps['className'];
    };
    adornmentEnd: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useTextInputStyles = (props: UseTextInputStylesProps): UseTextInputStylesReturn => {
    const { style, className, validationState, isStartAdornment, isEndAdornment } = props;
    const { theme } = useThemeContext();

    const updatedRootClassName = classNamesFromList([
        TEXT_INPUT_ROOT_CLASSNAME,
        isStartAdornment ? TEXT_INPUT_WITH_ADORNMENT_START_CLASSNAME : '',
        isEndAdornment ? TEXT_INPUT_WITH_ADORNMENT_END_CLASSNAME : '',
        className,
    ]);
    const updatedControlClassName = classNamesFromList([
        TEXT_INPUT_CONTROL_CLASSNAME,
        getValidationClassName(validationState),
    ]);
    const updatedAdornmentStartClassName = classNamesFromList([
        TEXT_INPUT_ADORNMENT_CLASSNAME,
        TEXT_INPUT_ADORNMENT_START_CLASSNAME,
    ]);
    const updatedAdornmentEndClassName = classNamesFromList([
        TEXT_INPUT_ADORNMENT_CLASSNAME,
        TEXT_INPUT_ADORNMENT_END_CLASSNAME,
    ]);

    useUniqueStyles({
        id: TEXT_INPUT_SCOPE_NAME,
        styles: getTextInputStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedRootClassName,
        },
        control: {
            className: updatedControlClassName,
        },
        adornmentStart: {
            className: updatedAdornmentStartClassName,
        },
        adornmentEnd: {
            className: updatedAdornmentEndClassName,
        },
    };
};
