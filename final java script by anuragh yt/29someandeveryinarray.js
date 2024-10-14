const evnnum = [2, 4, 5, 6, 8]

const ans = evnnum.some((num) => {
    return num > 5
})

console.log(ans);
// iske defination bhe likhna hai 
// isko jise he true value milti hai wise he wo 
// lop band kr deta hai 


// every
// every check krta hai ki di gai condition 
// sub ke kiye true hai ya nhi agrar eak ki liye bhe
// false hui to false return kre ga 

const ans2 = evnnum.every((num) => {
    return num > 4
})

console.log(ans2);

// argument padh lena hai kisis or se 
