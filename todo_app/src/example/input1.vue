<template>
  <label>이름</label>
  <input type="text" v-model="result.name" placeholder="이름"><br>
  <label>나이</label>
  <input type="number" v-model="result.age" placeholder="나이"><br>
  <label>성별</label>

  <label>
      <input type="radio" name="gender" v-model="result.gender" value="male">남성
  </label>

  <label>
      <input type="radio" name="gender" v-model="result.gender" value="female">여성
    </label><br>
  <label>취미: </label>
  <span v-for="hobby in hobby_options" :key="hobby">
    <label>
    <input type="checkbox" v-model="result.hobby" v-bind:value="hobby" />
    {{ hobby }}
    </label>
  </span>
  <br>
  <label>국가: </label>
  <select v-model="result.country">
    <option v-for="country in country_options" :key="country">
        {{ country }}
    </option>
  </select>
  <label>날짜</label>
  <input type="date" v-model="result.date"><br>
    <label>범위</label>
    <input type="range" v-model="result.range"><br>

<hr>
        {{ result}}
</template>

<script setup>
import { ref, reactive } from 'vue'

const name = ref('')
const age = 0
const gender = 'male'
const hobby = ['스포츠']
const password = ''
const country = '한국'
const country_options = ['한국', '미국', '중국']
const hobby_options = ['스포츠', '그림', '음악', '코딩'];
const range=0
const date=''

const result = reactive({
    name
    ,age
    ,gender
    ,hobby
    ,password
    ,country
    ,range
    ,date
})
</script>

<style>

</style>