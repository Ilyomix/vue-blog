<template>
  <EditCreateArticle
    :title="getPostToEdit.title"
    :content="getPostToEdit.body"
    :articleId="getPostToEdit.articleId"
    :errorMessage="getErrorMessage()"
    :formErrors="formErrors"
    :isPostArticleRequestLoading="isPostArticleRequestLoading"
    @onSubmit="onPublishSubmit"
  />
</template>

<script lang="ts">
import {
  store, IEditPost,
} from 'src/store/posts/types';
import { Vue, Component, Prop } from 'vue-property-decorator';
import EditCreateArticle from 'src/components/common/EditCreateArticle/EditCreateArticle.vue';

@Component({
  components: {
    EditCreateArticle,
  },
})
export default class EditPost extends Vue {
  @store.Action
  private updatePost!: (content: {
    title: string,
    body: string,
    id: number,
  }) => Promise<Response>;

  @store.Action
  private notificationMessage!: (content: string) => void;

  @store.Getter
  private getPostToEdit !: IEditPost;

  private form = {};

  private isPostArticleRequestLoading = false;

  private postArticleMessageDelayToRemove = 4000;

  private formErrors: {[key: string]: boolean} = {
    form: false,
    'Failed to fetch': false,
  };

  private resetFormErrors() {
    Object.keys(this.formErrors).forEach((key: string) => {
      this.formErrors[key] = false;
    });
  }

  private getErrorMessage = (): string | null => {
    const errorMessages: {[key: string]: string} = {
      form: 'Some fields are empty !',
      'Failed to fetch': 'Impossible to modify your article, check your internet connection',
    };

    const errorIndex = Object
      .keys(this.formErrors)
      .find((x: string) => this.formErrors[x] === true);

    return errorIndex ? errorMessages[errorIndex] : null;
  }

  private async onPublishSubmit(content: {
      title: string,
      body: string,
      id: number,
    }): Promise<void> {
    this.resetFormErrors();
    this.form = { ...content };

    this.formErrors.form = Object.values(this.form).some(x => x === null || x === '');

    if (!this.formErrors.form) {
      this.isPostArticleRequestLoading = true;

      await this.updatePost(content).then((res: any) => {
        this.isPostArticleRequestLoading = false;

        if (res) {
          this.$router.push('/blog');
          this.notificationMessage('Your article is now modified and posted !');
          this.removePostMessageWithDelay(this.postArticleMessageDelayToRemove);
        } else {
          this.formErrors['Failed to fetch'] = true;
        }
      });
    }
  }

  private removePostMessageWithDelay(delay: number): void {
    setTimeout(() => {
      this.notificationMessage('');
    }, delay);
  }
}
</script>
