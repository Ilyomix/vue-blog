<template>
  <div class="login-form-layout shadow-xl">
    <h1 class="title text-shadow-md">
      {{ title }}
    </h1>
    <h2 class="subtitle">
      {{ subtitle }}
    </h2>
    <label
      class="label"
      for="username"
    >
      <user-icon size="1.2x" class="mr-2" />
      Username
    </label>
    <input
      id="username"
      class="input"
      placeholder="ex: johnDoe"
      type="text"
    />
    <label
      for="password"
      class="label"
    >
      <lock-icon size="1.2x" class="mr-2" />
      Password
    </label>
    <input
      id="password"
      class="input"
      type="password"
      placeholder="********"
    />
    <div class="submit-button-layout">
      <button class="button light large-button-text">
        <arrow-right-icon size="1.5x" class="mr-2" />
        Let's Go!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArrowRightIcon, LockIcon, UserIcon } from 'vue-feather-icons';
import './styles/login-form.scss';

@Component({
  components: {
    LockIcon,
    UserIcon,
    ArrowRightIcon,
  },
})
export default class LoginForm extends Vue {
  @Prop({ type: String, default: '' })
  private title!: string;

  @Prop({ type: String, default: '' })
  private subtitle!: string;
}
</script>
