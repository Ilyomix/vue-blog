<template>
  <div class="pagination-wrapper flex">
   <button
      class="button accent"
      :disabled="!navigationPossibility.canJumpFirstPage"
      @click="handleChange(1, true)"
    >
      <chevrons-left-icon size="1.5x" class="custom-class" />
   </button>
   <button
      class="button accent"
      :disabled="!navigationPossibility.canJumpPrevPage"
      @click="handleChange(-1)"
    >
      <chevron-left-icon size="1.5x" class="custom-class" />
   </button>
   <div class="page-badge shadow-md">
    <div class="page-label">
      Page
    </div>
    <div class="page">
      {{ currentPage }} / {{ maxPage }}
     </div>
   </div>
   <button
      class="button accent"
      :disabled="!navigationPossibility.canJumpNextPage"
      @click="handleChange(1)"
    >
      <chevron-right-icon size="1.5x" class="custom-class" />
   </button>
   <button
      class="button accent"
      :disabled="!navigationPossibility.canJumpLastPage"
      @click="handleChange(maxPage, true)"
    >
      <chevrons-right-icon size="1.5x" class="custom-class" />
   </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles/pagination.scss';
import {
  ChevronRightIcon,
  ChevronsRightIcon,
  ChevronLeftIcon,
  ChevronsLeftIcon,
} from 'vue-feather-icons';

@Component({
  components: {
    ChevronRightIcon,
    ChevronsRightIcon,
    ChevronLeftIcon,
    ChevronsLeftIcon,
  },
})
export default class CreatePost extends Vue {
  @Prop({ type: Boolean })
  private isLoading!: boolean;

  @Prop({ type: Number })
  private currentPage!: number;

  @Prop({ type: Number })
  private maxPage!: number;

  @Prop({ type: Object })
  private navigationPossibility!: {[key: string]: boolean};

  // PageMovement : negative value is previous pages, positive value is next pages
  private handleChange(pageMovement: number, goToPageNumber: boolean) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (goToPageNumber) {
      this.$emit('handleChange', pageMovement);
    } else {
      this.$emit('handleChange', this.currentPage + pageMovement);
    }
  }
}
</script>
