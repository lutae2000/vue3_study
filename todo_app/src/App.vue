
<template>
<hgroup class="my-5">
  <h1>나의 할일</h1>
  <em>{{ today }}</em>
</hgroup>
  <todo-list-container />
</template>

<script setup>
import TodoListContainer from "./components/TodoListContainer.vue";
import { inject } from 'vue'


const today = inject('today')

</script>


<style scoped>
hgroup {
  text-align: center;
  font-family: 'Arial Bold';
}

hgroup h1 {
  font-weight: bolder;
}
</style>