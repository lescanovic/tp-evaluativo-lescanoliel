import { ref } from "vue"

import type { CartItem } from "@/models/carItem"

export const cart = ref<CartItem[]>([]) 