export const fetchCities = () => {
    return $.ajax({
        url: `/api/cities`,
        method: 'GET'
    })
}