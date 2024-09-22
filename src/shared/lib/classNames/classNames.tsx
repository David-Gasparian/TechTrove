export type Mode = Record<string, string | boolean | undefined>;

/**
 * Utility function to conditionally combine class names.
 *
 * @param {string} cln - The base class name.
 * @param {Mode} [mod={}] - An object where keys are class names and values determine if the class should be included.
 * @param {Array<string | undefined>} [additional=[]] - Additional class names to include, can contain undefined values.
 * @returns {string} - A string of combined class names.
 *
 * @example
 * classNames('button', { active: true, disabled: false }, ['extra-class']);
 * // Returns 'button extra-class active'
 */
export const classNames = (
    cln: string,
    mod: Mode = {},
    additional: Array<string | undefined> = [],
): string =>
    [
        cln,
        ...additional.filter(Boolean),
        ...Object.entries(mod)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ')
        .trim();
