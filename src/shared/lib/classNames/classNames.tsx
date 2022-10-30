type Mode = Record<string, string | boolean>;

export const classNames = (cln: string, mod: Mode, additional: string[]): string => {

    return [
        cln,
        ...additional,
        ...Object.entries(mod)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}