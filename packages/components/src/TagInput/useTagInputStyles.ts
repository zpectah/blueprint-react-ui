import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { TagInputBaseProps } from './types';
import { TAG_INPUT_SCOPE_NAME, TAG_INPUT_ROOT_CLASSNAME } from './const';
import { getTagInputStyles } from './styles';

export type UseTagInputStylesProps = Pick<TagInputBaseProps, 'validationState'> & WithStyleProps;
export type UseTagInputStylesReturn = WithRequiredStyleProps;

export const useTagInputStyles = ({ style, className, validationState }: UseTagInputStylesProps): UseTagInputStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        TAG_INPUT_ROOT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TAG_INPUT_SCOPE_NAME,
        styles: getTagInputStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
