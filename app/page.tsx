"use client";

import "@ui5/webcomponents-icons/dist/menu2.js";
import "@ui5/webcomponents-icons/dist/search.js";
import "@ui5/webcomponents-icons/dist/settings.js";
import {
  Bar,
  BusyIndicator,
  Button,
  FlexBox,
  Page,
} from "@ui5/webcomponents-react";
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

        {/* Main content */}
        <Overview />

        {/* Additional sections can be added here */}
      </FlexBox>

      <Bar design="FloatingFooter" className="mt-auto">
        <FlexBox
          direction="Row"
          justifyContent="SpaceBetween"
          alignItems="Center"
          className="w-full p-2"
        >
          <span className="text-sm text-gray-600">
            © 2024 Construction Management
          </span>
          <FlexBox direction="Row">
            <Button design="Transparent">Help</Button>
            <Button design="Transparent">Terms</Button>
            <Button design="Transparent">Privacy</Button>
          </FlexBox>
        </FlexBox>
      </Bar>
    </Page>
  );
}
