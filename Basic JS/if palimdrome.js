// fungsi yang menampilkan apakah text tersebut palindrome atau tidak (palindrome = text yang bila dibalik, hurufnya tetap sama)

function ifPalindrome(text){

    const isPalindrome = text.split("").reverse().join("")
    text === isPalindrome ? console.log(`${text} adalah Palindrome`) : console.log(`${text} bukan Palindrom`)

}
ifPalindrome('kakak')
