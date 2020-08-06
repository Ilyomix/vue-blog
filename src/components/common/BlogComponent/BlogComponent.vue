<template>
  <div>
    <InteractiveCard
      :text="title"
      @onCreateClick="handleCreateClick"
    />
    <div
      v-for="(article, index) in articles"
      :key="`${article.title}--${index + 1}`"
    >
      {{ article.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import InteractiveCard from 'src/components/common/Cards/InteractiveCard/InteractiveCard.vue';

@Component({
  components: {
    InteractiveCard,
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

  private handleCreateClick(): void {
    this.$router.push({ name: 'create-post' });
  }
}
</script>
