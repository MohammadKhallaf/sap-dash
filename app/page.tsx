"use client";

import { FlexBox, Page } from "@ui5/webcomponents-react";
import Overview from "./components/over";

export default function Home() {
  return (
    <Page backgroundDesign="Solid" fixedFooter>
      <FlexBox direction="Column" className="p-4 gap-8">
        {/* Breadcrumb or secondary navigation */}
        <FlexBox direction="Row" className="text-sm text-gray-600">
          <span>Home</span>
          <span>/</span>
          <span className="font-semibold">Overview</span>
        </FlexBox>

        <Overview />
      </FlexBox>
    </Page>
  );
}
