<template>
  <div class="card shadow-md">
    <h1>
      {{ text }}
    </h1>
    <button
      class="button circular violet"
      @click="handleCreateClick"
    >
      <plus-icon
        size="2x"
      >
      </plus-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { PlusIcon } from 'vue-feather-icons';
import '../styles/cards.scss';
import './styles/interactive-card.scss';

@Component({
  components: {
    PlusIcon,
  },
})
export default class BlogCard extends Vue {
  @Prop({ type: String })
  private text!: string;

  private handleCreateClick(): void {
    this.$emit('onCreateClick');
  }
}
</script>
