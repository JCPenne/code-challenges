
let dictionary = {}
let count = 100000

const encode = function(longUrl) {
    let tinyUrl = count
    dictionary[tinyUrl] = longUrl
    count++
    return tinyUrl
};

const decode = function(shortUrl) {
    return dictionary[shortUrl]
};

/**
 
Your functions will be called as such:
decode(encode(url));
*/