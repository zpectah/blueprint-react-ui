import { renderHook } from '@testing-library/react-hooks';
import { useTagStyles } from '../useTagStyles';
import {
    TAG_SCOPE_NAME,
    TAG_LABEL_CLASSNAME,
    TAG_ACTION_CLASSNAME,
} from '../const';

describe('useTagStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useTagStyles({}));

        expect(result.current.root.style).toBeDefined();
        expect(result.current.root.className).toBe(TAG_SCOPE_NAME);
        expect(result.current.label.className).toBe(TAG_LABEL_CLASSNAME);
        expect(result.current.action.className).toBe(TAG_ACTION_CLASSNAME);
    });

});
