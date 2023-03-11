import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { TextInputBaseProps } from './types';
import { TEXT_INPUT_SCOPE_NAME, TEXT_INPUT_ROOT_CLASSNAME } from './const';
import { getTextInputStyles } from './styles';

export type UseTextInputStylesProps = Pick<TextInputBaseProps, 'validationState'> & WithStyleProps;
export type UseTextInputStylesReturn = WithRequiredStyleProps;

export const useTextInputStyles = ({ style, className, validationState }: UseTextInputStylesProps): UseTextInputStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        TEXT_INPUT_ROOT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TEXT_INPUT_SCOPE_NAME,
        styles: getTextInputStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
