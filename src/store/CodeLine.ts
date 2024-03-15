import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface ICodeLine {
  codeTabs: { id: string; title: string; description: string; content?: string }[];
  selectedCardId: string;
  addCodeTabs: (title: string, description: string) => void;
  setSelectedCardId: (id: string) => void;
  updateContent: (id: string, content: string) => void;
  editContent: (id: string, content: string) => void;
}

export const useCodeLine = create<ICodeLine>((set) => ({
  codeTabs: [
    { id: uuidv4(), title: 'index.js', description: 'Main file', content: ""},
  ],
  selectedCardId: '',

  addCodeTabs: (title: string, description: string) =>
    set((state: ICodeLine) => {
      const findSameTitle = state.codeTabs.find((tab) => tab.title === title);

      if (findSameTitle) {
        alert('Title already exists');
        return { codeTabs: state.codeTabs };
      } else {
        return { codeTabs: [...state.codeTabs, { id: uuidv4(), title, description }] };
      }
    }),

    setSelectedCardId: (id: string) =>
      set(() => {
        return {selectedCardId: id}
      }),
    
    updateContent: (id: string, content: string) =>
      set((state: ICodeLine) => {
        const findTab = state.codeTabs.find((tab) => tab.id === id);
        if (findTab) {
          findTab.content = content;
        }
        return { codeTabs: state.codeTabs };
      }),

    editContent: (id: string, content: string) =>
      set((state: ICodeLine) => {
        const findTab = state.codeTabs.find((tab) => tab.id === id);
        if (findTab) {
          findTab.content = content;
        }
        return { codeTabs: state.codeTabs };
      }),
}));
