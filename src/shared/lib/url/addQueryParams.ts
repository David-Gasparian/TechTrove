type ParamsType = Record<string, string | undefined>;

export const getQueryParams = (params: ParamsType) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            searchParams.set(key, value);
        }
    });

    return `?${searchParams.toString()}`;
};

/**
 * Updates the current URL with the given query parameters without reloading the page.
 *
 * @param {ParamsType} params - An object where keys are query parameter names and values are their corresponding values.
 *                              Parameters with `undefined` values are ignored.
 *
 * @example
 * addQueryParams({ page: '2', sort: 'desc' });
 * // Updates the URL to ?page=2&sort=desc
 */
export const addQueryParams = (params: ParamsType) => {
    window.history.pushState(null, '', getQueryParams(params));
};
