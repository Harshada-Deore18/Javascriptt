// A regular expression is a pattern of characters.
// The pattern is used for searching and replacing characters in strings.

const a = ""
const text = "harry is a very very nice awesome nice very boy"
console.log(text.replace("very", "good"))//IT WILL REPLACE ONLY 1ST VERY . to overcome the problem we use regex

const regex = /very/g //globally change kro
const txt = "harry is a very very nice awesome nice very boy"
console.log(txt.replace(regex, "Good"))