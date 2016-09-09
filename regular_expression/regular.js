function Test() {
}
Test.assertEquals = function (lhs, rhs) {

};
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
function createSequence(regex){
    return Array.from({length:256},(_,i)=>i).map(item => String.fromCharCode(item)).filter(item =>regex.test(item)).join('');
}

function createTemplate(template){
    return scope => {
        return template.replace(/\{\{([^}]+)\}\}/g,(w,$1) =>{
            let val = scope[$1];
            if(val === undefined){
                return "";
            }else{
                return val;
            }
        })
    }
}
function doubleCheck(str){
    //Are there doubles?
    return /(.)(?=\1)/.test(str);
}

function password(str){
    return /^.*(?=[A-Z])(?=[a-z])(?=\d).*$/.test(str) && /.{8,}/.test(str);
}

String.prototype.toCents=function(){
    //your code here
    return this.replace(/$(\d+.?\d+)/,(w,$1) => (+$1)*100);
};
Array.prototype.filter = function(pred,context){
    let res = [];
    for(var i=0;i<this.length;i++){
        if(typeof  pred != 'function'){
            throw new TypeError('pred is not function:',pred);
        }
        if(pred.call(context,this[i],i,this)){
            res.push(this[i]);
        }
    }
    return res;
};
function peteTalk(speech,ok){
    //your code here
    return speech.replace(/([^.!?]*)([.!?])?/g,(str,$1,$2) =>{
        console.log('str:',str);
        return str.replace(/\b(\w)(\w*)(\w)\b/g,(w,$1,$2,$3) => {
            if(ok.includes(w)) return w;
            return $1+(new Array($2.length + 1).join('*'))+$3
        }).toLowerCase().replace(/^\s*(\w)/,(w,$1) => w.toUpperCase())
    })

}
function trumpDetector(trumpySpeech){
    var sum  =0;
    var cnt = 0;
    trumpySpeech.replace(/a+|o+|e+|i+|u+/gi,w =>{
        if(w.length>2){
            sum += w.length-1;
            cnt++;
        }
    });
    return  sum/cnt;
}
String.prototype.toInteger = function(){
    console.log(`this:${this}`)
    var reg = /^([-+])?(0b|0x|0o)?([0-9a-fA-F]*)$/;
    var match = this.match(reg);
    console.log(`match:${match}`)
    if(match == null){
        return null;
    }else{

        var str = (match[1]|| '')+(match[3] || '');
        console.log(`str:${str}`);
        switch(match[2]){
            case '0b':
                if(/[^01]/.test(match[3])) return null;
                return parseInt(str,2);
            case '0x':
                if(/[^0-9a-fA-F]/.test(match[3])) return null;
                return parseInt(str,16);
            case '0o':
                if(/[^0-7]/.test(match[3])) return null;
                return parseInt(str,8);
            default:
                console.log(`match[3]:${match[3]}`);
                if(/[^0-9]/.test(match[3])) return null;
                return parseInt(str,10);
        }
    }
};
console.log('0o18'.toInteger());
