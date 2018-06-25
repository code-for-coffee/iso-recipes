import React from 'react';

const Recipes = (props) => {

  const renderRecipeItems = () => {
    if (!props.recipes) {
      return items;
    }
    const items = props.recipes.map((item, index) => {
      if (!item.featured) {
        return(<div key={item.title+index} className="item">
          <div className="ui small image"><img src={`http://localhost:3000/assets/${item.thumbnail}`} /></div>
          <div className="content">
            <div className="header">{item.title}</div>
            <div className="meta">
              <div className="meta time">Cook Time: {item.cookTime}</div>
              <div className="meta servings">Servings: {item.servings}</div>
              <div className="meta difficulty">Difficulty: {item.difficulty}</div>
            </div>
            <div className="description">Tags: {item.labels.join(', ')}</div>
          </div>
        </div>)
      }
    });
    return items;
  }

  return (
    <div className="recipes ui items six wide column">
      {renderRecipeItems()}
    </div>
  );
}

export default Recipes;
