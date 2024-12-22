import React from "react";

import { Container, Tag } from "./styles";

interface IHistoryFinanceCardProps {
  tagColor: string;
  title: string;
  subtitle: string;
  value: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  tagColor,
  title,
  subtitle,
  value,
}) => {
  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>

      <h3>{value}</h3>
    </Container>
  );
};

export default HistoryFinanceCard;
