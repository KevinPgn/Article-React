import { Link } from "react-router-dom"
import { useCodeLine } from "../../store/CodeLine"
import "./Main.css"

export const Card = () => {
  const codeTabs = useCodeLine((state) => state.codeTabs)
  const setSelectedCardId = useCodeLine((state) => state.setSelectedCardId)

  console.log(codeTabs)

  return <>
 <section className="main">
      {
        codeTabs.length > 0 ? (
          <div className="card-container">
              {codeTabs.map((tab) => (
              <Link to="/article">
                <div key={tab.id} className="card" onClick={() => setSelectedCardId(tab.id)}>
                  <h2>{tab.title}</h2>
                  <p>{tab.description}</p>
                </div>
              </Link>
              ))}
          </div>
        ) : (
          <div className="article">
            <h2>Aucun article de disponible</h2>
          </div>
        )
      }
  </section>
  </>
}