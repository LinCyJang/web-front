<template>
  <v-card max-width="400" class="mx-auto sticky full-width">
    <v-list dense>
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" @click="handleClick(index)">
            {{ item.name }}
          </v-list-item>
          <!-- <v-divider v-if="index + 1 < items.length" :key="index"></v-divider> -->
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    // 导航锚点
    items: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    window.addEventListener("scroll", this.dataScroll);
  },
  methods: {
    handleClick(tab) {
      this.jump(tab);
    },
    jump(index) {
      let total = this.items[index].offsetTop;
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 平滑滚动，10s滚动25次
      let step = total / 25; // 计算每次滚动距离
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 25; // 计算每次滚动距离
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothDown, 10); // 向下滚动时间
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothUp, 10); // 向上滚动时间
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
    }
  }
};
</script>
