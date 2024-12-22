import React from "react";

import { Container } from "./styles";
import SelectInput from "../../components/SelectInput";

import ContentHeader from "../../components/ContentHeader";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Janeiro", label: "Janeiro" },
    { value: "Fevereiro", label: "Fevereiro" },
    { value: "Marco", label: "Marco" },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
