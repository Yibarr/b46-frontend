export const priceFormat = (payload) => {
  return `$${new Intl.NumberFormat().format(payload)}`
}