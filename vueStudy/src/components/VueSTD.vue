<template>
  <div>

    <div v-html="html"></div>


    <p>关于computed的使用</p>
    <div>
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
      <button @click="changeMsg">改变Message的值</button>

      <p>补充说明的话：是因为reversedMessage确实是很依赖于message，之时使用最为划算</p>
      <hr>
    </div>

    <p>关于watch的使用</p>
    
    <div>
      {{fullName}}
      <button @click="changeName">改变fullName的值</button>
    </div>
    <hr>

    <p>watch的深度操作</p>
    <div>
       <p>
          Ask a yes/no question:
          <input v-model="question">
        </p>
        <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        html: '<h1>hdsahdjksahdjks<h1>',
        message:'hello',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse();
      }
    },
    watch: {
      fullName: function (pre, next) {
        console.log(pre);
        console.log(next);
      },
      question: function (val) {
        this.answer ='Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
      changeMsg() {
        this.message = 'hahah'
      },
      changeName() {
        this.fullName = 'dsadsad'
      },
      // _.debounce 是一个通过 lodash 限制操作频率的函数。
      // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
      // ajax请求直到用户输入完毕才会发出
      // 学习更多关于 _.debounce function (and its cousin
      // _.throttle), 参考: https://lodash.com/docs#debounce
      getAnswer: _.debounce(
        function () {
          if(this.question.indexOf('?') === -1){
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.answer = 'Thinking....'
          var vm = this;
          axio
        }
      )

      
    }
  }
</script>

<style type="text/css">
  
</style>