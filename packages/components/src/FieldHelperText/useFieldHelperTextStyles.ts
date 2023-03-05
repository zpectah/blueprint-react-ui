import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { FieldHelperTextProps } from './types';
import { FIELD_HELPER_TEXT_SCOPE_NAME, FIELD_HELPER_TEXT_ROOT_CLASSNAME } from './const';
import getFieldHelperTextStyles from './styles';

export type UseFieldHelperTextStylesProps = Pick<FieldHelperTextProps, 'validationState'> & WithStyleProps;
export type UseFieldHelperTextStylesReturn = WithRequiredStyleProps;

export const useFieldHelperTextStyles = ({ style, className, validationState }: UseFieldHelperTextStylesProps): UseFieldHelperTextStylesReturn => {
    const { theme } = useThemeContext();

    const FIELD_HELPER_VALIDATION_STATE_CLASSNAME = `${FIELD_HELPER_TEXT_ROOT_CLASSNAME}--${validationState}`;

    const updatedClassName = classNamesFromList([
        FIELD_HELPER_TEXT_ROOT_CLASSNAME,
        validationState && FIELD_HELPER_VALIDATION_STATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: FIELD_HELPER_TEXT_SCOPE_NAME,
        styles: getFieldHelperTextStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
