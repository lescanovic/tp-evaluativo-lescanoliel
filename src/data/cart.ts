import { ref } from "vue"

import type { CartItem } from "@/models/CarItem"

export const cart = ref<CartItem[]>([]) // This is the cart, it will store the products that the user adds to the cart,
//  and their quantity.  It is a reactive variable, so when it changes, the components that use it will update automatically.