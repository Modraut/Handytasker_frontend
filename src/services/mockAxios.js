// import MockAdapter from 'axios-mock-adapter';
// import axios from 'axios';
// import faker from 'faker';
// //=========faking data=======
// // This sets the mock adapter on the default instance
// // export function pauseMock() {
// //   mock.restore();
// // }
// // Mock any GET request to /backendurl/users
// // arguments for reply are (status, data, headers)
// // mock.onGet('backendurl/users/').reply(200, {
// //   users: makeUsers(10)
// // });
// //=====================
// function makeArticles(n) {
//   let articles = [];
//   for (let i = 0; i < n; i++) {
//     let article =
//     {
//       title: `Article ${i}`,
//       author: faker.name.firstName(),  // should be user id in real
//       view: faker.random.number(10),
//       like: faker.random.number(8),
//       preview: faker.lorem.sentences(3),
//       image: faker.image.abstract(),
//     }
//     articles.push(article);
//   }
//   // console.log(articles)
//   return articles;
// }
// function makeUsers(n) {
//   let users = [];
//   for (let i = 0; i < n; i++) {
//     let user =
//     {
//       name: faker.name.firstName(),
//       location: faker.address.city(),
//       follower: faker.random.number(20),
//       like: faker.random.number(15),
//       avatar: faker.image.avatar(),
//       phone: faker.phone.phoneNumber()
//     }
//     users.push(user);
//   }
//   // console.log(users)
//   return users;
// }

// // function test(n) {
// //   let users = [];
// //   // let name = "",location = "",reviewnumber="",lastreview="",phone="",categories=""
// //   const url = 'http://127.0.0.1:8080/userinfo/';//Chad: loopback ip
// //   axios.get(url).then(
// //     res => {
// //       for (let i = 0; i < n; i++) {
// //         let user = {
// //           categories: [faker.random.objectElement(taskCategories)],
// //           name: res.data[i].firstName,
// //           location: res.data[i].location,
// //           reviewnumber: res.data[i].commondsNumber,
// //           lastreview: res.data[i].commonds,
// //           phone: res.data[i].mobileNumber
// //         }
// //         users.push(user)
// //       }
// //     }
// //   )
// //   // console.log(users)
// //   return users
// // }
// // console.log(test(10))

// function makeUserWithCat(c, n) {
//   // let users = makeUsers(n);
//   // console.log(test(10))
//   let users = test(n)

//   users.map((user) => { user.categories = [c] })
//   return users;
// }

// function fakeDataMocker() {
// const mock = new MockAdapter(axios);
// mock.onGet("/fakeUsers").reply(200, {
//   users: makeUsers(5)
// });
// mock.onGet("/articles").reply(200, {
//   articles: makeArticles(3)
// });
// return mock;

// }

// export default { fakeDataMocker };
// export { fakeDataMocker };