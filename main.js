// var myLove = {
//     name: 'chua biet',
//     age: 18,
//     hometown: 'Thi Tran hương Khe'
// }
// myLove.job = 'kế toán tài chính';
// console.log(myLove);

// function User(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.getName = function() {
//         return ` ${ this.firstName } ${this.lastName}`;
//     }
// }
// var User1 = new User('nguyen', 'thao', 18);
// console.log(User1);
// console.log(User1.getName());
// User.prototype.house = 'Huong Khe';

// toán tử 3 ngôi
// var Course = {
//     name: 'React',
//     price: 0
// };
// var result = Course.price > 0 ? `${Course.price} Coins` : 'Miễn Phí';
// console.log(result);

// var languages = ['JS', 'HTML', 'CSS', 'React native'];

// for (var key in languages) {
//     console.log(languages[key]);
// }


// var languages = ['JS', 'HTML', 'CSS', 'React native'];

// for (var value of languages) {
//     console.log(value);
// }


// var Courses = [{
//         id: 1,
//         name: 'JS',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'HTML',
//         coin: 200
//     }, {
//         id: 3,
//         name: 'CSS',
//         coin: 300
//     }, {
//         id: 4,
//         name: 'REACT NATIVE',
//         coin: 400
//     }
// ]

// var isFree = Courses.find(function(course, index) {
//     return course.name === 'CSS';
// });
// console.log(isFree);
//reduce

// function coinHandler(accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }
// var totalCoin = Courses.reduce(coinHandler, 0);
// console.log(totalCoin);


//map
// function courseHander(course, index) {
//     return {
//         id: course.coin,
//         name: `Khoa hoc:${course.name}`,
//         coin: course.coin,
//         coinText: `Gia:${course.coin}`,
//         index: index
//     };

// }
// var newCourses = Courses.map(courseHander);
// console.log(newCourses);

//bt1
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOuput, depItem) {
//     return flatOuput.concat(depItem);
// }, [])
// console.log(flatArray);
//bt2
// var topics = [{
//         topic: "frond-end",
//         courses: [{
//                 id: 1,
//                 title: 'HTML,CSS'
//             },
//             {
//                 id: 2,
//                 title: 'JavaScript'
//             }
//         ]
//     },
//     {
//         topic: "back-end",
//         courses: [{
//                 id: 1,
//                 title: 'PHP'
//             },
//             {
//                 id: 2,
//                 title: 'NODEJS'
//             }
//         ]
//     }
// ]

// var newcourses = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses);
// }, [])

// console.log(newcourses)

//map() method
// Array.prototype.map2 = function(callBack) {
//     var output = [],
//         arrayLength = this.length;
//     for (var i = 0; i < arrayLength; ++i) {
//         var result = callBack(this[i]);
//         output.push(result);
//     }
//     return output;
// }
// var courses = [
//     'Javascript',
//     'PHP',
//     'NODEJS'
// ];

// htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(' '));
//forEach method


// Array.prototype.forEach2 = function(callBack) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callBack(this[index], index, this);
//         }
//     }
// }


// var courses = [
//     'Javascript',
//     'PHP',
//     'NODEJS'
// ];
// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array);
// });


//filter method
// Array.prototype.filter2 = function(callBack) {
//     var output = [];
//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {
//             var result = callBack(this[i], i, this);
//         }
//         if (result) {
//             output.push(this[i]);
//         }
//     }
//     return output;
// }
// var skins = [{
//         name: "Zed tu than",
//         price: 599,
//     },
//     {
//         name: "Zed loi kiem",
//         price: 180,
//     },
//     {
//         name: "Zed SKT T1",
//         price: 120,
//     },
// ];

// var skinsNews = skins.filter2(function(skin, index, array) {
//     // console.log(skin, index, array);
//     return skin.price > 150;
// });
// console.log(skinsNews);


// Some method toi thieu 1 ong đúng thì sẽ đúng
// Array.prototype.some2 = function(callback) {
//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {
//             if (callback(this[i], i, this)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// var skins = [{
//         name: "Zed tu than",
//         price: 599,
//         isBuy: false,
//     },
//     {
//         name: "Zed loi kiem",
//         price: 180,
//         isBuy: false,
//     },
//     {
//         name: "Zed SKT T1",
//         price: 120,
//         isBuy: true,

//     },
// ];
// var result = skins.some2(function(skin, index, array) {
//     return skin.isBuy;
// });
// console.log(result);


// var HeadingElement = document.querySelector('.heading');
// HeadingElement.classList.add('red');
// setInterval(() => {
//     HeadingElement.classList.toggle('red');
// }, 2000);

// var inputEL = document.querySelector('input[type="text"]');
// inputEL.onkeydown = function(e) {
//     console.log(e.which);
// }
//prevent default
// var aEL = document.links;
// for (var i = 0; i < aEL.length; ++i) {
//     aEL[i].onclick = function(e) {
//         console.log(e.target.href);
//     }
// }
//Stringnify : từ JS sang JSON
// Parse: từ JSON qua JS
// var json = '["JavaScript","RUBY"]';
// var json1 = '{"name":"Nhật Nguyễn","age":21}';
// var object = JSON.parse(json);
// console.log(object);

//b1:new Promise
//b2:Executor
// var promise = new Promise(
//     //excutor
//     function(resolve, reject) {
//         //Logic
//         //Thành công:resolve()
//         //thất bại:reject()
//         reject();
//     }
// );


// promise
//     .then(function() {
//         console.log("Successfully!");
//     })
//     .catch(function() {
//         console.log("Fail!");
//     })
//     .finally(function() {
//         console.log("Done!");
//     })

// 1.promise.resolve
// 2.promise.rejected
// 3.promise.all

// var promise = Promise.resolve('success');
// promise.then(function(result) {
//         console.log(result);
//     })
//     .catch(function(result) {
//         console.log(result);
//     });


// var promise1 = new Promise(
//     function(resolve) {
//         setTimeout(function() {
//             resolve([1]);
//         }, 1000)
//     }
// );
// var promise2 = new Promise(
//     function(resolve) {
//         setTimeout(function() {
//             resolve([2, 3]);
//         }, 2000)
//     }
// )

// Promise.all([promise1, promise2]).then(function(result) {
//     var result1 = result[0];
//     var result2 = result[1];
//     console.log(result1.concat(result2));
// })


// var comments = [{
//         id: 1,
//         user_id: 1,
//         content: 'Nhật có thể làm được những gì?'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Nhật có thể làm được tất cả mọi thứ nếu tự tin ?'
//     }
// ];

// var users = [{
//     id: 1,
//     name: 'Nhật Nguyễn'
// }, {
//     id: 2,
//     name: 'Nam Nguyễn'
// }, {
//     id: 3,
//     name: 'Tuấn Nguyễn'
// }];

// function getComment() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments);
//         }, 1000)
//     });
// }

// function getUsersByIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id);
//         });
//         setTimeout(function() {
//             resolve(result);
//         }, 1000);
//     }, 1000);
// }
// getComment()
//     .then(function(comments) {
//         var userIDs = comments.map(function(comments) {
//             // console.log(comments.user_id);
//             return comments.user_id;

//         });
//         return getUsersByIds(userIDs)
//             .then(function(users) {
//                 // console.log(users);
//                 return {
//                     users: users,
//                     comments: comments,
//                 };

//             });
//     })
//     .then(function(data) {
//         var cmtBlock = document.getElementById('cmt-box');
//         var html = '';
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });
//         cmtBlock.innerHTML = html;
//     });

