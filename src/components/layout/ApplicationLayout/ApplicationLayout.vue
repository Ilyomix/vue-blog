<template>
  <div class="application-layout-root">
    <div class="application-toolbar">
      <slot name="toolbar" />
    </div>
    <div class="application-content">
      <slot name="content" />
    </div>
    <div class="application-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import './styles/application-layout.scss';

@Component({})
export default class ApplicationLayout extends Vue {
}
</script>
