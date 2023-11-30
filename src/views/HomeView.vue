<template>
    <div class="background">
        <h1>Stupid Score home page v2</h1>
        <div class="image-container">
            <img :src="require(`@/assets/images/golf_introduction01.jpg`)" alt="Golf Introduction" />
        </div>
    </div>
</template>

<style>
.background {
    /* 화면에 가운데 정렬하거나 원하는 스타일을 추가하세요 */
    text-align: center;
}

.image-container {
    max-width: 100%; /* 화면 너비에 맞게 이미지 크기 조절 */
    margin: 0 auto; /* 화면 가운데 정렬 */
}

/* 이미지가 너무 클 경우, 다음과 같이 최대 높이도 지정하여 비율을 유지할 수 있습니다 */
.image-container img {
    max-width: 100%;
    height: auto;
}
</style>

<script>
export default {
    // 필요한 로직이 있다면 이곳에 추가하세요
}
</script>
