// function mailCount(emailData) {
//   let emails = emailData.split('##||##');
//   let count = emails.length;
//   let dates = emails.map(email => {
//     let dateStr = email.split('#/#')[2].replace('\nDate: ','');
//     let date = new Date(dateStr);
//     return date;
//   });
//   dates.sort((a, b) =>{
//     if (a > b) {
//       return 1;
//     } else if (a < b) {
//       return -1;
//     } else {return 0;
//     }
//   });
//   console.log(count);
//   console.log(`From ${dates[0].toDateString()} through ${dates[dates.length -1].toDateString()}`) ;
// }

// mailCount(emailData);