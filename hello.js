const hello = (name) => {
    console.log(`This is his name ${name}`);
}
hello("MohanRaja");

setTimeout(() =>{
    console.log("Time out function");
    clearInterval(setint);
},2000);
const setint = setInterval(() => {
    console.log("This is an Interval Function");
},1000);
console.log(__dirname);
console.log(__filename);