import { Bar, FlexBox, Icon, Page } from "@ui5/webcomponents-react";
import Overview from "./components/Overview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Dashboard",
  description: "Demo Dashboard",
  keywords: ["SAP", "Dashboard"],
};

export default function Home() {
  return (
    <Page
      backgroundDesign="Solid"
      header={
        <Bar
          className="bg-white border-b border-gray-200"
          startContent={
            <div className="flex items-center gap-2 px-4 py-2">
              <span className="text-[1rem] font-semibold">Overview</span>
              <Icon name="navigation-down-arrow" />
            </div>
          }
        />
      }
    >
      <FlexBox direction="Column" className="p-4 gap-8">
        <Overview />
      </FlexBox>
    </Page>
  );
}
