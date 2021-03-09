function palindrome (str){
    let temp = ''
    for (let i = str.length-1 ;i >= 0 ;i--){
        temp+= str[i]
    }
    if (temp === str){
        return 'ini palindrome'
    }
}

console.log(palindrome('hannah'))