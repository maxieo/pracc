// const user = {
//     name: "Maxim",
//     tag: "maxie",
//     location: {
//         country: "Ukraine",
//         city: "Kyiv"
//     },
//     secondName: "Ostrovsky",
//     hobbies: ["runing", "cg", "js"]
// }
// console.log(user.hobbies.length);
// // user.name = "bru1h"
// console.log(user.name);

// const username = 'maxie'
// const email = 'bruh@kek.com'

// const signupData = {
//     username,
//     email,
// }
// console.log(signupData);

// const playlist = {
//     name: 'My playlist',
//     tracks: ['bruh', 'ta za sho', 'pzdc'],
//     rating: 4.7,
//     changeName(newName) {
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track)
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount () {
//         return this.tracks.length;
//     }
// }

// playlist.changeName('OG Playlist'),
// playlist.addTrack('kekys'),
// playlist.addTrack('suicide'),
// playlist.addTrack('suicide'),
// playlist.updateRating(4.9)
// playlist.getTrackCount()
// console.log(playlist);
// console.log(playlist.getTrackCount());



// const feedback = {
//     gucci: 1,
//     takesyake: 2,
//     totalCringe: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback);
// console.log(keys);
// for (const key of keys) {
//     console.log(feedback [key]);
//     totalFeedback += feedback[key]     
// }
// console.log(totalFeedback);
// const values = Object.values (feedback) 

// for (const value of values) {
//     totalFeedback += value;
// }
// console.log(totalFeedback);


// const friends = [
//     {name: 'Kek', online: true },
//     {name: 'lol', online: false },
//     {name: 'ta za sho', online: true},
//     {name: 'rofl', online: false },
// ];
// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 555;
// }

// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name);
//         if (friend.name === friendName) {
//             return 'bruh man';
//         }
//     }
// }

// console.log(findFriendByName (friends, 'kek'));
// // console.log(findFriendByName (friends, 'ta za sho'));

// const x = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
// };

// console.log(Object.keys(x).length);


// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];

// const x = [...a, ...b, ...c]
// console.log(x);

// const feedback = {
//     gucci: 1,
//     takesyake: 2,
//     totalCringe: 3,
// };

// const { gucci, takesyake, totalCringe } = feedback;

// console.log(
//     feedback.gucci,
//     feedback.takesyake,
//     feedback.totalCringe,
// );

// console.log(
//     gucci,
//     takesyake,
//     totalCringe,
// );



// *КОРЗИНА!!!*
// const cart = {
//     items: [],
//     getItems (){
//         return this.items;
//     },
//     add (product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                  item.quantity += 1;
//                  return;
//             }
//         }
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         }
//         this.items.push (newProduct)
//     },
//     remove (productName) {
//         const {items} = this;

//         for(let i = 0; i < items.length; i += 1) {
//             const item = items [i];

//             if(productName === item.name) {
//                 items.splice (i, 1)
//             }
//         }
//     },
//     clear () {
//         this.items = []
//     },
//     countTotalPrice () {
//        const {items} = this;
//        let total = 0

//        for (const {price, quantity} of items) {
//         total += price * quantity;
//        }

//        return total
//     },
//     increaseQuantity (productName) {
        
//     },
//     decreaseQuantity (productName) {

//     },
// };




// cart.add({name: 'apple', price:50})
// cart.add({name: 'lemon', price:79})
// cart.add({name: 'lemon', price:79})
// cart.add({name: 'strawberry', price:160})
// cart.add({name: 'strawberry', price:160})
// console.table(cart.getItems());

// console.log('Total is', cart.countTotalPrice ());

// cart.remove ('strawberry')
// console.table(cart.getItems());

// cart.clear ()
// console.table(cart.getItems());

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   console.log(forecast);
