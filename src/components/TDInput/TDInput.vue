<script setup lang="ts">
const value = defineModel<string>({ required: true });

const visible = defineModel<boolean>("visible", { default: false });

interface InputData {
  error?: boolean;
  type: "mail" | "password";
  openedEyeSrc?: string;
  closedEyeSrc?: string;
}

const data = defineProps<InputData>();
</script>

<template>
  <div class="_input_group">
    <!-- メールアドレス入力 -->
    <!-- typeがmailのときのみ表示 -->
    <div v-if="data.type === 'mail'" class="_input_form _input_mail_form">
      <label for="email" class="_email_label">メールアドレス</label>
      <input
        type="email"
        autocomplete="email username"
        id="email"
        name="email"
        v-model="value"
        class="_input_group_text _email_input"
        :class="{ _error_color: data.error }"
      />
    </div>

    <!-- パスワード入力 -->
    <!-- typeがpasswordのときのみ表示 -->
    <div
      v-if="data.type === 'password'"
      class="_input_form _input_password_form"
    >
      <label for="password" class="_password_label">パスワード</label>
      <input
        :type="visible ? 'text' : 'password'"
        autocomplete="password"
        id="password"
        name="password"
        v-model="value"
        class="_input_group_text _password_input"
        :class="{
          _error_color: data.error,
          _password_masked: !visible,
        }"
      />
      <button @click="visible = !visible" class="_eye_button">
        <img
          :src="visible ? data.openedEyeSrc : data.closedEyeSrc"
          :alt="visible ? '目が開いたアイコン' : '目が閉じたアイコン'"
          :class="visible ? '_opened_eye_icon' : '_closed_eye_icon'"
        />
      </button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
input
  margin: 0
  padding: 0
  background: none
  border: none
  border-radius: 0
  outline: none
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
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
._input_group
  display: grid
  align-items: center
  justify-content: center
  grid-template-columns: 1fr
  width: 100%
  font-weight: 400
  color: #666666
._input_form
  display: grid
  align-items: center
  justify-content: center
  grid-template-columns: 1fr
  font-family: "Noto Sans JP"
  margin-bottom: 24px
._input_group_text
  display: grid
  align-items: center
  justify-content: center
  border-radius: 3px
  border: 1px solid #bbbbbb
  font-size: 14px
  color: #666666
._email_label
  width: 100%
  height: 17px
  font-size: 14px
  margin-bottom: 5px
._password_label
  width: 100%
  height: 17px
  font-size: 14px
  margin-bottom: 5px
._email_input
  padding: 11.5px 12px 11.5px 12px
._password_input
  padding: 11.5px 12px 11.5px 12px
  max-height: 16px
  color: #666
  font-family: "Noto Sans JP"
  font-style: normal
  font-weight: 400
  line-height: normal
  letter-spacing: 0.04375rem
._eye_button
  position: absolute
  right: 12px
  top: 32.82px
  background: transparent
  border: none
  outline: none
  box-shadow: none
  padding: 0
  margin: 0
  height: 10px
._input_password_form
  position: relative
._opened_eye_icon
  display: block
  width: 18px
  height: 15.74px
._closed_eye_icon
  display: block
  width: 18px
  height: 18.36px
._password_masked
  -webkit-text-security: disc
  font-size: 13px
  letter-spacing: 0.02em
  padding-top: 15px
  padding-bottom: 8px
  line-height: 16px
._error_color
  background: #FFD8D8
</style>
