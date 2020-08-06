<template>
  <div class="fluid">
    <BlogComponent
      title="Articles"
      :articles="getPosts"
      :isLoading="isLoading"
      @handleDelete="handleDelete"
    />
    <Pagination
      @handleChange="handleNavigationChange"
      onClickScrollTopPage
      :currentPage="getCurrentArticlePage"
      :maxPage="getArticlesLastPage"
      :isLoading="isLoading"
      :navigationPossibility="{
        canJumpNextPage,
        canJumpLastPage,
        canJumpPrevPage,
        canJumpFirstPage
      }"
    />
  </div>
</template>

<script lang="ts">
import {
  store,
  IPosts,
} from 'src/store/posts/types';
import {
  Vue,
  Component,
  Prop,
  Watch,
} from 'vue-property-decorator';
import BlogComponent from 'src/components/common/BlogComponent/BlogComponent.vue';
import Pagination from 'src/components/common/Pagination/Pagination.vue';

@Component({
  components: {
    BlogComponent,
    Pagination,
  },
})
export default class Blog extends Vue {
  @Prop({ type: Boolean })
  private isLoading!: boolean;

  @store.Getter
  private getCurrentArticlePage !: number;

  @store.Getter
  private getArticlesLastPage !: number;

  @store.Getter
  private canJumpNextPage!: boolean;

  @store.Getter
  private canJumpLastPage!: boolean;

  @store.Getter
  private canJumpPrevPage!: boolean;

  @store.Getter
  private canJumpFirstPage!: boolean;

  @store.Action
  private queryPosts!: (page: number) => Promise<Response>;

  @store.Action
  private deletePost!: (articleId: number) => Promise<Response>;

  @store.Action
  private changeArticlesPage!: (page: number) => void;

  @store.Getter
  private getPosts!: IPosts[];

  private created() {
    this.queryPosts(this.getCurrentArticlePage);
  }

  private async handleDelete(articleId: number) {
    await this.deletePost(articleId);
    await this.queryPosts(this.getCurrentArticlePage);
  }

  private handleNavigationChange(page: number) {
    this.changeArticlesPage(page);
  }

  @Watch('getCurrentArticlePage')
  private async onNavigationChanged() {
    await this.queryPosts(this.getCurrentArticlePage);
  }
}
</script>
