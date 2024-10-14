// section of code which we can handle is call excaption handle
// section of code which we cant handle is call as error

try {
    const nam = undefined
    console.log(nam.name);
} catch (error) {
    console.log("error find ");

    // error provide what the error

    console.log(error);
}finally{
    console.log("it will always excute");
}