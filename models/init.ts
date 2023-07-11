import user from './user'
user.sync().then(res => {
  console.log(user.findAll());

})
console.log(123);
