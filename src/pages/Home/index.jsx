import React from "react";
import { Row } from "~/components/Home/Row";
import data from "~/Data/songs";

export const Home = () => {
  return (
    <div className="text-white px-5 flex flex-col gap-y-8">
      <Row title="Sana özel bölümler" data={data} />
      <Row title="Senin için derlendi" data={data} />
      <Row title="En çok dinlediğin mix'ler" data={data} />
      <Row title="Bugünün en çok dinlenenleri" data={data} />
    </div>
  );
};
