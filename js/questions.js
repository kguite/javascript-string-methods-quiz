const quizQuestions = [
    {
        id: 1,
        question: "Which method, when given an index, searches a string for that index, and returns the single UTF-16 code located there, as a new string? Hint: You must provide a positive integer between 0 and str.length - 1.",
        choices: [
            "concat()",
            "charAt()",
            "at()",
            "indexOf()"
        ],
        answer: "charAt()"
    },
    {
        id: 2,
        question: "Which method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset? Hint: This method allows for positive and negative integers. Negative integers count back from the last string character.",
        choices: [
            "at()",
            "charAt()",
            "indexOf()",
            "match()"
        ],
        answer: "at()"
    },
    {
        id: 3,
        question: "Which method concatenates, or connects, (like Lego bricks), the string arguments to the calling string and returns a new string?",
        choices: [
            "shift()",
            "concat()",
            "slice()",
            "push()"
        ],
        answer: "concat()"
    },
    {
        id: 4,
        question: "Which method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate?",
        choices: [
            "split()",
            "includes()",
            "indexOf()",
            "match()"
        ],
        answer: "includes()"
    },
    {
        id: 5,
        question: "Which method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex?",
        choices: [
            "indexOf()",
            "includes()",
            "substr()",
            "replace()"
        ],
        answer: "indexOf()"
    },
    {
        id: 6,
        question: "Which method method retrieves the result of matching a string against a regular expression?",
        choices: [
            "replace()",
            "split()",
            "sort()",
            "match()"
        ],
        answer: "match()"
    },
    {
        id: 7,
        question: "Which method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.?",
        choices: [
            "slice()",
            "repeat()",
            "replace()",
            "match()"
        ],
        answer: "replace()"
    },
    {
        id: 8,
        question: "Which method executes a search for a match between a regular expression and this String object?",
        choices: [
            "match()",
            "replace()",
            "repeat()",
            "search()"
        ],
        answer: "search()"
    },
    {
        id: 9,
        question: "Which method extracts a section of a string and returns it as a new string, without modifying the original?",
        choices: [
            "trim()",
            "search()",
            "includes()",
            "slice()"
        ],
        answer: "slice()"
    },
    {
        id: 10,
        question: "Which method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array?  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.",
        choices: [
            "split()",
            "replace()",
            "slice()",
            "search()"
        ],
        answer: "split()"
    },
    {
        id: 11,
        question: "Which method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards?",
        choices: [
            "indexOf()",
            "match()",
            "substr()",
            "includes()"
        ],
        answer: "substr()"
    },
    {
        id: 12,
        question: "Which method returns the calling string value converted to lower case?",
        choices: [
            "subStr()",
            "toLowerCase()",
            "toUpperCase()",
            "indexOf()"
        ],
        answer: "toLowerCase()"
    },
    {
        id: 13,
        question: "Which method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one)?",
        choices: [
            "indexOf()",
            "toLowerCase()",
            "toUpperCase()",
            "trim()"
        ],
        answer: "toUpperCase()"
    },
    {
        id: 14,
        question: "Which method removes whitespace from both ends of a string?",
        choices: [
            "trim()",
            "replace()",
            "slice()",
            "concat()"
        ],
        answer: "trim()"
    }
];
