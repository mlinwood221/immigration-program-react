
export const getUrlParam = (param) => {
    let params = new URLSearchParams(window.location.search);
    let value = params.get(param);

    return value;
}
