<template>
  <div class="fluid">
    <BlogComponent
      title="Articles"
      :articles="getPosts"
      :isLoading="isLoading"
    />
  </div>
</template>

<script lang="ts">
import {
  store,
  IPosts,
} from 'src/store/posts/types';
import { Vue, Component, Prop } from 'vue-property-decorator';
import BlogComponent from 'src/components/common/BlogComponent/BlogComponent.vue';

@Component({
  components: {
    BlogComponent,
  },
})
export default class Blog extends Vue {
  @Prop({ type: Boolean })
  private isLoading!: boolean;

  @store.Action
  private queryPosts!: (page: number) => Promise<Response>;

  @store.Getter
  private getPosts!: IPosts[];

  private created() {
    this.queryPosts(1);
  }
}
</script>
