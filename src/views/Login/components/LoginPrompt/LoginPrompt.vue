<template>
  <div class="login-prompt-layout shadow-xl">
    <h1 class="title text-shadow-md">
      {{ title }}
    </h1>
    <h2 class="subtitle">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles/login-prompt.scss';

@Component({
  components: {
  },
})
export default class LoginForm extends Vue {
  @Prop({ type: String, default: '' })
  private title!: string;

  @Prop({ type: String, default: '' })
  private subtitle!: string;
}
</script>
