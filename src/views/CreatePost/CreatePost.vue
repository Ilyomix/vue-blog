<template>
  <EditCreateArticle
    title="New article"
    :errorMessage="getErrorMessage()"
    :formErrors="formErrors"
    :isPostArticleRequestLoading="isPostArticleRequestLoading"
    @onSubmit="onPublishSubmit"
  />
</template>

<script lang="ts">
import {
  store,
} from 'src/store/posts/types';
import { Vue, Component, Prop } from 'vue-property-decorator';
import EditCreateArticle from 'src/components/common/EditCreateArticle/EditCreateArticle.vue';

@Component({
  components: {
    EditCreateArticle,
  },
})
export default class CreatePost extends Vue {
  @store.Action
  private createPost!: (content: {
    title: string,
    body: string,
  }) => Promise<Response>;

  private form = {};

  private isPostArticleRequestLoading = false;

  private postArticleRequestErrorMessage = '';

  private formErrors: {[key: string]: boolean} = {
    form: false,
    Unauthorized: false,
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
      'Failed to fetch': 'Impossible to create your article, check your internet connection',
      Unauthorized: 'Server error, relog into your session.',
    };

    const errorIndex = Object
      .keys(this.formErrors)
      .find((x: string) => this.formErrors[x] === true);

    return errorIndex ? errorMessages[errorIndex] : null;
  }

  private async onPublishSubmit(content: {
      title: string,
      body: string,
    }): Promise<void> {
    this.resetFormErrors();
    this.form = { ...content };

    this.formErrors.form = Object.values(this.form).some(x => x === null || x === '');

    if (!this.formErrors.form) {
      this.isPostArticleRequestLoading = true;

      await this.createPost(content).then(() => {
        this.isPostArticleRequestLoading = false;
        this.$router.push('/blog');
      });
    }
  }
}
</script>
