<template>
  <div class="edit-create-layout">
    <div class="edit-create-card shadow-md">
    <h1>
      {{ form.title || title }}
    </h1>
    <div class="edit-create-error-wrapper">
      <h3 v-if="errorMessage" class="form-error-message shadow">
        <alert-triangle-icon size="1.2x" class="mr-2" />
        {{ errorMessage }}
      </h3>
    </div>
    <label
      :class='formClasses().title.label'
      for="title"
    >
      Article title
    </label>
    <input
      id="title"
      :class='formClasses().title.input'
      placeholder="My story ..."
      type="text"
      v-model="form.title"
      v-on:keyup.enter="onFormSubmit"
    />
    <label
      for="content"
      :class='formClasses().content.label'
    >
      Article content
    </label>
    <textarea
      id="content"
      :class="formClasses().content.input"
      type="text"
      placeholder="Once upon a time I saw ...."
      v-model="form.content"
      v-on:keyup.enter="onFormSubmit"
    />
    <div :class="isPostArticleRequestLoading ?
      'submit-button-layout loading' :
      'submit-button-layout'
      ">
      <button
        class="button light large-button-text"
        @click="onFormSubmit"
        :disabled="isPostArticleRequestLoading"
      >
        <arrow-right-icon
          v-if="!isPostArticleRequestLoading"
          size="1.5x"
          class="mr-2"
        />
         <rotate-cw-icon
          v-else
          size="1.5x"
          class="mr-2 loader"
        />
        {{ isPostArticleRequestLoading ?
          'Posting article in progress ...' :
          'Post your article!'
        }}
      </button>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import './styles/edit-create-article.scss';
import {
  ArrowRightIcon,
  RotateCwIcon,
  AlertTriangleIcon,
} from 'vue-feather-icons';

@Component({
  components: {
    ArrowRightIcon,
    RotateCwIcon,
    AlertTriangleIcon,
  },
})
export default class EditCreateArticle extends Vue {
  @Prop({ type: String })
  private title!: string;

  @Prop({ type: String, default: '' })
  private errorMessage!: string;

  @Prop({ type: Object })
  private formErrors!: {[key: string]: boolean};

  @Prop({ type: Boolean, default: false })
  private isPostArticleRequestLoading!: boolean;

  private resetFormErrors() {
    Object.keys(this.formErrors).forEach((key: string) => {
      this.formErrors[key] = false;
    });
  }

  private form: {[key: string]: string | null} = {
    title: null,
    content: null,
  };

  private formClasses = (): {[key: string]: {[key: string]: string}} => ({
    title: {
      label: this.formErrors.form && (this.form.title === ''
              || this.form.title === null) ? 'label error' : 'label',
      input: this.formErrors.form && (this.form.title === ''
              || this.form.title === null) ? 'input error' : 'input',
    },
    content: {
      label: this.formErrors.form && (this.form.content === ''
              || this.form.content === null) ? 'label error' : 'label',
      input: this.formErrors.form && (this.form.content === ''
              || this.form.content === null) ? 'input error' : 'input',
    },
  })

  private async onPostSubmit(payload: {[key: string]: string}): Promise<void> {
    this.resetFormErrors();
    this.form = { ...payload };

    this.formErrors.form = Object.values(this.form).some(x => x === null || x === '');
  }

  private onFormSubmit(): void {
    this.$emit('onSubmit', this.form);
  }
}
</script>
