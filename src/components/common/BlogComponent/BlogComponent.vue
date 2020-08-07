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
    />
  </div>
</template>

<script lang="ts">
import {
  store,
  IBlogRequestState,
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
    id: number,
    title: string,
    body: string,
  }>;

  @store.Getter
  private getNotificationMessage!: string;

  @store.Getter
  private isBlogViewIsLoading!: boolean;

  private numberOfCardsToDisplayInLoading = 6;

  private handleCreateClick(): void {
    this.$router.push({ name: 'create-post' });
  }

  private handleDelete(articleId: number): void {
    this.$emit('handleDelete', articleId);
  }
}
</script>
