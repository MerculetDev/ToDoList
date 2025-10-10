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
  <div class="_login_button_container">
    <button class="_login_button">
      {{ props.buttonText }}
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
  display: grid
  display: inline-flex
  align-items: center
  justify-content: center
  gap: .5rem
  width: 50%
  height: 33%
  min-width: 250px
  padding: 14px 81px
  gap: 10px
  border-radius: 999px
  background: #11ABC1
  color: #FFFFFF
  font-family: "Noto Sans JP"
  font-size: 16px
  font-style: normal
  font-weight: 500
  line-height: normal
  letter-spacing: 2.4px
  &:active 
    background-color: #FFFFFF
    color: #11ABC1
    border-radius: 999px
    border: 1px solid #11ABC1
._login_button_container
  display: grid
  place-items: center
  width: 100%
</style>