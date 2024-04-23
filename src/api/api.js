export const getRedditData = async () => {
    const url = 'https://www.reddit.com/r/popular.json'
    const response = await fetch(url)
    const data = await response.json()
    return data
}