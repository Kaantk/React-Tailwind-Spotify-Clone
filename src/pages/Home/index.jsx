import React from "react";
import { Row } from "~/components/Home/Row";
import data from "~/Data/songs";

export const Home = () => {
  return (
    <>
      <Row title="Sana özel bölümler" data={data} />
      <Row title="Senin için derlendi" data={data} />
      <Row title="En çok dinlediğin mix'ler" data={data} />
      <Row title="Bugünün en çok dinlenenleri" data={data} />
    </>
  );
};
