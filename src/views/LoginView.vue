<div class="input_row">
  <label for="id">ID</label>
  <input type="text" id="id" v-model="user.userid">
</div>
<div class="input_row">
   <label for="name">Password</label>
   <input type="text" id="name" v-model="user.name">
</div>

<button :click="signUp">Login</button>

<script>
data: function () {
  return {
    user: {
      userid: '',
      password: ''
    }
  }
},
methods: {
 login: function (event) {
    this.$http.post('/api/users/login', {
      user: this.user
    })
    .then(
      (res) => {  //로그인 성공
        alert(res.data.message);
      },
      (err) => { // error 를 보여줌
        alert('Login failed! please check your id or password');
    })
    .catch(err => {
      alert(err);
    })
  }
}
</script>