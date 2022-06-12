function palindrome(message){
    // wirte your code here
    var reverseString = message.split("").reverse().join("");
    return reverseString === message;
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true