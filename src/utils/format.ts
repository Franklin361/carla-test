export function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function formatDate(date: Date) {
  const optionsDate: Intl.DateTimeFormatOptions = {month: "long", day: "numeric"};

  const formattedDate = new Intl.DateTimeFormat("en-US", optionsDate).format(date);

  return formattedDate;
}

export function formatTime(date: Date) {
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedTime = new Intl.DateTimeFormat("en-US", optionsTime).format(date);

  return formattedTime;
}
