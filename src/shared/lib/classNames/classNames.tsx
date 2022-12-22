export type Mode = Record<string, string | boolean | undefined>;

export const classNames = (
    cln: string,
    mod: Mode = {},
    additional: Array<string | undefined> = [],
): string => [
    cln,
    ...additional.filter(Boolean),
    ...Object.entries(mod)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
]
    .join(' ').trim();
