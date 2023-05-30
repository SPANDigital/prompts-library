// SPDX-License-Identifier: MIT
// You have access to the variables:
// - params
// - data
//
// as well as addPrompt(
//

function joinTerms(terms) {
    if (terms) {
        var ret = ""
        for (var i = 0; i<terms.length; i++) {
            if (i > 0) {
                ret = ret + ", ";
                if (i == terms.length -1) {
                    ret = ret + "and "
                }
            }
            ret = ret + terms[i]
        }
        return ret
    }
    return ""
}

addPrompt("user", "What is " + joinTerms(data.animals) + "?")
