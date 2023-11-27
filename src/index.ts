/// <reference path="../namespaces/Validation.ts" />
/// <reference path="../namespaces/LettersOnlyValidator.ts" />
/// <reference path="../namespaces/ZipCodeValidator.ts" />

let string = ["oscar", "57057", "313"]

let validators: { [s: string]: Validation.StringValidator } = {}

validators["ZIP code"] = new Validation.ZipCodeValidator()
validators["Letters only"] = new Validation.LettersOnlyValidator()

for (let s of string) {
    for (const name in validators) {
        console.log(
            `${s}`,
            validators[name].isAcceptable(s) ? "matches" : "does not match",
            `${name}`
        )
        // oscar does not match ZIP code
        // oscar matches Letters only
        // 57057 matches ZIP code
        // 57057 does not match Letters only
        // 313 does not match ZIP code
        // 313 does not match Letters only
    }
}
