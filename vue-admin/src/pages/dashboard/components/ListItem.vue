<template>
    <div>
        <slot></slot>
        <div>
            <p class="list-item-title">{{ title }}</p>
            <p class="list-item-mount">{{ amount }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.list-item-title {
    line-height: 18px;
    color: rgba(0,0,0,.45);
    font-size: 16px;
    margin-bottom: 12px;
}
.list-item-mount {
    font-size: 20px;
}
</style>
