import { ref } from "vue"

import type { CartItem } from "@/models/CarItem"

export const cart = ref<CartItem[]>([])