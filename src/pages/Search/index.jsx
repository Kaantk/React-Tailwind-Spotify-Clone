import React from "react";
import { Categories } from "~/components/Search/Categories";
import { FavoriCategories } from "~/components/Search/FavoriCategories";
import categories from "~/Data/categories";
import favoriteCategories from "~/Data/favorite-categories";

export const Search = () => {
  return (
    <>
      <FavoriCategories
        title={"En çok dinlediğin türler"}
        data={favoriteCategories}
      />
      <Categories title={"Hepsine göz at"} data={categories} />
    </>
  );
};
