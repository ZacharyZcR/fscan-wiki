<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>

<script setup>
import { Primitive } from 'radix-vue'
import { cn } from '@/lib/utils'
import { buttonVariants } from './index'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },
  as: {
    type: String,
    default: 'button',
  },
  asChild: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: '',
  },
})
</script>
