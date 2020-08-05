<template>
  <div class="login-form-layout shadow-xl">
    <h1 class="title text-shadow-md">
      {{ title }}
    </h1>
    <h2 class="subtitle">
      {{ subtitle }}
    </h2>
    <h3 v-if="errorMessage" class="form-error-message">
      <alert-triangle-icon size="1.2x" class="mr-2" />
      {{ errorMessage }}
    </h3>
    <label
      :class='formClasses().username.label'
      for="username"
    >
      <user-icon size="1.2x" class="mr-2" />
      Username
    </label>
    <input
      id="username"
      :class='formClasses().username.input'
      placeholder="ex: johnDoe"
      type="text"
      v-model="form.username"
    />
    <label
      for="password"
      :class='formClasses().password.label'
    >
      <lock-icon size="1.2x" class="mr-2" />
      Password
    </label>
    <input
      id="password"
      :class="formClasses().password.input"
      type="password"
      placeholder="********"
      v-model="form.password"
    />
    <div class="submit-button-layout">
      <button
        class="button light large-button-text"
        @click="onFormSubmit"
      >
        <arrow-right-icon size="1.5x" class="mr-2" />
        Let's Go!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  ArrowRightIcon,
  LockIcon,
  UserIcon,
  AlertTriangleIcon,
} from 'vue-feather-icons';
import './styles/login-form.scss';

@Component({
  components: {
    LockIcon,
    UserIcon,
    ArrowRightIcon,
    AlertTriangleIcon,
  },
})
export default class LoginForm extends Vue {
  @Prop({ type: String, default: '' })
  private title!: string;

  @Prop({ type: String, default: '' })
  private subtitle!: string;

  @Prop({ type: String, default: '' })
  private errorMessage!: string;

  @Prop({ type: Object })
  private formErrors!: {[key: string]: boolean};


  private form: {[key: string]: string | null} = {
    username: null,
    password: null,
  };

  private formClasses = () => ({
    username: {
      label: this.formErrors.form && (this.form.username === ''
              || this.form.username === null) ? 'label error' : 'label',
      input: this.formErrors.form && (this.form.username === ''
              || this.form.username === null) ? 'input error' : 'input',
    },
    password: {
      label: this.formErrors.form && (this.form.password === ''
              || this.form.password === null) ? 'label error' : 'label',
      input: this.formErrors.form && (this.form.password === ''
              || this.form.password === null) ? 'input error' : 'input',
    },
  })

  private onFormSubmit(): void {
    this.$emit('onSubmit', this.form);
  }
}
</script>
