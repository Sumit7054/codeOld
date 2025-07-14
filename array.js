var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let l = a.length;
for(let i=0; i< l; i++)
{
let il = a[i].length;
console.log("row"+i +'\n');
let el = a[i];
for(let j=0; j<il; j++)
{
let tbp = el[j];
console.log(tbp+'\n');
}
}