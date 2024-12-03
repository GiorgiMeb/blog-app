// const fs = require('fs');

// reading files


// fs.readFile('./text.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line')



// writing files

// fs.writeFile('./text.txt', 'Hello maaan', () => {
//     console.log('file was written');
// });

// fs.writeFile('./text2.txt', 'Hello sergio ramos', () => {
//     console.log('file was written');
// });


// directories

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('created')
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('deleted')
//     })
// }


// deleting files

// if (fs.existsSync('./deleteme.txt')) {
//     fs.unlink('./deleteme.txt', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }