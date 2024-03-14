import { useState } from "react"
import { useCodeLine } from "../../store/CodeLine"
import "./Main.css"
import { createPortal } from "react-dom"
import { CreateArticle } from "./CreateArticle"

export const Main = () => {
  const codeTabs = useCodeLine((state) => state.codeTabs)
  const [modal, setModal] = useState(false)
  
  return <>

  <section className="main">
      {
        codeTabs.length > 0 ? (
          <div className="card-container">
              {codeTabs.map((tab) => (
                <div key={tab.id} className="card">
                  <h2>{tab.title}</h2>
                  <p>{tab.description}</p>
                </div>
              ))}
          </div>
        ) : (
          <div className="article">
            <h2>Aucun article de disponible</h2>
          </div>
        )
      }
  </section>
      <button
      onClick={() => setModal(!modal)}
      className="add">Créer un Article</button>
   {modal && createPortal(<CreateArticle closeModal={() => setModal(!modal)}/>, document.body)} 
  </>
}