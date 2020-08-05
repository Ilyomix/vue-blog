<template>
  <div class="footer-layout">
    <div class="content">
     Made with
     <HeartIcon size="1x" class="mx-1 text-red" />
     by {{ authorName }} - {{ currentYear }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { HeartIcon } from 'vue-feather-icons';
import './styles/footer.scss';

@Component({
  components: {
    HeartIcon,
  },
})
export default class Footer extends Vue {
  private authorName = 'Ilyes Abd-Lillah';

  private currentYear = new Date().getFullYear();
}
</script>
