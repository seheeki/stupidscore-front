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
export default {
  data: function() {
    return {
      loginData: {
        id: '',
        password: ''
      }
    };
  },
};
</script>