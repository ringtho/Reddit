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

export const getRedditComments = async (permalink) => {
    const url = `https://www.reddit.com/${permalink}/.json?raw_json=1;limit=6`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const getPopularSubreddits = async () => {
    const url = `https://www.reddit.com/subreddits/popular.json`
    const response = await fetch(url)
    const data = await response.json()
    return data
}