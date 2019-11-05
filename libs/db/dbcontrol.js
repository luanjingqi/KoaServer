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
    },
    insertsql: (value,table)=> {
        return new Promise((resolve,reject)=>{
            let sql = `INSERT INTO ${table} VALUES(null,'${value.username}','${value.password}','${value.nickname}','${value.email}','${value.phone}','${value.time}')`
            dblink.query(sql,async (err,data)=>{
                resolve({msg:'查询成功',data:data})
            })
        })
    },
    updatesql: (value,table)=> {
        return new Promise((resolve,reject)=>{
            dblink.query(`INSERT INTO ${table} VALUES(${value})`,async (err,data)=>{
                let userJson =[]
                for (let i = 0; i < data.length; i++) {
                    userJson.push(data[i])
                }
                resolve({msg:'查询成功',data:userJson})
            })
        })
    },
    
}


// #MYSQL 注释用#
/*或者用 这种的*/

// #一个简单的查询语句
// #SELECT * FROM student ORDER BY SAGE , SAGE DESC

// #带有条件的sql
// #SELECT * FROM STUDENT WHERE SID <= '09' OR ( SID = '10' AND SID > '10')

// #INSERT INTO student VALUES(15,null,'2019-11-01 13:00:21','女')
// #DELETE FROM student WHERE SID > '13'
// #UPDATE student SET SNAME = '赵七', sage='' WHERE SID = '13'

/*
select stu.*,sc.* from student stu
left join sc sc #inner join /right join /left join/outter join
on stu.SId = sc.sid
*/

/*
# max min avg count 
select sid,score, count(sid) as score from sc
group by sid, score


select sid,count(score) from sc 
group by sid 
having count(*) > 2
*/

// #select * from sc order by sid limit 5,5 

// #select * from student where sname like '%李%' and sname not like

// #select count(1) from student

// #select * from (select * from student) as a where a.sid > '10'

/*
with temp as
(
 select * from student
)

select * from temp where sid >'10'
*/