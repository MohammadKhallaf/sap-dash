"use client";

import { useState, useEffect } from "react";
import {
  AnalyticalTable,
  Card,
  FlexBox,
  Title,
  TextAlign,
} from "@ui5/webcomponents-react";
import { generateTableData, type TableState } from "@/scripts/generateData";

// Data Structure Types
export interface ForecastData {
  date: string;
  value: string;
}

export default function Dashboard() {
  const [tableState, setTableState] = useState<TableState | null>(null);

  useEffect(() => {
    const data = generateTableData(15);
    setTableState(data);
  }, []);

  if (!tableState) return <div>Loading...</div>;

  const columns = tableState.columns.map((col) => ({
    ...col,
    Header: () => (
      <div>
        {col.Header.split("\n").map((text, i) => (
          <div key={i}>{text}</div>
        ))}
      </div>
    ),
    hAlign: col.accessor.startsWith("forecasts")
      ? TextAlign.End
      : TextAlign.Begin,
  }));

  return (
    <div className="min-h-screen">
      <main className="p-4">
        <FlexBox direction="Column">
          <Card>
            <Title>Construction Project Overview</Title>
            <div className="overflow-x-auto">
              <AnalyticalTable
                isTreeTable
                columns={columns}
                data={tableState.data}
                filterable
                groupable
                header="Project Details"
                infiniteScroll
                infiniteScrollThreshold={20}
                loadingDelay={1000}
                minRows={5}
                onRowExpandChange={(event) => {
                  console.log("Row expanded:", event);
                }}
                scaleWidthMode="Default"
                selectionBehavior="Row"
                selectionMode="Single"
                sortable
                subRowsKey="subRows"
                visibleRowCountMode="Fixed"
                visibleRows={15}
                withRowHighlight
              />
            </div>
          </Card>
        </FlexBox>
      </main>
    </div>
  );
}
