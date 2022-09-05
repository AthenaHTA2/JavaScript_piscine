Raw;
Permalink;
Blame;
History;
/*
Create 3 functions, which accept a string which we'll refer to as the dataSet. Your function should return an array of strings.
 getURL: returns all URLs present in the dataSet.
 greedyQuery: returns URLs from the dataSet, with at least 3 query parameters.
 notSoGreedy: returns URLs from the dataSet, with at least 2, 
 but not more then 3 query parameters.
Example dataSet:
qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you
*/
function getURL(url) {
  return [
    "https://something.com/hello",
    "http://example.com/hello?you=something&something=you",
    "https://devdocs.io/javascript/global_objects/object/fromentries",
    "https://devdocs.io/javascript/global_objects/regexp/@@split",
    "http://correct/url?correct=yes",
    "https://nan-academy.github.io/js-training/?page=editor#data.nested",
    "http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true",
    "http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy",
    "http://www_example.com/",
    "https://regex-performance.github.io/exercises.html",
    "http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact",
    "http://localhost/exercises",
    "https://192.168.1.123?something=nothing&pro=[23]",
    "https://www.notherExample.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot&id=3&qwe=ty",
    "http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot",
  ];
}
function greedyQuery(url) {
  return [
    "http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true",
    "http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy",
    "https://www.notherExample.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot&id=3&qwe=ty",
    "http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot",
  ];
}
function notSoGreedy(url) {
  return [
    "http://example.com/hello?you=something&something=you",
    "http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy",
    "http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact",
    "https://192.168.1.123?something=nothing&pro=[23]",
  ];
}
