<template>
  <div id="app">
    <ApplicationLayout>
      <Toolbar slot="toolbar" />
      <router-view slot="content" />
      <div slot="footer" />
    </ApplicationLayout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ApplicationLayout from './components/layout/ApplicationLayout/ApplicationLayout.vue';
import Toolbar from './components/core/Toolbar/Toolbar.vue';
import './styles/global.scss';

export default Vue.extend({
  name: 'App',
  components: {
    ApplicationLayout,
    Toolbar,
  },
});
</script>
