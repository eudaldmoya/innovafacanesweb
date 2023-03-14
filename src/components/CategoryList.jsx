import { useState, useEffect } from "react";

const CategoryList = () => {
  const URL = `http://localhost:1337/api/`;
  const [categories, setCategories] = useState(null);

  const loadCategories = async () => {
    const response = await fetch(`${URL}categorias`);
    const json = await response.json();
    console.log(json);
    const catList = json.data.map((category) => ({
      name: category.attributes.nom,
    }));
    console.log(catList);
    setCategories(catList);
  };
  useEffect(() => {
    loadCategories();
  }, []);

  if (categories === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <div>Here is a list of all the available categories</div>
      {categories.map(({ name }) => (
        <div className="name-wrapper">
          <h3 className="name">{name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
