export const FetchAPI = async (api) => {
    const res = await fetch(api);
    return res.data;
}