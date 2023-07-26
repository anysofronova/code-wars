// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

const removeUrlAnchor = (url) => url.replace(/#[^#]*$/, "");

console.log(removeUrlAnchor("www.codewars.com#about"));
