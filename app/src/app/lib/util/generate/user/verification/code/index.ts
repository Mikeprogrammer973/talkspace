
const letters = ["T", "K", "L", "W", "D", "S", "Z", "X", "M", "Y", "A", "N", "F", "J", "V"]

let verificationCode: string[] = []

do {
    if(Math.round(Math.random()) === 0) verificationCode.push(letters[Math.round(Math.random() * 14)])
    else verificationCode.push(Math.round(Math.random() * 9).toString())
} while(verificationCode.length < 10)

export { verificationCode }