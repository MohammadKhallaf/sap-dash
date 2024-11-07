const generateBasicRow = (id: string): TableRow => ({
  id,
  ba: "000010",
  qt: "619161",
  in: "SERV",
  beg: "W-11763",
  p_qt: "TAD",
  percentage: "TAD",
  forecasts: {
    value1: "213",
    value2: "424",
    value3: "424",
    value4: "424",
    value5: "423",
    value6: "345",
    value7: "234",
  },
});

const generateNestedRows = (
  parentId: string,
  depth: number = 0,
  maxDepth: number = 3
): TableRow => {
  const row = generateBasicRow(`${parentId}`);

  if (depth < maxDepth) {
    const childCount = Math.floor(Math.random() * 4) + 1; // 1-4 children
    row.subRows = Array.from({ length: childCount }, (_, index) =>
      generateNestedRows(`${parentId}-${index + 1}`, depth + 1, maxDepth)
    );
  }

  return row;
};

export interface TableRow {
  id: string; // 5000001
  ba: string; // 000010
  qt: string; // 619161
  in: string; // SERV
  beg: string; // W-11763
  p_qt: string; // TAD
  percentage: string; // TAD
  forecasts: {
    value1: string; // 213
    value2: string; // 424
    value3: string; // 424
    value4: string; // 424
    value5: string; // 423
    value6: string; // 345
    value7: string; // 234
  };
  subRows?: TableRow[];
}

export interface TableMetadata {
  contractNumber: string; // 123456789
  createdOn: string; // Dec 22, 2021
  createdBy: string; // List Item
  customerReference: string; // 123456789
}

export interface TableColumn {
  Header: string;
  accessor: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
}

export interface TableState {
  data: TableRow[];
  metadata: TableMetadata;
  columns: TableColumn[];
}

export const generateTableData = (rowCount: number = 15): TableState => {
  const baseId = 5000001;

  return {
    metadata: {
      contractNumber: "123456789",
      createdOn: "Dec 22, 2021",
      createdBy: "List Item",
      customerReference: "123456789",
    },
    columns: [
      {
        Header: "ID",
        accessor: "id",
        minWidth: 100,
      },
      {
        Header: "BA",
        accessor: "ba",
        minWidth: 80,
      },
      {
        Header: "QT",
        accessor: "qt",
        minWidth: 80,
      },
      {
        Header: "IN",
        accessor: "in",
        minWidth: 80,
      },
      {
        Header: "BEG",
        accessor: "beg",
        minWidth: 100,
      },
      {
        Header: "P QT",
        accessor: "p_qt",
        minWidth: 80,
      },
      {
        Header: "%",
        accessor: "percentage",
        minWidth: 60,
      },
      ...Array(7)
        .fill(null)
        .map((_, index) => ({
          Header: `FRI\n10 JUN\n2024`,
          accessor: `forecasts.value${index + 1}`,
          minWidth: 80,
        })),
    ],
    data: Array.from({ length: rowCount }, (_, index) =>
      generateNestedRows(`${baseId + index}`)
    ),
  };
};
