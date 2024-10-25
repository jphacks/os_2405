import NumberInput from '@/components/NumberInput.vue'

export default {
    title: 'NumberInput',
    component: NumberInput,
    argTypes: {
      value: { control: 'number' },
      min: { control: 'number' },
      max: { control: 'number' },
      label: { control: 'text' },
      'update:value': { action: 'update:value' }
    }
  }
  
  export const Default = {
    args: {
      value: 1,
      min: 0,
      max: 100,
      label: '個数'
    }
  }
  
  export const MinimumValue = {
    args: {
      value: 0,
      min: 0,
      max: 100,
      label: '個数'
    }
  }
  
  export const MaximumValue = {
    args: {
      value: 100,
      min: 0,
      max: 100,
      label: '個数'
    }
  }
  
  export const CustomRange = {
    args: {
      value: 5,
      min: 5,
      max: 20,
      label: '注文数'
    }
  }