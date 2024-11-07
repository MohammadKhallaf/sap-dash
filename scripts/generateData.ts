export const generateTableData = (count = 100) => {
  const baseRow = {
    ID: "5000001",
    BA: "000010",
    QT: "619161",
    IN: "SERV",
    BEG: "W-11763",
    P_QT: "TAD",
    "%": "TAD",
    forecastValues: {
      value1: "213",
      value2: "424",
      value3: "424",
      value4: "424",
      value5: "423",
      value6: "345",
      value7: "234",
    },
  };

  return {
    metadata: {
      inputs: [
        { label: "input", value: "123456789" },
        { label: "input", value: "123456789" },
        { label: "input", value: "Dec 22, 2021" },
        { label: "input", value: "123456789" },
      ],
      form: {
        contractNumber: "",
        createdOn: "Dec 22, 2021",
        createdBy: "List Item",
        customerReference: "",
      },
    },
    columns: [
      { key: "ID", label: "ID" },
      { key: "BA", label: "BA" },
      { key: "QT", label: "QT" },
      { key: "IN", label: "IN" },
      { key: "BEG", label: "BEG" },
      { key: "P_QT", label: "P QT" },
      { key: "%", label: "%" },
      {
        key: "FRI_1",
        label: "FRI\n10 JUN\n2024",
        date: "10 JUN 2024",
      },
      {
        key: "FRI_2",
        label: "FRI\n10 JUN\n2024",
        date: "10 JUN 2024",
      },
      {
        key: "FRI_3",
        label: "FRI\n10 JUN\n2024",
        date: "10 JUN 2024",
      },
      {
        key: "FRI_4",
        label: "FRI\n10 JUN\n2024",
        date: "10 JUN 2024",
      },
      {
        key: "FRI_5",
        label: "FRI\n10 JUN\n2024",
        date: "10 JUN 2024",
      },
      {
        key: "FRI_6",
        label: "FRI\n10 JUN\n2024",
        date: "10 JUN 2024",
      },
      {
        key: "FRI_7",
        label: "FRI\n10 JUN\n2024",
        date: "10 JUN 2024",
      },
    ],
    rows: Array(count)
      .fill(null)
      .map(() => ({
        ...baseRow,
        children: [], // For expandable rows
      })),
  };
};
