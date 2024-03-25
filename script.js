function firstWord(str) {
  // your code here
	if (!str || str.trim().length === 0) {
        return str;
    }
    
    // Split the string by space and return the first element
    return str.trim().split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
