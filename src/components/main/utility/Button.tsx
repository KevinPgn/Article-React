import { useState } from "react"
import { createPortal } from "react-dom"
import { CreateArticle } from "../CreateArticle"

export const Button = () => {
  const [modal, setModal] = useState(false)
  return <>
    <button
      onClick={() => setModal(!modal)}
      className="add">Créer un Article</button>
   {modal && createPortal(<CreateArticle closeModal={() => setModal(!modal)}/>, document.body)} 
  </>
}