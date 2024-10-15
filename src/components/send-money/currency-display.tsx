import {formatCurrency} from "@/utils/format";

interface Props {
  currentValue: string;
  id: string;
}

function CurrencyDisplay({currentValue, id}: Props) {
  return (
    <section
      className="hidden-scroll grid min-h-[200px] place-items-center overflow-x-auto"
      id={id}
    >
      <span className="text-7xl font-medium">{formatCurrency(+currentValue)}</span>
    </section>
  );
}

export default CurrencyDisplay;
