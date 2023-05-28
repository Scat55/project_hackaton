<script>
export default {
  props: ["id", "imgUrl", "name", "onClick"],
};
</script>

<template>
  <div class="roleItem" :id="id" @click="onClick">
    <div class="role_image">
      <img src="/icons/iconRole.svg" />
    </div>
    <span class="role_name">{{ name }}</span>
    
  </div>
</template>

<style scoped lang="scss">
.roleItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  gap: 0.375rem;

  width: 9.125rem;
  height: 7.75rem;

  border-radius: 0.5rem;

  border: 1px solid #b5aeae;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;

  .role_image {
    height: 3.5rem;

    img {
    }
  }

  .role_name {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 0.25rem;
    text-align: center;
    height: 1.188rem;
  }
}

.roleItem:hover {
  background: #f4eeee;
}
</style>
