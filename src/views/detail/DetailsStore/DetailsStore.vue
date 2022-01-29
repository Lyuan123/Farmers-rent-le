<template>
  <div>
    <div class="buy-store-container clear-fix">
      <div class="item-container float-left">
        <button>收藏</button>
      </div>
      <div class="item-container float-right" >
        <button>租赁</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsStore",
};
</script>
<style lang="less" scoped>
.clear-fix {
  clear: both;
  overflow: hidden;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.buy-store-container {
  border-top: 1px solid #f1f1f1;
  background-color: #fff;
  display: flex;
  .item-container {
    flex: 1;
    text-align: center;

    button {
      width: 100%;
      font-size: 16px;
      background-color: #ff5555;
      color: #fff;
      padding: 10px 0;
    }

    button.o {
      background: #ff7f32;
    }

    button.selected {
      color: #fff;
    }

    button.jin{
      background: grey;
    }
  }
}
</style>