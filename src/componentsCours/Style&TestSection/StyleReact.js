import React from 'react'
import '../../componentsCours/componentsCours.css'

const PresUseState = () => {

  const code = `  
    const [color, setColor] = useState("red")

    // CSS dans une la balise Style, on y passera un object ( cles , valeur)
    // Notez la double accolade
    <button style={{borderRadius: "50px", backgroundColor: "pink", color : color}} >Hello</button>



    const ChangeColor = () => {
      const element = document.getElementsByClassName("btn-exemple-fonction")[0]
      element.style.color = "green"
      element.style.backgroundColor = "red"
    }
    <button  onClick={()=> ChangeColor()} className={"btn-exemple-fonction"} >Css dans une fonction</button>



    <button onClick={()=> setColor("blue")} className={'text-$ {color}'} >Css dans un className qui a des backticks</button> // remplacer les singlequote par des backticks, et supprimez l'espace entre le dolar et l'ouverture du js

  `

  return (
    
      <div className='background'><div className="container">

      <h1 >Le style dans React</h1>
      <p></p>

      <div className="bg-dark text-light p-5 rounded-4">
        <pre>{code}</pre>
      </div>

    </div></div>
    
  )
}

export default PresUseState
