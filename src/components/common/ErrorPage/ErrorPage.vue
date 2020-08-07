<template>
  <div class="generic-card shadow-md">
    <div class="text red">
      <wifi-off-icon size="5.5x" />
    </div>
    <div class="text">
      <h2 class="text red">
        {{ title }}
      </h2>
      <p  class="text red-half">
        {{ content }}
      </p>
      <code v-if="message">
        {{ message }}
      </code>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
} from 'vue-property-decorator';
import { WifiOffIcon } from 'vue-feather-icons';

@Component({
  components: {
    WifiOffIcon,
  },
})
export default class ErrorPage extends Vue {
  @Prop({ type: String })
  private title!: string;

  @Prop({ type: String })
  private content!: string;

  @Prop({ type: String })
  private message!: string;
}
</script>
