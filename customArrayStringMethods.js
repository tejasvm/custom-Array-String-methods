// Custom Functions and APi's

Array.prototype.customPush = function(newVariable) {
    this.splice(this.length, 0, newVariable);
    return this
}

String.prototype.toCharArray = function(index) {
    var stringArray = this.split("")
    return stringArray
}

Object.defineProperty(String.prototype, 'customLength', {
    get: function() {
        var stringArray = this.split("");
        var count = 0;
        for (i = 0; i < stringArray.length; i++) {
            count++
        }
        return count
    }
})

Object.defineProperty(Array.prototype, 'customLength', {
    get: function() {
        for (i = 0; i < Infinity; i++) {
            if (this[i] == null) {
                return i
            }
        }
    }
})

function genAlphabetArray(charA, charZ) {
    let a = [],
        i = charA.charCodeAt(0),
        j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.customPush(String.fromCharCode(i));
    }
    return a;
}

String.prototype.customIncludes = function(word, index) {
    var stringArray = this.split("");
    var wordArray = word.split("");
    if (index == null) {
        for (i = 0; i < stringArray.length; i++) {
            if (stringArray[i] == wordArray[0]) {
                for (j = 0; j < wordArray.length; j++) {
                    if (stringArray[i + j] == wordArray[j]) {
                        return true
                    }
                }
            }
        }
        return false
    }
    if (index == isNaN() && index < this.length) {
        for (i = index; i < stringArray.length; i++) {
            if (stringArray[i] == wordArray[0]) {
                for (j = 0; j < wordArray.length; j++) {
                    if (stringArray[i + j] == wordArray[j]) {
                        return true
                    }
                }
            }
        }
        return false
    }
}

Array.prototype.customFilter = function(callback, thisarg) {

    function popluateArray(array) {
        let tempArray = []
        for (i = 0; i < array.length; i++) {
            // debugger;
            let check = callback(array[i], i, array);
            if (check == true) {
                tempArray.push(array[i])
            }
        }
        return tempArray
    }

    if (!thisarg) {
        return popluateArray(this);
    } else {
        return popluateArray(thisarg);
    }

}

Array.prototype.customFind = function(callback, thisarg) {
    function findValue(array) {
        // debugger;
        for (i = 0; i < array.length; i++) {
            let value = callback(array[i], i, array);
            if (value == true) {
                return array[i]
            } else {
                return -1
            }
        }
    }
    if (!thisarg) {
        return findValue(this);
    } else {
        return findValue(thisarg);
    }
}

Array.prototype.customIncludes = function(value) {
    var i = this.length;
    while (i--) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
}

Array.prototype.customForEach = function(callback, thisArg) {
    var array = this;
    if (!thisArg) {
        for (var i = 0; i !== array.length; ++i) {
            callback.call(this, array[i], i, array);
        }
    } else {
        for (var i = 0; i !== array.length; ++i) {
            callback.call(thisArg, array[i], i, array);
        }
    }
};


// Code

let paragraph = ["the school is the place that prepares us for a good tomorrow", "i love my school because it is one of the best schools", "the classrooms of my school are wide, large and air", "our school has a very large playground where we play sports", "there is a computer lab, science lab and a big library in my school"];
let alphabetArray = genAlphabetArray('a', 'z');
let finalArray = [];
let usedAlphabetArray = [];
let usedSentencesArray = [];
let obj = {};

paragraph.customForEach(element => {
    //printThis(element)
    stringProcess(element)
});

function printThis(texts) {
    console.log(texts)
}

function stringProcess(stringValue) {
    tempArray = stringValue.toCharArray()
    alphabetArray.customForEach(element1 => {
        tempArray.customForEach(element2 => {
            if (element1 == element2 && usedAlphabetArray.customIncludes(`${element1}`) == false && usedSentencesArray.customIncludes(`${stringValue}`) == false) {
                usedAlphabetArray.customPush(`${element1}`);
                usedSentencesArray.customPush(`${stringValue}`);
                //printThis(element1)
                obj = {
                    [element1]: stringValue
                };
                finalArray.customPush(obj);
            }
        });
    });
}

alphabetArray.customForEach(element => {
    if ((usedAlphabetArray.customIncludes(`${element}`)) == false) {
        obj = {
            [element]: ""
        };
        finalArray.customPush(obj);
    }
});

finalArray.sort()

printThis(finalArray)