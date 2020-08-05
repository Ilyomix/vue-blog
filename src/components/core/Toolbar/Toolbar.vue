<template>
  <div class="toolbar-layout">
    <div class="content">
      <div class="logo-layout">
        <img src="./assets/blog-generic-logo.png" class="logo" />
        <div class="title">
          VUEBLOG
        </div>
      </div>
      <button class="button light">
        <log-out-icon size="1.5x" class="mx-2" />
        <span>
          Sign out
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { LogOutIcon } from 'vue-feather-icons';
import './styles/toolbar.scss';

@Component({
  components: {
    LogOutIcon,
  },
})
export default class Toolbar extends Vue {

}
</script>
