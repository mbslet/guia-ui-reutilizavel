<template>
    <div class="container">
    <Blog />
    <div class="comment-space">
      <p>Comment (1)</p>
    </div>
    <div>
      <comment class="message" />
    </div>
    <add-comment />
  </div>
</template>
<script>
import Blog from '../components/Blog.vue';
import AddComment from '@/components/AddComment.vue'; // add this
import Comment from '../components/Comment';

export default {
  name: 'App',
  components: {
    Blog,
    AddComment,
    Comment
  }
}
</script>

<style>

</style>