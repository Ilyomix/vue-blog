<template>
  <div>
    Create Post
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class CreatePost extends Vue {
  @Prop({ type: Boolean })
  private isLoading!: boolean;

  @Prop({ type: Number })
  private currentPage!: number;

  // PageMovement : negative value is previous pages, positive value is next pages
  private handleChange(pageMovement: number) {
    this.$emit('handleChange', this.currentPage + pageMovement);
  }
}
</script>
