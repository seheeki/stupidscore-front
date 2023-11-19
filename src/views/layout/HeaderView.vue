<template>
    <div id="nav" class="header nanumbarungothic">
        <template v-if="isLoggedIn">
            <router-link class="menu" to="/"> Stupid Score </router-link> |
            <router-link class="menu" to="/course"> Course </router-link> |
            <router-link class="menu" to="/reserve"> Reserve </router-link> |
            <router-link class="menu" to="/about"> About </router-link>
        </template>

        <template v-else>
            <router-link class="menu" to="/"> Home </router-link> |
            <router-link class="menu" to="/login"> Login </router-link> |
            <router-link class="menu" to="/course"> Course </router-link> |
            <router-link class="menu" to="/about"> About </router-link>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: true, // 로그인 상태 여부를 저장하는 변수
        };
    },
    // 로그인 상태를 확인하고 값을 업데이트하는 로직이 필요합니다.

    // methods: {
    //     checkLoginStatus() {
    //         // 로그인 상태를 확인하고 isLoggedIn 값을 업데이트하는 로직을 작성하세요.
    //     }
    // },
    // created() {
    //     this.checkLoginStatus();
    // }
};
</script>

<style>
.menu {
    color: black;
    text-decoration: none;
    background-color: white;
}

.header {
    font-size: 150%; 
    background-color: white;
    
    margin-top: 20px; /* 위쪽 마진 설정 */
    margin-bottom: 20px; /* 아래쪽 마진 설정 */
    padding-left: 20px; /* 헤더 좌측 여백에 배경색 적용 */
    padding-bottom: 20px;
}

@font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 300;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf') format('truetype');
}

.nanumbarungothic * {
    font-family: 'NanumBarunGothic', sans-serif;
}
</style>
