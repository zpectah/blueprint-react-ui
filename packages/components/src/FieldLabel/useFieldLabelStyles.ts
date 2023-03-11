import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { FieldLabelProps } from './types';
import { FIELD_LABEL_SCOPE_NAME, FIELD_LABEL_ROOT_CLASSNAME } from './const';
import { getFieldLabelStyles } from './styles';

export type UseFieldLabelStylesProps = Pick<FieldLabelProps, 'validationState'> & WithStyleProps;
export type UseFieldLabelStylesReturn = WithRequiredStyleProps;

export const useFieldLabelStyles = ({ style, className, validationState }: UseFieldLabelStylesProps): UseFieldLabelStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = `${STATE_CLASSNAME_PREFIX}${validationState}`;

    const updatedClassName = classNamesFromList([
        FIELD_LABEL_ROOT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: FIELD_LABEL_SCOPE_NAME,
        styles: getFieldLabelStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
