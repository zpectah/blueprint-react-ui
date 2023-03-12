import {
    classNamesFromList,
    useUniqueStyles,
    useThemeContext,
    WithStyleProps,
    WithRequiredStyleProps,
} from '../../../core/src';
import { TextInputAdornmentPositionKeys } from './enums';
import { TextInputAdornmentProps } from './types';
import {
    TEXT_INPUT_ADORNMENT_SCOPE_NAME,
    TEXT_INPUT_ADORNMENT_CLASSNAME,
    TEXT_INPUT_ADORNMENT_START_CLASSNAME,
    TEXT_INPUT_ADORNMENT_END_CLASSNAME,
} from './const';
import { getTextInputAdornmentStyles } from './styles';

export type UseTextInputAdornmentStylesProps = WithStyleProps & Pick<TextInputAdornmentProps, 'position'>;
export type UseTextInputAdornmentStylesReturn = WithRequiredStyleProps;

export const useTextInputAdornmentStyles = ({ style, className, position }: UseTextInputAdornmentStylesProps): UseTextInputAdornmentStylesReturn => {
    const { theme } = useThemeContext();

    const TEXT_INPUT_ADORNMENT_POSITION_CLASSNAME = position === TextInputAdornmentPositionKeys.start ? TEXT_INPUT_ADORNMENT_START_CLASSNAME : TEXT_INPUT_ADORNMENT_END_CLASSNAME;

    const updatedClassName = classNamesFromList([
        TEXT_INPUT_ADORNMENT_CLASSNAME,
        TEXT_INPUT_ADORNMENT_POSITION_CLASSNAME,
        className,
    ]);

    useUniqueStyles({
        id: TEXT_INPUT_ADORNMENT_SCOPE_NAME,
        styles: getTextInputAdornmentStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
