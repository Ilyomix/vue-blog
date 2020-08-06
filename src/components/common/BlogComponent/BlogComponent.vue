<template>
  <div v-if="isBlogViewIsLoading">
    <InteractiveCard
      isLoading
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
      @onCreateClick="handleCreateClick"
    />
    <TextCard
      v-for="(article, index) in articles"
      :key="`${article.title}--${index + 1}`"
      :title="article.title"
      :body="article.body"
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
  private isBlogViewIsLoading!: IBlogRequestState;

  private numberOfCardsToDisplayInLoading = 6;

  private handleCreateClick(): void {
    this.$router.push({ name: 'create-post' });
  }
}
</script>
