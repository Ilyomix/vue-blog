<template>
  <EditCreateArticle
    title="New article"
    :errorMessage="getErrorMessage()"
    :formErrors="formErrors"
    @onSubmit="onPublishSubmit"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import EditCreateArticle from 'src/components/common/EditCreateArticle/EditCreateArticle.vue';

@Component({
  components: {
    EditCreateArticle,
  },
})
export default class CreatePost extends Vue {
  private form = {};

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

  private async onPublishSubmit(payload: {[key: string]: string}): Promise<void> {
    console.log(payload)
    this.resetFormErrors();
    this.form = { ...payload };

    this.formErrors.form = Object.values(this.form).some(x => x === null || x === '');

    if (!this.formErrors.form) {
      // API CALL Here
    }
  }
}
</script>
