function Test() {
}
Test.assertEquals = function (lhs, rhs) {

}
function calculate(string) {
    // Add your code here
    return eval(string.match(/\d+|lose|gain/g).join("").replace('lose', '-').replace('gain', '+'));
}
function toWeirdCase(string) {
    return string.split(' ')
        .map(string => {
            return (string + 'ab').replace(/\w{2}/g, w => w[0].toUpperCase() + w[1].toLowerCase()).slice(0, -2);
        }).join(' ');
}
function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}
function order(words) {
    return words.split(' ').sort(function (a, b) {
        var lhs = a.match(/\d/);
        var rhs = b.match(/\d/);
        console.log('lhs:', lhs);
        console.log('rhs:', rhs);
        console.log(lhs - rhs);
        return lhs - rhs;
    }).join(' ');
}
function gymSlang(phrase) {
    var dict = {
        'probably': 'prolly',
        'i am': "i'm",
        'instagram': 'insta',
        "do not": "don't",
        "going to": "gonna",
        "combination": "combo"
    };
    for (let key in dict) {
        let value = dict[key];
        let newKey = key[0].toUpperCase() + key.slice(1);
        let newVal = value[0].toUpperCase() + value.slice(1);
        dict[newKey] = newVal;
    }
    for (let key in dict) {
        let value = dict[key];
        phrase = phrase.replace(new RegExp(key, 'g'), value)
    }
    return phrase;
}
function replaceAll(input, find, replace) {
    return (find != '' ? input : ' ' + input + ' ').split(find).join(replace).trim();
}
function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);  //nice
}
function vowelShift(text, n) {
    if(text = null) return null;
    var res = [];
    var reg = /[aoieu]/gi;
    text.replace(reg, (w) => {
        res.push(w);
        return w;
    });
    if (n > 0) {
        while (n--) {
            res.unshift(res.pop())
        }
    } else {
        n = -n;
        while(n--){
            res.push(res.shift());
        }

    }

    text = text.replace(reg, w => {
        return res.shift();
    });
    return text;
}
function anchorize(text){
    var reg = /(?:https?|ftps?|file|smb):\/\/[^\s]*/gi;
    return text.replace(reg,function(w){
        return `<a href="${w}">${w}</a>`
    })
}
function chuckPeushUps(string){
    var pass =false;
    if(typeof string != 'string'){
        return 'FAIL!!';
    }
    if(string == ''){
        return 'FAIL!!';
    }
    var num = 0;
    string.replace(/\w+/g,function(w){
        w = w.replace(/[^01]/g,'');
        var val = parseInt(w,2);
        if(val == val){
            num = Math.max(num,parseInt(w,2));
            pass = true;
        }
    });
    if(!pass){
        return 'CHUCK SMASH!!';
    }
    return num;
}
function onePunch(items){
    return items.split(' ')
        .map(item => item.replace(/[ae]/g,''))
        .join(' ')
}
var res = onePunch('Beard Knife Grenade Motorbike Hat');
console.log('res:',res);