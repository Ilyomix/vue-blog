<template>
  <div class="login-layout">
    <LoginPrompt
      title="Welcome to Vueblog"
      subtitle="A platform to write your articles with ease !"
    />
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LoginPrompt from './components/LoginPrompt/LoginPrompt.vue';
import LoginForm from './components/LoginForm/LoginForm.vue';
import './styles/login.scss';

@Component({
  components: {
    LoginForm,
    LoginPrompt,
  },
})
export default class Login extends Vue {
}
</script>
