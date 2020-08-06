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
import {
  store,
  ILoginRequestState,
  IUserSessionState,
} from 'src/store/login/types';
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
  @store.Action
  private queryLogin!: (credentials: {[key: string]: string}) => Promise<Response>;

  @store.Getter
  private getLoginRequestState!: ILoginRequestState;

  @store.Getter
  private getUserSessionState!: IUserSessionState;

  private form = {};

  private formErrors: {[key: string]: boolean} = {
    form: false,
    Unauthorized: false,
    'Failed to fetch': false,
  };

  private resetFormErrors() {
    Object.keys(this.formErrors).forEach((key: string) => {
      this.formErrors[key] = false;
    });
  }

  private getErrorMessage = (): string | null => {
    const errorMessages: {[key: string]: string} = {
      form: 'Some fields are empty !',
      'Failed to fetch': 'Impossible to login, check your internet connection',
      Unauthorized: 'Incorrect credentials, try again',
    };

    const errorIndex = Object
      .keys(this.formErrors)
      .find((x: string) => this.formErrors[x] === true);

    return errorIndex ? errorMessages[errorIndex] : null;
  }

  private async onLoginSubmit(payload: {[key: string]: string}): Promise<void> {
    this.resetFormErrors();
    this.form = { ...payload };

    this.formErrors.form = Object.values(this.form).some(x => x === null || x === '');

    if (!this.formErrors.form) {
      await this.queryLogin(this.form).then(() => {
        if (this.getLoginRequestState.message !== 'OK') {
          this.formErrors[this.getLoginRequestState.message] = true;
        } else {
          this.$router.push('/blog');
        }
      });
    }
  }
}
</script>
