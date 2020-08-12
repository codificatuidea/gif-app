export const getGifs = async(category) => {
    const apiKey = 'jCbJ0pCwkxawxQjqhaK550spjjq8oELV';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(image => ({
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        })
    );
    return gifs;
}