/*
Create the following functions:
Your solutions must use filter.
filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.
filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).
filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).
filter1DistinctVowel: accepts an array of strings, and returns only those which contain distinct vowels (a,e,i,o,u). 
For example, "Alabama" contains only 1 distinct vowel "a".
multiFilter: accepts an array of objects, and returns only those which:

the key capital contains at least 8 characters.
the key name does not start with a vowel.
the key tag has at least one vowel.
the key region is not "South"

*/



function filterShortStateName(strArr){

    return strArr.filter(word=>word.length<7)
    // if str <7 return str
}

function filterStartVowel(strArr){


    return strArr.filter(word=>word[0] =="A" || word[0] =="E"|| word[0] =="I"|| word[0] =="O"|| word[0] =="U")
}

function filter5Vowels (strArr){

    return strArr.filter(checkVowels)
}

function checkVowels(strArr){
    let vowelCount =0
    for (let i=0; i <strArr.length;i++){
        if (strArr[i].toLowerCase()== "a"||strArr[i].toLowerCase()== "e"||strArr[i].toLowerCase()== "i"||strArr[i].toLowerCase()== "o"||strArr[i].toLowerCase()== "u"){
            vowelCount ++
        }
        if (vowelCount >=5){
            return strArr[0]
        }
    }
}
function check1Vowels(strArr){
    let vowelCount =0
    for (let i=0; i <strArr.length;i++){
        if (strArr[i].toLowerCase()== "a"||strArr[i].toLowerCase()== "e"||strArr[i].toLowerCase()== "i"||strArr[i].toLowerCase()== "o"||strArr[i].toLowerCase()== "u"){
            vowelCount ++
        }
        if (vowelCount >=1){
            return strArr[0]
        }
    }
}

function filter1DistinctVowel(strArr){
return strArr.filter(checkDistint)

}
function checkDistint(strArr){
    let vowelCount =0
    let vowels = []
    // let reg = strArr.match(/(a|e|i|o|u)/g)

    // console.log(reg)
    for (let i=0; i <strArr.length;i++){
        if (strArr[i].toLowerCase()== "a"||strArr[i].toLowerCase()== "e"||strArr[i].toLowerCase()== "i"||strArr[i].toLowerCase()== "o"||strArr[i].toLowerCase()== "u"){
            vowels.push(strArr[i])
            vowelCount ++
        }
            if(vowels.length >=1 && i== strArr.length -1){
                // console.log(strArr, vowels)
                if(vowels[0].toLowerCase()=="a" && !vowels.includes("e")&& !vowels.includes("i")&& !vowels.includes("o")&& !vowels.includes("u")){
                    return strArr[0]
                }
                if(vowels[0].toLowerCase()=="e" && !vowels.includes("a")&& !vowels.includes("i")&& !vowels.includes("o")&& !vowels.includes("u")){
                    return strArr
                }
                if(vowels[0].toLowerCase()=="i" && !vowels.includes("a")&& !vowels.includes("e")&& !vowels.includes("o")&& !vowels.includes("u")){
                    return strArr[0]
                }
                if(vowels[0].toLowerCase()=="o" && !vowels.includes("a")&& !vowels.includes("e")&& !vowels.includes("i")&& !vowels.includes("u")){
                    return strArr
                }
                if(vowels[0].toLowerCase()=="u" && !vowels.includes("a")&& !vowels.includes("e")&& !vowels.includes("i")&& !vowels.includes("o")){
                    return strArr
                }
            }
        
    }
}

let vowels = (/[a|e|i|o|u]/gi)
const multiFilter = (objArr)  => objArr.filter(item =>{
        if( item.capital.length >=8){
            if(!item.name[0].match(vowels)){
                if(item.tag.match(vowels)){
                    if(!item.region.match("South")){
                        // console.log(item)
                        return item
                    }
                }
            }
        }
    })