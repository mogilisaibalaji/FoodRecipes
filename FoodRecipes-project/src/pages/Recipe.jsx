import {useState} from 'react';

export default function Recipe(){
  const [selected,setSelected]= useState(null);
  const recipes={
    dosa:[
       <h3>Making of Dosa</h3>,
      "Step1 : Soak rice and urad dal for 6 hours",
      "Step2 : Grind into smooth batter",
      "Step3 : Ferment overnight",
      "Step4 : Make thin crispy dosa on tawa",
    ],
    idly:[
      <h3>Making of idly</h3>,
      "Step1 : Soak urad dal for 4 hours",
      "Step2 : Grind with ginger, chili",
      "Step3 : Shape into rings",
      "Step4 : Deep fry until golden",
    ],
    vada:[
      <h3>Making of vada</h3>,
      "Step1 : soaking lentils,",
      "Step2 : grinding them to make ",
      "Step3 : fluffy batter and lastly shaping",
      "Step4 : small portions of the batter & frying.",
    ],
    pongal:[
      <h3>Making of Pongal</h3>,
      "Step1 : Roast moong dal" ,
      "Step2 : Cook rice and dal together",
      "Step3 : Add ghee, pepper, and cashews",
      "Step4 : Serve hot with chutney",
    ],
  };
 
  return(
    

   <div>
  
      <div className='recipe-buttons'>
        <button onClick={() => setSelected("dosa")}>Dosa</button>
        <button onClick={() => setSelected("idly")}>Idly</button>
        <button onClick={() => setSelected("vada")}>Vada</button>
        <button onClick={() => setSelected("pongal")}>Pongal</button>
        {selected ? (
          <ol>
            {recipes[selected].map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        ) : (
          <p>Click a recipe button to see the steps.</p>
        )}

        

      </div>
    </div>
  );
}