"use client";
import {
  DatePicker,
  Input,
  Label,
  Option,
  Select,
} from "@ui5/webcomponents-react";
import { useState } from "react";

export interface FilterValues {
  contractNumber: string;
  createdOn: string;
  createdBy: string;
  customerReference: string;
}

interface FilterBarProps {
  onSearch?: (filters: FilterValues) => void;
  initialValues?: Partial<FilterValues>;
}

export function FilterBar({ onSearch, initialValues = {} }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterValues>({
    contractNumber: initialValues.contractNumber ?? "",
    createdOn: initialValues.createdOn ?? "Dec 22, 2021",
    createdBy: initialValues.createdBy ?? "",
    customerReference: initialValues.customerReference ?? "",
  });

  const handleChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="p-4 bg-white">
      {/* Static Input Labels */}
      <div className="grid grid-cols-4 gap-4 mb-1">
        {[
          { label: "input", value: "123456789" },
          { label: "input", value: "123456789" },
          { label: "input", value: "Dec 22, 2021" },
          { label: "input", value: "123456789" },
        ].map((input, index) => (
          <div key={index} className="col-span-1 flex flex-col">
            <Label className="text-[0.875rem] text-[#666]">{input.label}</Label>
            <Input value={input.value} readonly className="mt-1" />
          </div>
        ))}
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div>
          <Label className="text-[0.875rem] text-[#666]">
            Contract Number:
          </Label>
          <Input
            placeholder="Placeholder Text"
            className="mt-1"
            value={filters.contractNumber}
            onChange={(e) => handleChange("contractNumber", e.target.value)}
          />
        </div>

        <div>
          <Label className="text-[0.875rem] text-[#666]">Created On:</Label>
          <DatePicker
            value={filters.createdOn}
            formatPattern="MMM dd, yyyy"
            className="mt-1 w-full"
            onChange={(e) => handleChange("createdOn", e.detail.value)}
          />
        </div>

        <div>
          <Label className="text-[0.875rem] text-[#666]">Created By:</Label>
          <Select
            className="mt-1"
            onChange={(e) =>
              handleChange(
                "createdBy",
                e.detail.selectedOption?.dataset.id ?? ""
              )
            }
          >
            <Option selected>List Item</Option>
            <Option>Option 1</Option>
            <Option>Option 2</Option>
          </Select>
        </div>

        <div>
          <Label className="text-[0.875rem] text-[#666]">
            Customer Reference:
          </Label>
          <Input
            placeholder="Placeholder Text"
            className="mt-1"
            value={filters.customerReference}
            onChange={(e) => handleChange("customerReference", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
