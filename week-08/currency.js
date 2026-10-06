// Never hardcode a currency symbol.
// Intl.NumberFormat handles symbol, placement, decimals, and grouping automatically.
// locale + currency code come from per-client config — the template never changes.

function formatPrice(amount, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

// Same function, same amount — different market, different output. Zero template changes.
console.log(formatPrice(25, "en-GH", "GHS"));  // GH₵25.00
console.log(formatPrice(25, "en-GB", "GBP"));  // £25.00
console.log(formatPrice(25, "en-US", "USD"));  // $25.00
console.log(formatPrice(25, "en-NG", "NGN"));  // ₦25.00

// Intl also handles edge cases automatically:
console.log(formatPrice(1500.5, "de-DE", "EUR")); // 1.500,50 € (grouping + symbol after)
console.log(formatPrice(1500,   "ja-JP", "JPY")); // ¥1,500    (no decimals for JPY)

// ❌ The hardcoded way — breaks the moment you cross a border:
// const price = `£${item.price}`; // wrong symbol for Ghana, wrong placement for some locales
