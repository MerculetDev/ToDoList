<script setup lang="ts">
const value = defineModel<string>({ required: true })

const visible = defineModel<boolean>('visible', { default: false })

interface inputData {
    error?: boolean
    type: 'mail' | 'password'
    openedEyeSrc?: string
    closedEyeSrc?: string
}

const data = defineProps<inputData>()
</script>

<template>
    <div class="_input_group">
        <!-- メールアドレス入力 -->
        <!-- typeがmailのときのみ表示 -->
        <div v-if="data.type === 'mail'" class="_input_form _input_mail_form">
            <label for="email" class="_email_label">メールアドレス</label>
            <input 
                type="email"   
                id="email" 
                name="email" 
                v-model="value"
                class="_input_group_text _email_input"
                :class="{'_error_color': data.error}"
            />
        </div>
        
        <!-- パスワード入力 -->
        <!-- typeがpasswordのときのみ表示 -->
        <div v-if="data.type === 'password'" class="_input_form _input_password_form">
            <label for="password" class="_password_label">パスワード</label>
            <input 
                :type="visible ? 'text' : 'password'" 
                id="password" 
                name="password" 
                v-model="value"
                class="_input_group_text _password_input"
                :class="{
                    '_error_color': data.error,
                    '_password_masked': !visible
                }"
            />
            <button @click="visible = !visible" class="_eye_button">
                <img 
                    v-if="visible" 
                    :src="data.openedEyeSrc" 
                    alt="目が開いたアイコン" 
                    class="_opened_eye_icon"
                />
                <img 
                    v-else 
                    :src="data.closedEyeSrc" 
                    alt="目が閉じたアイコン"
                    class="_closed_eye_icon"
                />
            </button>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .input 
        margin: 0
        padding: 0
        background: none
        border: none
        border-radius: 0
        outline: none   
        -webkit-appearance: none
        -moz-appearance: none
        appearance: none
    .button
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
        font-size: 14px
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
        color: #666
        font-family: "Noto Sans JP"
        font-size: 0.875rem
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