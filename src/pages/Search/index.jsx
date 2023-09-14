import React from "react";
import { Categories } from "~/components/Search/Categories";
import { FavoriCategories } from "~/components/Search/FavoriCategories";
import categories from "~/Data/categories";
import favoriteCategories from "~/Data/favorite-categories";

export const Search = () => {
  return (
    <div className="px-5 flex flex-col gap-y-8">
      <FavoriCategories
        title={"En çok dinlediğin türler"}
        data={favoriteCategories}
      />
      <Categories title={"Hepsine göz at"} data={categories} />
    </div>
  );
};
