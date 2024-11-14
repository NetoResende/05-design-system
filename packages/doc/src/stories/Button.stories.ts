
import type { Meta, StoryObj } from '@storybook/react';
 import { ButtonTeste, ButtonProps } from '@ignite-ui/react'


 export default {
  title: 'ButtoTest',
  component: ButtonTeste,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  }
}