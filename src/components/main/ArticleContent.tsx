import { useState } from "react";
import { useCodeLine } from "../../store/CodeLine";
import "./Main.css";

export const ArticleContent = () => {
  const selectedCardId = useCodeLine((state) => state.selectedCardId);
  const codeTabs = useCodeLine((state) => state.codeTabs);
  const updateContent = useCodeLine((state) => state.updateContent);
  const editContent = useCodeLine((state) => state.editContent);
  const [value, setValue] = useState('');
  const [edit, setEdit] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateContent(selectedCardId, value);
  }
  
  return (
    <>
      <div className="article-fetch">
        {codeTabs.map((tab) => {
          if (tab.id === selectedCardId) {
            return (
              <div key={tab.id} className="article-content">
                <h2>{tab.title}</h2>
                <p>{tab.description}</p>
                <div className="content-tab">{tab.content}</div>
                {tab.content?.length === 0 && (
                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit">Sauvegarder</button>
                  </form>
                )}

                <button onClick={() => setEdit(!edit)}>Edit</button>

                {edit && (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    editContent(selectedCardId, value);
                    setEdit(false);
                  }}>
                    <textarea
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit">Sauvegarder</button>
                  </form>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}
