<template>
  <div class="card text shadow">
    <div class="card-text-header-wrapper">
      <h2>
        {{ title }}
      </h2>
      <div class="card-text-options-wrapper">
        <div
          class="card-text-options-button-wrapper"
        >
          <button
            v-if="viewMoreOptions"
            class="button edit"
            @click="handleEdit"
          >
            <edit-icon size="1.5x" class="mr-2" />
            Edit article
          </button>
          <button
            v-if="viewMoreOptions"
            class="button delete"
            @click="handleDelete"
          >
            <trash-2-icon size="1.5x" class="mr-2" />
            Delete article
          </button>
          <button
            class="button text flat"
            @click="handleViewMoreOptions"
          >
            <MoreVerticalIcon v-if="!viewMoreOptions" size="1.5x" />
            <x-icon v-else size="1.5x" />
          </button>
        </div>
      </div>
    </div>
    <p>
      {{ bodyText }}
    </p>
    <div
      class="button-view-more-wrapper"
      v-if="!viewMore && this.body.length >= textLengthThreshold"
    >
      <button
        class="button text violet"
        @click="handleViewMore"
      >
        <chevrons-down-icon size="1.5x" class="mr-2" />
        View more
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  PlusIcon,
  ChevronsDownIcon,
  MoreVerticalIcon,
  XIcon,
  Trash2Icon,
  EditIcon,
} from 'vue-feather-icons';
import '../styles/cards.scss';
import './styles/text-card.scss';

@Component({
  components: {
    PlusIcon,
    ChevronsDownIcon,
    MoreVerticalIcon,
    Trash2Icon,
    XIcon,
    EditIcon,
  },
})
export default class TextCard extends Vue {
  @Prop({ type: String })
  private title!: string;

  @Prop({ type: String })
  private body!: string;

  private viewMore = false;

  private viewMoreOptions = false;

  private textLengthThreshold = 500;

  private get bodyText(): string {
    if (this.viewMore) {
      return this.body;
    }
    return (this.body && this.body.length > this.textLengthThreshold)
      ? `${this.body.substring(0, this.textLengthThreshold)}`
      : this.body;
  }

  private handleViewMore() {
    this.viewMore = true;
  }

  private handleViewMoreOptions() {
    this.viewMoreOptions = !this.viewMoreOptions;
  }

  private handleEdit() {
    this.$emit('handleEdit');
    this.viewMoreOptions = false;
  }

  private handleDelete() {
    this.$emit('handleDelete');
    this.viewMoreOptions = false;
  }
}
</script>
