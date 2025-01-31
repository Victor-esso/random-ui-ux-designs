function deepSearch(haystack, needle) {
    // Convert haystack to lowercase and split the needle into an array of words
    const lowerHaystack = haystack.toLowerCase();
    const words = needle.toLowerCase().split(' ');

    // Check if each word from the needle exists in the haystack
    return words.every(word => lowerHaystack.includes(word));
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {deepSearch , getRandomInteger}