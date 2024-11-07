"use client";

import { Card, FlexBox, Icon, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

interface OverviewCardProps {
  title: string;
  iconColor?: string;
  onClick?: () => void;
}

const OverviewCard = ({
  title,
  iconColor = "#0854A0",
  onClick,
}: OverviewCardProps) => (
  <Card
    className="w-64 h-48 cursor-pointer hover:shadow-lg transition-shadow"
    onClick={onClick}
  >
    <FlexBox
      direction="Column"
      justifyContent="SpaceBetween"
      className="h-full p-4"
    >
      <Title level="H5">{title}</Title>
      <div className="self-start">
        <Icon
          name="document"
          style={{
            color: iconColor,
            fontSize: "1.5rem",
          }}
        />
      </div>
    </FlexBox>
  </Card>
);

export default function Overview() {
  const cards = [
    { title: "Items Page", iconColor: "#0854A0" }, // Blue
    { title: "List", iconColor: "#E30000" }, // Red
    { title: "List", iconColor: "#8B00FF" }, // Purple
    { title: "List", iconColor: "#0854A0" }, // Blue
  ];

  return (
    <div className="p-8">
      <Title level="H3" className="mb-8">
        Overview
      </Title>

      <FlexBox wrap="Wrap">
        {cards.map((card, index) => (
          <OverviewCard
            key={index}
            title={card.title}
            iconColor={card.iconColor}
            onClick={() => console.log(`Clicked ${card.title}`)}
          />
        ))}
      </FlexBox>
    </div>
  );
}
