// module.exports = {

//   friendlyName: 'List',

//   description: 'List user.',

//   inputs: {
   
//   },

//   exits: {
//     success: {
//       responseType: 'view',
//       viewTemplatePath: 'pages/list'
//     },

//     notFound: {
//       description: 'No user in the database.',
//       responseType: 'notFound'
//     }
//   },


//   fn: async function () {

//     users = await User.find({}).exec((err, data) => {

//       if (err) { throw 'notFound'; };

//       let user = data.map((value)=>{
//         let a = {
//           id: value.id, 
//           name: value.name, 
//           surname: value.surname
//         }; 
//         return a; 
//       });

//       return  user;
//     });
    
//     return {users};
//   }

// };
