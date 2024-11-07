"use client";

import {
  Bar,
  Page,
  Title,
  FlexBox,
  BusyIndicator,
  Avatar,
  Button,
  ShellBar,
  ShellBarItem,
} from "@ui5/webcomponents-react";
import Overview from "./components/over";
import { useEffect, useState } from "react";
import { Todo, todos } from "@/app/mockData/todos";
import "@ui5/webcomponents-icons/dist/search.js";
import "@ui5/webcomponents-icons/dist/settings.js";
import "@ui5/webcomponents-icons/dist/menu2.js";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise<Todo[]>((resolve) => {
          setTimeout(() => {
            resolve(todos);
          }, 1500);
        });

        setTodoList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Page backgroundDesign="Solid" fixedFooter>
      {isLoading ? (
        <FlexBox
          direction="Column"
          alignItems="Center"
          justifyContent="Center"
          className="h-[calc(100vh-4rem)]"
        >
          <BusyIndicator active size="Medium" />
          <span className="mt-4">Loading project data...</span>
        </FlexBox>
      ) : (
        <FlexBox direction="Column" className="p-4 gap-8">
          {/* Breadcrumb or secondary navigation */}
          <FlexBox
            direction="Row"
            gap="0.5rem"
            className="text-sm text-gray-600"
          >
            <span>Home</span>
            <span>/</span>
            <span className="font-semibold">Overview</span>
          </FlexBox>

          {/* Main content */}
          <Overview />

          {/* Additional sections can be added here */}
        </FlexBox>
      )}

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
          <FlexBox direction="Row" gap="1rem">
            <Button design="Transparent">Help</Button>
            <Button design="Transparent">Terms</Button>
            <Button design="Transparent">Privacy</Button>
          </FlexBox>
        </FlexBox>
      </Bar>
    </Page>
  );
}
