import { renderHook } from '@testing-library/react-hooks';
import { useTagStyles } from '../useTagStyles';
import {
    TAG_SCOPE_NAME,
    TAG_LABEL_CLASSNAME,
    TAG_ACTION_CLASSNAME,
    TAG_DEFAULT_COLOR,
    TAG_DEFAULT_VARIANT,
} from '../const';

describe('useTagStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useTagStyles({}));
        const TAG_COLOR_CLASSNAME = `${TAG_SCOPE_NAME}--${TAG_DEFAULT_COLOR}`;
        const TAG_VARIANT_CLASSNAME = `${TAG_SCOPE_NAME}--${TAG_DEFAULT_VARIANT}`;

        expect(result.current.root.style).toBeDefined();
        expect(result.current.root.className).toBe(`${TAG_SCOPE_NAME} ${TAG_COLOR_CLASSNAME} ${TAG_VARIANT_CLASSNAME}`);
        expect(result.current.label.className).toBe(TAG_LABEL_CLASSNAME);
        expect(result.current.action.className).toBe(TAG_ACTION_CLASSNAME);
    });

});
