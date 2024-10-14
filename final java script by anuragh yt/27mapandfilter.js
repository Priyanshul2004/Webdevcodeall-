// const months = ["jun", "fub", "mch", "april"];

// const capital = months.map((mth,idx) => {
//     console.log(idx+1,mth);
//     return mth.toUpperCase()
// })

// array return krta new 

// filter 

// const filtermonth = months.filter((month,index)=>{
//     // console.log(month);
//     return month.length >= 4
// })
// console.log(filtermonth);

// filter me hamesa return pe he condition lagana hai 

const students = [
    {name:"priyanhsul",
        age:16
    },
    {name:"sahil",
        age:18
    },
    {name:"priyanhsul2",
        age:19
    },
    {name:"priyanhsul3",
        age:20
    },
]

const nameadlstudent = students.filter((stu)=>{
    return stu.age > 18
}).map((stu)=>{
    return stu.name
})

console.log(nameadlstudent);
