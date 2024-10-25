import TodoItem from "@/components/TodoItem.vue";

export default {
  title: 'TodoItem',
  component: TodoItem,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'アイテムの一意のID'
    },
    title: {
      control: 'text',
      description: 'アイテムのタイトル'
    },
    datetime: {
      control: 'date',
      description: '登録日時'
    },
    description: {
      control: 'text',
      description: 'アイテムの詳細説明'
    },
    quantity: {
      control: { type: 'number', min: 0 },
      description: 'アイテムの数量'
    }
  }
};

// 基本的なストーリー
export const Default = {
  args: {
    id: '1',
    title: 'じゃがいも',
    datetime: '2024-08-01T12:00:00',
    description: '北海道産の新じゃが',
    quantity: 5
  }
};

// 長いタイトルのケース
export const LongTitle = {
  args: {
    id: '2',
    title: 'とても長いタイトルのじゃがいもです。これは長いタイトルのテストケースです。',
    datetime: '2024-08-01T12:00:00',
    description: '通常の説明文',
    quantity: 3
  }
};
