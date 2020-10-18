import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADzbcoTJI53iEl1i3-6x3IGQ3463eBDkY",
  authDomain: "expensify-1d0dd.firebaseapp.com",
  databaseURL: "https://expensify-1d0dd.firebaseio.com",
  projectId: "expensify-1d0dd",
  storageBucket: "expensify-1d0dd.appspot.com",
  messagingSenderId: "1058528537450",
  appId: "1:1058528537450:web:6f7643e834d532156c9313",
  measurementId: "G-8P4RDCEWL1",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val(),
//       });
//     });
//     console.log(expenses);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log(e);
//   }
// );

// database.ref("expenses").push({
//   description: "Macbook Pro",
//   note: "",
//   amount: 1000,
//   createdAt: 16234567,
// });

// database.ref("expenses").push({
//   description: "Iphone 12 Mini",
//   note: "",
//   amount: 699,
//   createdAt: 16234569,
// });

// database.ref("expenses").push({
//   description: "Ipad Pro 2020",
//   note: "",
//   amount: 899,
//   createdAt: 16234579,
// });

// database.ref("notes").push(
//   {
//     title: "To Do",
//     body: "Learn Firebase",
//   },
// );

// const notes = [
//   { id: "123asd", title: "First" },
//   { id: "456asd", title: "second" },
// ];

// database.ref("notes").set(notes);
// database
//   .ref("notes/0/id")
//   .once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => console.log(e));

// database
//   .ref()
//   .set({
//     // root of the database
//     name: "Abishek",
//     age: 22,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Google",
//     },
//     location: {
//       city: "Ranipet",
//       state: "Tamil Nadu",
//     },
//   })
//   .then(() => {
//     console.log("Data synced!");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // database.ref("age").set(23);
// // database.ref("location/city").set("Vellore");
// database
//   .ref("attributes")
//   .set({
//     height: 185,
//     weight: 70,
//   })
//   .then(() => console.log("Data synced"))
//   .catch((e) => console.log(e));
// database
//   .ref("isAPokemonFan")
//   .set(true)
//   .then(() => console.log("Data synced!"))
//   .catch((e) => console.log("Sync failed. ", e));

// database
//   .ref("isAPokemonFan")
//   .remove()
//   .then(() => console.log("Data removed!"))
//   .catch((e) => console.log("Data not removed. ", e));

// // database.ref("isAPokemonFan").set(null);

// database
//   .ref()
//   .update({
//     name: "Ash",
//     age: 10,
//     job: "Pokemon trainer",
//     isAPokemonTrainer: null,
//   })
//   .then(() => console.log("Data updated"))
//   .catch((e) => console.log(e));

// database.ref().update({
//   "location/city": "Pallet Town",
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
// });

// database
//   .ref("name")
//   .once("value")
//   .then((snapshot) => console.log(snapshot.val()))
//   .catch((e) => console.log(e));

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => console.log(snapshot.val()),
//   (e) => console.log(e)
// );

// setTimeout(() => database.ref("age").set(24), 4000);

// setTimeout(() => database.ref().off(onValueChange), 4000);

// setTimeout(() => database.ref("age").set(25), 4000);

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   (e) => {
//     console.log(e);
//   }
// );

// setTimeout(() => {
//   database.ref("job/company").set("Apple");
// }, 3500);

// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 3500);
