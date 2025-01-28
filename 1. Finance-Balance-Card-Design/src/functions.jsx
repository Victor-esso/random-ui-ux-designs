export function formatNumber(num, decimals = 2) {
    return num
      .toFixed(decimals) // Round to `decimals` places
      .replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas
  }
  