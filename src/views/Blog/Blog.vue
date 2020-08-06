<template>
  <div class="fluid">
    <BlogComponent
      title="Articles"
      :articles="[{
        id: 1,
        title: 'yolo',
        body: 'swag'
      }, {
        id: 2,
        title: 'yolo',
        body: 'swag'
      }]"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BlogComponent from 'src/components/common/BlogComponent/BlogComponent.vue';

@Component({
  components: {
    BlogComponent,
  },
})
export default class Blog extends Vue {

}
</script>
