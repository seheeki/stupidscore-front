<template>
    <div class="background">
        <h1>Course</h1>

        <ul class="course-list">
            <li v-for="course in courses" :key="course.id" class="course-item">
                <div class="course-box">
                    <div class="course-image-container">
                        <img :src="require(`@/${course.courseImg}`)" :style="{ maxWidth: '500px' }" alt="Course Image" class="course-image" />
                    </div>
                    <div class="course-details">
                        <h2>{{ course.courseName }}</h2>
                        <p>{{ course.courseTime }} minutes </p>
                        <p>{{ course.coursePrice }} $ </p>
                        <button @click="$router.push({name: 'course-detail', params: {courseid: `${course.courseName}`}})"> 예약 </button>
                        <!--<router-link class="reserve" to="/course/course1"> Reserve </router-link>-->
                    </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
import rest from '@/globals/rest';

export default {
    data() {
        return {
            isLoggedIn: true, // 로그인 상태 여부를 저장하는 변수
            courses: [],
            cid: null,
        };
    },

    async mounted() {
        const res = await rest.get('/course');
        this.courses = res.data;
    },
};
</script>

<style>
.course-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 각 카테고리에 왼쪽 마진 추가 */
.course-item {
  margin-left: 20px; /* 원하는 크기로 조정 */
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

/* 이미지 컨테이너 사이즈 조정 */
.course-image-container {
  max-width: 100%; /* 이미지 컨테이너 최대 너비 지정 */
  overflow: hidden; /* 넘치는 이미지를 가림 */
}

/* 이미지 크기 조정 */
.course-image {
  height: auto; /* 비율 유지 */
  margin-right: 20px;
}

/* 박스 스타일 */
.course-box {
  border: 1px solid #ccc; /* 테두리 추가 */
  padding: 20px; /* 내부 여백 추가 */
  border-radius: 8px; /* 둥근 모서리 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
}
</style>
