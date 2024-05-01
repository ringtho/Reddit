export const getRedditData = async () => {
    const url = 'https://www.reddit.com/r/popular.json?raw_json=1'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const getUserInfo = async (username) => {
    const url = `https://www.reddit.com/user/${username}/about.json?raw_json=1`
    const response = await fetch(url)
    const data = await response.json()
    return data
}