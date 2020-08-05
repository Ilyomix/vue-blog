<template>
  <div class="login-form-layout shadow-xl">
    <h1 class="title">
      Use your credentials to access to the platform
    </h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles/login-form.scss';

@Component({
  components: {
  },
})
export default class LoginForm extends Vue {

}
</script>
