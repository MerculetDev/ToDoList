<script setup lang="ts">
import { ref } from 'vue';

// Propsの型定義
interface TDInputProps {
    modelValue: string
    error?: boolean
    type: 'mail' | 'password'
    visible?: boolean
    openedEyeSrc?: string
    closedEyeSrc?: string
}

// Emitsの型定義
type TDInputEmits = {
    (e: 'update:modelValue', value: string): void
}

// PropsとEmitsの定義
const props = defineProps<TDInputProps>()
const emit = defineEmits<TDInputEmits>()

const visible = ref(false)


// ユーザーが入力値が変更したときに発火する関数
const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<template>
    <div class="_input_group">
        <!-- メールアドレス入力 -->
        <!-- typeがmailのときのみ表示 -->
        <div v-if="props.type === 'mail'" class="_input_form _input_mail_form">
            <label for="email" class="_email_label">メールアドレス</label>
            <input 
                type="email"   
                id="email" 
                name="email" 
                v-model="props.modelValue"
                class="_input_group_text _email_input"
                :class="{'is-invalid': props.error}"
                @input="onInput"
            />
        </div>
        
        <!-- パスワード入力 -->
        <!-- typeがpasswordのときのみ表示 -->
        <div v-if="props.type === 'password'" class="_input_form _input_password_form">
            <label for="password" class="_password_label">パスワード</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                v-model="props.modelValue"
                class="_input_group_text _password_input"
                :class="{'is-invalid': props.error}"
                @input="onInput"
            />
            <button @click="visible = !visible" class="_eye_button">
                <img 
                    v-if="!visible" 
                    :src="props.openedEyeSrc" 
                    alt="目が開いたアイコン" 
                    class="_opened_eye_icon"
                />
                <img 
                    v-else 
                    :src="props.closedEyeSrc" 
                    alt="目が閉じたアイコン"
                    class="_closed_eye_icon"
                />
            </button>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    ._input_group
        font-family: 'Noto Sans JP', sans-serif
        font-weight: 400
        color: #666666
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
    ._input_form
        display: flex
        flex-direction: column
        align-items: flex-start
        justify-content: center
        margin-bottom: 24px
    ._input_group_text
        width: 291px
        height: 17px
        border-radius: 3px
        border: 1px solid #bbbbbb
        font-size: 16px
        color: #666666
    ._email_label
        width: 103px
        height: 17px
        font-size: 14px
        margin-bottom: 5px
    ._password_label
        width: 73px
        height: 17px
        font-size: 14px
        margin-bottom: 5px
    ._email_input
        padding: 11.5px 12px 11.5px 12px
    ._password_input
        padding: 11.5px 10px 11.5px 12px
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
        height: 18px

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
</style>