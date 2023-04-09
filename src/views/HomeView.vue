<script setup>
import { ref } from 'vue';
import tweetComponent from '@/components/tweet-component.vue';
import vweets from '@/vweets';

const tweets = ref(vweets)
</script>

<template>
  <div class="home">
    <tweetComponent v-for="tweet in tweets" :key="tweet._id" :tweet="tweet"/>
  </div>
</template>
