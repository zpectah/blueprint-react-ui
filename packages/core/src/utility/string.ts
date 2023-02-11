export const capitalizeString = (input: string) => input.replace(/^\w/, (c) => c.toUpperCase());

export const classNamesFromList = (list: (string | false | undefined)[]) => [...list].join(' ').replaceAll('  ', ' ').replace(/\s+$/g, '').trim();
