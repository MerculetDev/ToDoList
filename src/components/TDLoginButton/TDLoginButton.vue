<script setup lang="ts">
//props（親からのデータ）の型を定義
interface LoginButtonProps {
  buttonText: string
  src: string
}

// props（親からのデータ）の型をpropsと定義
const props = defineProps<LoginButtonProps>()
</script>

<template>
  <div class="_login_button">
    <button class="_login_button_wrapper">
      <div class="_login_button_container">{{ props.buttonText }}</div>
      <img :src="props.src" alt="ログインボタンの画像" />
    </button>
  </div>
</template>

<style scoped lang="sass">

@media screen and (max-width: 768px)
button
  margin: 0
  padding: 0
  background: none
  border: none
  border-radius: 0
  outline: none
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  cursor: pointer
._login_button
  display: grid    //gridレイアウトを使用
  place-items: center //中央に配置
  width: 100%
  height: 50px
  background: #11ABC1
  font-size: 16px
  font-style: normal
  font-weight: 500
  line-height: normal
  letter-spacing: 2.4px
  border-radius: 999px
  &:active 
    background-color: #FFFFFF
    color: #11ABC1
    border-radius: 999px
    border: 1px solid #11ABC1
._login_button_wrapper
  display: grid
  align-items: center
  justify-content: center
  grid-template-columns: max-content max-content
  gap: 10px
._login_button_container
  display: grid
  place-items: center
  width: 100%
  color: #FFFFFF
  letter-spacing: 2.4px

</style>