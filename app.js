function doubleValues(arr){
    newArr = [];
    arr.forEach(function(val){
        newArr.push(val*2);
    });
    return newArr;
}

function onlyEvenValues(arr) {
    newArr = [];
    arr.forEach(function(val) {
        if(val % 2 == 0){
            newArr.push(val);
        }
    });
    return newArr;
}

function showFirstAndLast(arr) {
    newArr = [];
    arr.forEach(function(val, ind) {
        if (ind === 0 || ind === arr.length - 1){
            newArr.push(val);
        }
    })
    return newArr;
}

function addKeyAndValue(arr, key, value){
    newArr = [];
    arr.forEach(function(obj) {
        obj[key] = value;
        newArr.push(obj);
    })
    return newArr;
}

// helper function
function isVowel(char){
    const vowels = ['a','e','i','o','u'];
    let ind = vowels.indexOf(char);
    if(ind === -1){
        return false;
    } else {
        return true;
    }
}

function vowelCount(str) {
    vowelObj = {};
    strArr = Array.from(str.toLowerCase());
    strArr.forEach(function(char) {
        if(isVowel(char)){
            if(typeof vowelObj[char] === "number"){
                vowelObj[char] += 1;
            } else {
                vowelObj[char] = 1;
            }
        }
    });
    return vowelObj;
}

function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val*2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(val, ind){
        return val*ind;
    });
}


function extractKey(arr, key){
    return arr.map(function(obj){
        return obj[key];
    });
}

function extractFullName(arr){
    return arr.map(function(obj) {
        return obj['first'] + " " + obj['last'];
    });
}

function filterByValue(arr, key){
    return arr.filter(function(obj){
        return !(typeof obj[key] === 'undefined');
    });
}

function find(arr, search){
    return arr.filter(function(val){
        return val === search;
    })[0];
}

function findInObj(arr, key, value) {
    return arr.filter(function(obj) {
        return obj[key] === value;
    })[0];
}

function removeVowels(str) {
    let strArr = Array.from(str.toLowerCase());
    let filtered = strArr.filter(function(char){
        return !isVowel(char);
    })
    return filtered.join('');
}

function doubleOddNumbers(arr) {
    return arr.filter(function(val) {
        return val % 2 === 1;
    }).map(function(val) {
        return val * 2;
    } );
}


