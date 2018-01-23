<script>
import { createSimpleTransition } from '@/../node_modules/vuetify/es5/util/helpers';

const MyTransition = createSimpleTransition('my-transition');
export default MyTransition;
</script>


<style lang="scss" scoped>
  .my-transition {
    &-leave-active {
      position: absolute
    }
  
    &-enter-active, &-leave, &-leave-to {
      transition: margin-right 4s ease-in-out 1s
    }
  
    &-enter, &-leave-to {
      opacity: 0
    }
  }
</style>

