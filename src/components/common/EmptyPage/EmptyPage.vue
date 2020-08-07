<template>
  <div class="generic-card shadow-md">
    <div class="text violet">
      <slash-icon size="5.5x" />
    </div>
    <div class="text">
      <h2 class="text violet">
        {{ title }}
      </h2>
      <p  class="text violet-half">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
} from 'vue-property-decorator';
import { SlashIcon } from 'vue-feather-icons';

@Component({
  components: {
    SlashIcon,
  },
})
export default class EmptyPage extends Vue {
  @Prop({ type: String })
  private title!: string;

  @Prop({ type: String })
  private content!: string;
}
</script>
