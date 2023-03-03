import { FormItemKey, FormKey, FormEvents } from '../components/form'
import { inject, computed } from 'vue'

export const VALIDATE_STATE_MAP = {
  validating: 'f-icon-loading icon-is-rotating',
  success: 'f-icon-check-circle',
  error: 'f-icon-close-circle',
}
export default function useForm() {
  const FForm = inject(FormKey, {})
  const FFormItem = inject(FormItemKey, {})


  const validateState = computed(() => FFormItem.validateState || '')

  const validateIcon = computed(() => VALIDATE_STATE_MAP[validateState.value])

  // blur, change,value
  function formEmit(type, value) {
    FFormItem.formItemMitt?.emit(FormEvents[type], value)
  }

  return {
    FForm,
    FFormItem,
    validateState,
    validateIcon,
    formEmit,
  }
}
