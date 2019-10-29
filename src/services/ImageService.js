
export default {
    getImageUrl
}


function getImageUrl(query) {
    if (typeof query === 'object') {
        query.forEach(img => {
            img.usableUrl = `https://fedtest.monolith.co.il/api/imager.php?url=${img.url}&type=fit&width=1000&height=1000&quality=70`
        });
        return query
    }
    else {
        return `https://fedtest.monolith.co.il/api/imager.php?url=${query}&type=fit&width=1000&height=1000&quality=70`

    }
}