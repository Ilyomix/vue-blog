<template>
  <div v-if="!getPosts.length && !isBlogViewIsLoading">
    <BlogComponent
      title="Articles"
      :notificationMessage="getNotificationMessage"
      :articles="getPosts"
      @handleDelete="handleDelete"
      hidePosts
    />
    <EmptyPage
      title="No articles published yet"
      content="Press the + Button the write your first post !"
    />
  </div>
  <div v-else-if="isBlogViewHasError">
    <ErrorPage
      title="He's dead Jim !"
      content="Seems we had some issues with our servers or your internet connection,
      check your setup or come back later."
      :message="getBlogViewErrorMessage"
    />
  </div>
  <div class="fluid" v-else-if="!isBlogViewHasError">
    <BlogComponent
      title="Articles"
      :notificationMessage="getNotificationMessage"
      :articles="getPosts"
      @handleDelete="handleDelete"
      :hidePosts="!getPosts.length"
    />
    <Pagination
      v-if="getPosts.length"
      @handleChange="handleNavigationChange"
      onClickScrollTopPage
      :currentPage="getCurrentArticlePage"
      :maxPage="getArticlesLastPage"
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
  IBlogRequestState,
} from 'src/store/posts/types';
import {
  Vue,
  Component,
  Prop,
  Watch,
} from 'vue-property-decorator';
import BlogComponent from 'src/components/common/BlogComponent/BlogComponent.vue';
import Pagination from 'src/components/common/Pagination/Pagination.vue';
import EmptyPage from 'src/components/common/EmptyPage/EmptyPage.vue';
import ErrorPage from 'src/components/common/ErrorPage/ErrorPage.vue';

@Component({
  components: {
    BlogComponent,
    Pagination,
    EmptyPage,
    ErrorPage,
  },
})
export default class Blog extends Vue {
  @store.Getter
  private getCurrentArticlePage !: number;

  @store.Getter
  private getArticlesLastPage !: number;

  @store.Getter
  private getNotificationMessage !: number;

  @store.Getter
  private canJumpNextPage!: boolean;

  @store.Getter
  private canJumpLastPage!: boolean;

  @store.Getter
  private canJumpPrevPage!: boolean;

  @store.Getter
  private canJumpFirstPage!: boolean;

  @store.Getter
  private getPosts!: IPosts[];

  @store.Getter
  private isBlogViewHasError!: boolean;

  @store.Getter
  private isBlogViewIsLoading!: boolean;

  @store.Getter
  private getBlogViewErrorMessage!: string;

  @store.Action
  private queryPosts!: (page: number) => Promise<Response>;

  @store.Action
  private deletePost!: (articleId: number) => Promise<Response>;

  @store.Action
  private changeArticlesPage!: (page: number) => void;

  private mounted() {
    this.queryPosts(this.getCurrentArticlePage);
  }

  private async handleDelete(articleId: number) {
    await this.deletePost(articleId);
    await this.queryPosts(this.getCurrentArticlePage);
    if (this.getCurrentArticlePage > 1 && !this.getPosts.length) {
      this.changeArticlesPage(this.getCurrentArticlePage - 1);
    }
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
