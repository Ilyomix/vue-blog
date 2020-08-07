<template>
  <div v-if="isLoading" class="card text shadow">
    <div class="flex">
      <div class="loader-skeleton title" />
      <div class="loader-skeleton small-round-button" />
    </div>
    <div class="loader-skeleton text" />
  </div>
  <div v-else class="card text shadow">
    <div class="card-text-header-wrapper">
      <h2>
        {{ title }}
      </h2>
      <div class="card-text-options-wrapper">
        <div
          class="card-text-options-button-wrapper"
        >
          <button
            v-if="viewMoreOptions && !areYouSureToDeletePost"
            class="button edit"
            @click="handleEdit({
              title,
              body,
              articleId,
            })"
          >
            <edit-icon size="1.5x" class="mr-2" />
            Edit article
          </button>
          <button
            v-if="viewMoreOptions && !areYouSureToDeletePost"
            class="button delete"
            @click="handleAreYouSureToDeletePost"
          >
            <trash-2-icon size="1.5x" class="mr-2" />
            Delete article
          </button>
          <button
            v-if="viewMoreOptions && areYouSureToDeletePost"
            class="button cancel"
            @click="handleAreYouSureToDeletePost"
          >
            <skip-back-icon size="1.5x" class="mr-2" />
            No I'm not
          </button>
          <button
            v-if="viewMoreOptions && areYouSureToDeletePost"
            class="button delete"
            @click="handleDelete(articleId)"
          >
            <trash-2-icon size="1.5x" class="mr-2" />
            Yes I'm sure !
          </button>
          <button
            class="button text flat"
            @click="handleViewMoreOptions"
          >
            <MoreVerticalIcon v-if="!viewMoreOptions" size="1.5x" />
            <x-icon v-else size="1.5x" />
          </button>
        </div>
      </div>
    </div>
    <p class="no-text-overflow">
      {{ bodyText }}
    </p>
    <div
      class="button-view-more-wrapper"
      v-if="!viewMore && this.body.length >= textLengthThreshold"
    >
      <button
        class="button text violet"
        @click="handleViewMore"
      >
        <chevrons-down-icon size="1.5x" class="mr-2" />
        View more
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  PlusIcon,
  ChevronsDownIcon,
  MoreVerticalIcon,
  XIcon,
  Trash2Icon,
  SkipBackIcon,
  EditIcon,
} from 'vue-feather-icons';
import { IEditPost } from 'src/store/posts/types';
import '../styles/cards.scss';
import './styles/text-card.scss';

@Component({
  components: {
    PlusIcon,
    ChevronsDownIcon,
    SkipBackIcon,
    MoreVerticalIcon,
    Trash2Icon,
    XIcon,
    EditIcon,
  },
})
export default class TextCard extends Vue {
  @Prop({ type: String })
  private title!: string;

  @Prop({ type: String })
  private body!: string;

  @Prop({ type: Number })
  private articleId!: number;

  @Prop({ type: Boolean })
  private isLoading!: boolean;

  private viewMore = false;

  private viewMoreOptions = false;

  private areYouSureToDeletePost = false;

  private textLengthThreshold = 500;

  private get bodyText(): string {
    if (this.viewMore) {
      return this.body;
    }
    return (this.body && this.body.length > this.textLengthThreshold)
      ? `${this.body.substring(0, this.textLengthThreshold)}`
      : this.body;
  }

  private handleViewMore() {
    this.viewMore = true;
  }

  private handleViewMoreOptions() {
    this.viewMoreOptions = !this.viewMoreOptions;
    this.areYouSureToDeletePost = false;
  }

  private handleAreYouSureToDeletePost() {
    this.areYouSureToDeletePost = !this.areYouSureToDeletePost;
  }

  private handleEdit(post: IEditPost) {
    this.$emit('handleEdit', post);
  }

  private handleDelete(articleId: number) {
    this.$emit('handleDelete', articleId);
    this.viewMoreOptions = false;
    this.areYouSureToDeletePost = false;
  }
}
</script>
