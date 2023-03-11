import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, STATE_CLASSNAME_PREFIX } from '../../../core/src';
import { TextAreaBaseProps } from './types';
import { TEXT_AREA_SCOPE_NAME, TEXT_AREA_ROOT_CLASSNAME } from './const';
import { getTextAreaStyles } from './styles';

export type UseTextAreaStylesProps = Pick<TextAreaBaseProps, 'validationState'> & WithStyleProps;
export type UseTextAreaStylesReturn = WithRequiredStyleProps;

export const useTextAreaStyles = ({ style, className, validationState }: UseTextAreaStylesProps): UseTextAreaStylesReturn => {
    const { theme } = useThemeContext();

    const VALIDATION_STATE_CLASSNAME = validationState ? `${STATE_CLASSNAME_PREFIX}${validationState}` : '';

    const updatedClassName = classNamesFromList([
        TEXT_AREA_ROOT_CLASSNAME,
        validationState && VALIDATION_STATE_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TEXT_AREA_SCOPE_NAME,
        styles: getTextAreaStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