// var postApi = 'https://jsonplaceholder.typicode.com/todos/1';


// fetch(postApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(posts) {
//         var htmls = posts.map(function(post) {
//             return `<li>
//             <h2>${post.userId}</h2>
//             <p>${post.completed}</p>
//             </li>`;
//         });
//         var html = htmls.join('');
//         document.getElementById('cmt_box').innerHTML = html;
//     })
//     .catch(function(err) {
//         console.log('co loi');
//     })


// var jsonApi = " http://localhost:3000/courses";

// fetch(jsonApi)
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(course) {
//         console.log(course);
//     });


// var courseApi = "http://localhost:3000/courses";

// function start() {
//     getCourses(renderCourse);
//     handleCreate();
// }

// start();

// function getCourses(callBack) {
//     fetch(courseApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callBack);
// }

// function createCourse(data, callback) {
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data)
//     };
//     fetch(courseApi, options)
//         .then(function(response) {
//             response.json();

//         })
//         .then(callback);
// }

// function handleDeleteCourse(idCourse) {
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//         }
//     };
//     fetch(courseApi + '/' + idCourse, options)
//         .then(function(response) {
//             response.json();

//         })
//         .then(function() {
//             var courseItem = document.querySelector('.course-item-' + idCourse);
//             if (courseItem) {
//                 courseItem.remove();
//             }
//         });
// }

// function renderCourse(courses) {
//     var listCoursesBlock = document.querySelector('#list-courses');
//     var htmls = courses.map(function(course) {
//         return `
//         <li class="course-item-${course.id}">
//         <h4>${course.name}</h4>
//         <p>${course.description}</p>
//         <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
//         </li>
//         `;

//     });
//     listCoursesBlock.innerHTML = htmls.join('');
// }

// function handleCreate() {
//     var createBtn = document.querySelector('#create');
//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;

//         var formData = {
//             name: name,
//             description: description
//         };

//         createCourse(formData, function() {
//             getCourses(renderCourse);
//         });
//     }
// }


// CÁC LOẠI FUNTION
// 1 DECLARE FUNTION

// function logger(log) {
//     console.log(log);
// }
// 2 express FUNTION

// var logger = function(log) {
//     console.log(log);
// }

// 3 arrow FUNTION

// var logger = (log) => {
//     console.log(log);
// }
// logger('nhat dz');
// // viết gọn
// const sum = (a, b) => a + b;
// console.log(sum(2, 2    ));



// var array = ['Javascript', 'PHP', 'RUBY'];
// var [a, b, ...conlai] = array;
// console.log(conlai);

// function logger([a, b, ...rest]) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// logger([1, 2, 3, 4, 5, 6]);

// var Array1 = ['Javascript', 'Ruby', 'PHP'];
// var Array2 = ['ReactJS', 'Dart'];
// var Array3 = [...Array1, ...Array2];
// console.log(Array3);

// function highlight([dau, ...phanconlai], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, phanconlai.shift()], [dau])

// }

// var brand = 'F8';
// var course = 'Javascript';


// const html = highlight `Học lập trình ${course} tại ${brand} `;

// console.log(html);

// import logger from './logger.js';
// import * as constants from './constants.js';
// logger('nhat dz', constants.type_warn);


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {

    render: function() {
        console.log('nhat dz')
    },
    start: function() {
        this.render();
    }
}
app.start();