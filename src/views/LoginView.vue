<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <div class="form-container">
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* 페이지 스타일 */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* 로그인 타이틀 스타일 */
.login-title {
  margin-bottom: 30px;
  font-size: 2em;
}

/* 폼 컨테이너 스타일 */
.form-container {
  max-width: 400px;
  width: 100%;
}

/* 폼 스타일 */
.login-form {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  /* 폼 요소들 가운데 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 폼 그룹 스타일 */
.form-group {
  margin-bottom: 15px;
  width: 100%;
}

/* 라벨 스타일 */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

/* 입력 필드 스타일 */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 버튼 스타일 */
button {
  margin-top: 15px;
  width: 100%;
  padding: 10px 20px;
  background-color: #35822e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2c6f27;
}
</style>
