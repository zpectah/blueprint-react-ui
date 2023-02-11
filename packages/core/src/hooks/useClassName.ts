import { classNamesFromList } from '../utility';

export interface UseClassNameProps {
    className?: string;
    classes?: (string | false | undefined)[];
}

export interface UseClassNameReturn {
    className: string;
}

export const useClassName = ({ className, classes = [] }: UseClassNameProps): UseClassNameReturn => {
    const updatedClassName = classNamesFromList([ className, ...classes ]);

    return {
        className: updatedClassName,
    };
};
