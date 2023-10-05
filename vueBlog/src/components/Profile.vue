<template>
  <div class="container pt-5">
    <div>
      <p class="fs-1 mb-0">{{ user_data.name }}</p>
    </div>
    <div>
      <p class="fs-4">{{ user_data.email }}</p>
    </div>

    <div
      class="row no-gutters"
      v-for="(d, index) in user_data.resume"
      :key="index"
    >
      <Card :top="!index" :resume="d" :show="index % 2 == 1" />
      <div class="col-sm-2 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col" :class="[index ? 'border-right' : '']" />
          <div class="col" />
        </div>
        <h1>
          <span
            class="badge badge-pill border"
            :class="[!index ? 'bg-primary text-light' : 'bg-light text-dark']"
            >{{ new Date(d.date).getFullYear() }}</span
          >
        </h1>
        <div class="row h-50">
          <div
            class="col"
            :class="[
              index != user_data.resume.length - 1 ? 'border-right' : '',
            ]"
          />
          <div class="col" />
        </div>
      </div>
      <Card :top="!index" :resume="d" :show="index % 2 == 0" />
    </div>
  <a id="kakaotalk-sharing-btn" @click="testKakao()">
    <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
      alt="카카오톡 공유 보내기 버튼" />
  </a>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { defineComponent, computed, reactive } from 'vue'
// import useAxios from '/@app_modules/axios.js'
import axios from 'axios'

const Card = defineComponent({
  name: 'Card',
  props: {
    top: Boolean,
    resume: Object,
    show: Boolean,
  },
  setup(props) {},
  template: `
    <div v-if="show" class="col-sm py-2">
        <div class="card" :class="{'border-primary bg-primary text-light': top, shadow: top }">
            <div class="card-body">
            <h4 class="card-title" :class="[top ? 'text-light' : 'text-muted']">{{ resume.title }}</h4>
            <hr/>
            <p class="card-text">{{ resume.content }}</p>
            <a v-if="resume.url != 'null'" :href="resume.url" target="_blank" :class="[top ? 'text-light' : 'text-primary']">link</a>
            </div>
        </div>
    </div>
    <div v-if="!show" class="col-sm"></div>
    `,
})

export default {
    name: 'Profile',
    data(){
        return{
            user_data:{
                name: 'utlee',
                email: 'lutae2000@naver.com',
                resume: [
                            {
                            "date": "1980-11-27",
                            "title": "탄생",
                            "content": "널리 이롭게 하라는 홍익인간 뜻",
                            "url": null
                            }],

            }
        }
    },
    computed:{
      // user_data(){
      //   return store.getters['about_me/user_data']
      // }
    },
    methods: {
        testKakao(){
            Kakao.init('8337021ff0eb8587f733045eaf19fda0');
            Kakao.Share.createDefaultButton({
            container: '#kakaotalk-sharing-btn',
            objectType: 'feed',
            content: {
              title: '딸기 치즈 케익',
              description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
              imageUrl:
                'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
              link: {
                // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
              },
            },
            social: {
              likeCount: 286,
              commentCount: 45,
              sharedCount: 845,
            },
            buttons: [
              {
                title: '웹으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com',
                },
              },
              {
                title: '앱으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com',
                },
              },
            ],
          });
        }

      }
    

    // setup(){
    //     const store = useStore()
    //     // const { axiosGet } = useAxios()

    //     const onSuccess = (data) => {
    //         store.dispatch('setAboutMeData', data.data)
    //     }

        
    //     // axiosGet('/about-me', onSuccess)
    //     axios.get("http://localhost:8080/about-me")
    //         .then((res) =>  user_data = res.data.data)
    //         .catch(res => console.log(res));

        
    //     const user_data  = computed(() => {
    //         return store.getters['about_me/user_data']
    //     })
        
        
    //     console.log(user_data)
    //     return {
    //         user_data
    //     }
    // },
    // components:{
    //     Card
    // }
}
</script>

<style>

</style>