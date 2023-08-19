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

export const addQueryParams = (params: ParamsType) => {
    window.history.pushState(null, '', getQueryParams(params));
};
