// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123qwe"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser= {
    email: "nandani@323@gmail.com",
    fullname: {
        userFullName :{
            firstname: "nandani",
            lastname: "Singh   "
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}


// console.log(obj3)


const users = [
    {
    id: 1,
    email: "n@gmail.com"
   },
   {
    id: 2,
    email: "n@gmail.com"
    
   },
   {
    id: 3,
    email: "n@gmail.com"
   },

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'))