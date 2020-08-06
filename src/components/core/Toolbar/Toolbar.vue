<template>
  <div class="toolbar-layout">
    <div class="content">
      <div class="logo-layout">
        <img src="./assets/blog-generic-logo.png" class="logo" />
        <div class="title">
          VUEBLOG
        </div>
      </div>
      <button
        class="button light"
        v-if="isUserLogged"
        @click="disconnectUserFromToolbar"
      >
        <log-out-icon size="1.5x" class="mx-2" />
        <span>
          Sign out
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  store,
} from 'src/store/login/types';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { LogOutIcon } from 'vue-feather-icons';
import './styles/toolbar.scss';

@Component({
  components: {
    LogOutIcon,
  },
})
export default class Toolbar extends Vue {
  @store.Action
  private disconnectUser!: () => void;

  @store.Getter
  private isUserLogged!: boolean;

  private disconnectUserFromToolbar(): void {
    this.disconnectUser();
    this.$router.push('/login');
  }
}
</script>
