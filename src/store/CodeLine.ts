import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface ICodeLine {
  codeTabs: { id: string; title: string; description: string; content?: string }[];
  addCodeTabs: (title: string, description: string) => void;
}

export const useCodeLine = create<ICodeLine>((set) => ({
  codeTabs: [
    { id: uuidv4(), title: 'index.js', description: 'Main file'},
  ],

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

    
}));
