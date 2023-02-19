import { renderHook } from '@testing-library/react-hooks';
import { useStackStyles } from '../useStackStyles';
import { STACK_SCOPE_NAME } from '../const';

describe('useStackStyles', () => {

    it('should return style props', () => {
        const { result } = renderHook(() => useStackStyles({}));

        expect(result.current.style).toBeDefined();
        expect(result.current.className).toBe(STACK_SCOPE_NAME);
    });

});
