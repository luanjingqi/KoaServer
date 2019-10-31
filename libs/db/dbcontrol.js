const dblink = require('./database')


module.exports = {
    selectsql: (who,table)=> {
        return new Promise((resolve,reject)=>{
            dblink.query(`SELECT ${who} FROM ${table}`,async (err,data)=>{
                let userJson =[]
                for (let i = 0; i < data.length; i++) {
                    userJson.push(data[i])
                }
                resolve({msg:'查询成功',data:userJson})
            })
        })
    },
    delsql: ()=> {
        return new Promise((resolve,reject)=>{
            dblink.query("SELECT * FROM luanjingqi.user",async (err,data)=>{
                let userJson =[]
                for (let i = 0; i < data.length; i++) {
                    userJson.push(data[i])
                }
                resolve({msg:'查询成功',data:userJson})
            })
        })
    }
}