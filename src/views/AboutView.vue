<template>
    <div>
        <h1>About Stupid Score</h1>
                
        <br>
        <button @click="posts=[]">Clear</button>

        <ul>
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import rest from '@/globals/rest2';

export default {
    data() {
        return {
            posts: [],
        };
    },

    async mounted() {
        const res = await rest.get('/posts');
        this.posts = res.data;
    },
}
</script>