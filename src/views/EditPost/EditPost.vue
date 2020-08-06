<template>
  <div>
    EditPost
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import EditCreateArticle from 'src/components/common/EditCreateArticle/EditCreateArticle.vue';

@Component({
  components: {
    EditCreateArticle,
  },
})
export default class Login extends Vue {

}
</script>
