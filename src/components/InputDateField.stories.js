import InputDateField from "@/components/InputDateField.vue"

export default {
    title: 'InputDateField',
    component: InputDateField,
    tags: ['autodocs'],
    argTypes: {
      label: { control: 'text' },
      value: { control: 'text' },
      width: { control: 'text' },
      'update:value': { action: 'update:value' }
    }
  }
  
  export const Default = {
    args: {
      label: '期限',
      value: '2024/08/01 12:00',
      width: '300px'
    }
  }
  
  export const WithError = {
    args: {
      label: '期限',
      value: '',
      width: '300px',
    }
  }
  
  export const CustomWidth = {
    args: {
      label: '期限',
      value: '2024/08/01 12:00',
      width: '500px'
    }
  }