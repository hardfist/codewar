/**
 * Created by yj on 16/8/28.
 */
const s='      hello world pokemon go'
const r=/(?<=^( )*) /g
const fn=((w,p1,p2)=>{
    let i=0
    return e=>{
        console.log(++i)
        return '*'
    }
})()

s.replace(r,fn)