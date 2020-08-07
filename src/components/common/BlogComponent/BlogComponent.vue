<template>
  <div v-if="isBlogViewIsLoading">
    <InteractiveCard
      :text="title"
      :notificationMessage="getNotificationMessage"
      @onCreateClick="handleCreateClick"
    />
    <TextCard
      v-for="index in numberOfCardsToDisplayInLoading"
      :key="`text-card-loader-${index + 1}`"
      isLoading
    />
  </div>
  <div v-else>
    <InteractiveCard
      :text="title"
      :notificationMessage="getNotificationMessage"
      @onCreateClick="handleCreateClick"
    />
    <slot name="pagination" />
    <TextCard
      v-for="(article, index) in articles"
      :key="`${article.title}--${index + 1}`"
      :title="article.title"
      :body="article.body"
      :articleId="article.id"
      @handleDelete="handleDelete"
      @handleEdit="handleEdit"
    />
  </div>
</template>

<script lang="ts">
import {
  store,
  IBlogRequestState,
  IEditPost,
} from 'src/store/posts/types';
import { Vue, Component, Prop } from 'vue-property-decorator';
import InteractiveCard from 'src/components/common/Cards/InteractiveCard/InteractiveCard.vue';
import TextCard from 'src/components/common/Cards/TextCard/TextCard.vue';

@Component({
  components: {
    InteractiveCard,
    TextCard,
  },
})
export default class BlogCard extends Vue {
  @Prop({ type: String })
  private title!: string;

  @Prop({ type: Array })
  private articles!: Array<{
    id: number | null,
    title: string,
    body: string,
  }>;

  @store.Action
  private savePostToUpdate!: (post: IEditPost) => void;

  @store.Getter
  private getNotificationMessage!: string;

  @store.Getter
  private isBlogViewIsLoading!: boolean;

  private numberOfCardsToDisplayInLoading = 6;

  private handleCreateClick(): void {
    this.$router.push({ name: 'create-post' });
  }

  private handleEdit(payload: IEditPost) {
    this.savePostToUpdate(payload);
    this.$router.push({ name: 'edit-post' });
  }

  private handleDelete(articleId: number): void {
    this.$emit('handleDelete', articleId);
  }
}
</script>
