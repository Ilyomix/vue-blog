<template>
  <div class="login-layout">
    <LoginPrompt
      title="Welcome to Vueblog"
      subtitle="A platform to write your articles with ease !"
    />
    <LoginForm
      title="Login"
      subtitle="Enter your credentials to enjoy Vueblog"
      :errorMessage="getErrorMessage()"
      :formErrors="formErrors"
      @onSubmit="onLoginSubmit"
    />
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
  private form = {};

  private formErrors: {[key: string]: boolean} = {
    form: false,
    noNetwork: false,
    credentials: false,
  };

  private resetFormErrors() {
    Object.keys(this.formErrors).forEach((x: string) => this.formErrors[x] === false);
  }

  private getErrorMessage = (): string | null => {
    const errorMessages: {[key: string]: string} = {
      form: 'Some fields are empty !',
      request: 'Impossible to login, check your internet connection',
      credentials: 'Incorrect credentials, try again ?',
    };

    const errorIndex = Object
      .keys(this.formErrors)
      .find((x: string) => this.formErrors[x] === true);

    return errorIndex ? errorMessages[errorIndex] : null;
  }

  private onLoginSubmit(payload: {[key: string]: string}) {
    this.resetFormErrors();
    this.form = { ...payload };

    this.formErrors.form = Object.values(this.form).some(x => x === null || x === '');
    console.log(payload);
  }
}
</script>
