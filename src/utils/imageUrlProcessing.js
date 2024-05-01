
export const processImgUrl = (url) => {
    if (url !== undefined) {
        const splitUrl = url.split('/')
        splitUrl[2] = 'i.redd.it'
        const newUrl = splitUrl.join('/')
        return newUrl
    }
    
}