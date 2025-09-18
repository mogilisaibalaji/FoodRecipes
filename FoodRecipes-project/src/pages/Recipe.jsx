import { useState } from 'react';
import "./Recipe.css";

export default function Recipe() {
  const [selected, setSelected] = useState(null);

  const recipes = {
    dosa: [
      <h2>Making of Dosa</h2>,
      "Step1 : Soak rice and urad dal for 6 hours",
      "Step2 : Grind into smooth batter",
      "Step3 : Ferment overnight",
      "Step4 : Make thin crispy dosa on tawa",
    ],
    idly: [
      <h2>Making of Idly</h2>,
      "Step1 : Soak urad dal for 4 hours",
      "Step2 : Grind with ginger, chili",
      "Step3 : Shape into rings",
      "Step4 : Deep fry until golden",
    ],
    vada: [
      <h2>Making of Vada</h2>,
      "Step1 : soaking lentils,",
      "Step2 : grinding them to make",
      "Step3 : fluffy batter and lastly shaping",
      "Step4 : small portions of the batter & frying.",
    ],
    pongal: [
      <h2>Making of Pongal</h2>,
      "Step1 : Roast moong dal",
      "Step2 : Cook rice and dal together",
      "Step3 : Add ghee, pepper, and cashews",
      "Step4 : Serve hot with chutney",
    ],
  };

  return (
    <div>
      <div className="recipe-buttons">
        <button onClick={() => setSelected("dosa")}>Dosa</button>
        <button onClick={() => setSelected("idly")}>Idly</button>
        <button onClick={() => setSelected("vada")}>Vada</button>
        <button onClick={() => setSelected("pongal")}>Pongal</button>

        {selected ? (
          <div>
            <h3>{recipes[selected][0]}</h3> {/* Title */}
            <ol>
              {recipes[selected].slice(1).map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        ) : (
          <p>Click a recipe to see the steps.</p>
        )}
      </div>
    </div>
  );
}
