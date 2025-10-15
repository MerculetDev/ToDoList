<script setup lang="ts">
interface ErrorMessageProps {
  errorMessage?: string;
  error?: boolean;
}
const props = withDefaults(defineProps<ErrorMessageProps>(), {
  errorMessage: "",
});
</script>

<template>
  <div class="_error_message_container">
    <div
      class="_error_message_text"
      :class="{ 'is-empty': !props.errorMessage }"
      :aria-hidden="!props.errorMessage"
    >
      {{ props.errorMessage || "" }}
    </div>
  </div>
</template>

<style scoped lang="sass">
._error_message_container
	display: grid
	place-items: center
	justify-content: center
	grid-template-columns: max-content
	width: 100%
	color: #FF0000
	font-size: 14px
	font-style: normal
	font-weight: 400
	line-height: normal
	letter-spacing: 0.21px
	margin-bottom: 8px
	min-height: 1lh
._error_message_text
	display: grid
	place-items: center
	justify-content: center
	width: 100%
	&.is-empty
		opacity: 0
		pointer-events: none
</style>
