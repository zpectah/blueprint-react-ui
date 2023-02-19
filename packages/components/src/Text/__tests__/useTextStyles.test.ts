import { renderHook } from '@testing-library/react-hooks';
import { useTextStyles } from '../useTextStyles';
import { TEXT_SCOPE_NAME } from '../const';

describe('useTextStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useTextStyles({}));

        expect(result.current.style).toBeDefined();
        expect(result.current.className).toBe(TEXT_SCOPE_NAME);
    });

});
