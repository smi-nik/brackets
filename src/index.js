module.exports = function check(str, bracketsConfig) {
    var array = [];
    var brackets = {};

    bracketsConfig.filter((x) =>  {
		brackets[x[0]] = x[1]
	})
    
    for (let i = 0; i < str.length; i++) {
        let bracket = str.charAt(i);
        if (brackets[bracket] === bracket && array[array.length - 1] === bracket) {
           array.pop();
        } else if (brackets[bracket]) {
            array.push(bracket);
        } else if (bracket != brackets[array.pop()]) {            
            return false;
        }
    }   
	
    return array.length === 0;
}
