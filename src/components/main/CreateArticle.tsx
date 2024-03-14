import { useState } from "react"
import "./Main.css"
import { useCodeLine } from "../../store/CodeLine"

interface ICreateArticle {
  closeModal: () => void
}

export const CreateArticle = ({closeModal}: ICreateArticle) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errorMessageTitle, setErrorMessageTitle] = useState('')
  const [errorMessageDescription, setErrorMessageDescription] = useState('')
  
  const addCodeTabs = useCodeLine((state) => state.addCodeTabs)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(title === '') {
      setErrorMessageTitle('Please enter a title')
      return
    } else if (description === '') {
      setErrorMessageDescription('Please enter a description')
      return
    } else if (title.length < 5) {
      setErrorMessageTitle('Title must be at least 5 characters')
      return
    } else if (description.length < 5) {
      setErrorMessageDescription('Description must be at least 5 characters')
      return
    }

    addCodeTabs(title, description)
    setErrorMessageTitle('')
    setErrorMessageDescription('')
    closeModal()
  }

  return <>
      <div className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>Créer votre <span>Article</span></h2>

        <form onSubmit={handleSubmit}>
          <label>
            Titre
            <input type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Votre Titre..." />
          </label>
          {errorMessageTitle && <p className="error">{errorMessageTitle}</p>}

          <label>
            Description
            <input type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Votre Description..." />
          </label>
          {errorMessageDescription && <p className="error">{errorMessageDescription}</p>}

          <button type="submit">Ajouter L'article</button>
        </form>
        </div>
      </div>
  </>
}