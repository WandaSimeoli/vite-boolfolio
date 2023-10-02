<script>

export default {
  components :{
    name: 'Contactpage'
  },

  data() {
    return { 
      title: 'Contact',
      contactData :{
        name:'',
        email:'',
        message:''
      }
     }
  },
  methods: {
    sendMessage() {
      alert('Send Message');
    }
  }
}
</script>

<template>
<h2>
  {{ title }}
</h2>
<div class="container">
<form @submit.prevent="sendMessage()">
  <label for="name">
     Your Name
     <span>*</span>
  </label>
  <input type="text" name="name" id="name" placeholder="Enter your name" v-model="contactData.name" minlength="3" required>
  <label for="email">
     Your email
     <span>*</span>
  </label>
  <input type="email" name="email" id="email" placeholder="Enter your email" v-model="contactData.email" required>
  <label for="message">
     Your Message
     <span>*</span>
  </label>
  <textarea name="message" id="message" cols="25" rows="8" placeholder="Enter your message" v-model="contactData.message"></textarea>
  <button type="submit">Send</button>
</form>
</div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  textarea {
    display: block;
    margin: 10px 0;
  }
  label {
    display: block;
    margin: 10px 0;
    > span {
      font-weight: bolder;
      color: red;
    }
  }
}
</style>