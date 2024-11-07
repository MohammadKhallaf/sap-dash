import { BusyIndicator } from "@ui5/webcomponents-react";
import BusyIndicatorSize from "@ui5/webcomponents/dist/types/BusyIndicatorSize.js";

export default function HomeLoading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <BusyIndicator active size={BusyIndicatorSize.L} delay={0} />
    </div>
  );
}
