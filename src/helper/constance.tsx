export enum TypeContent {
  showreel,
  editor,
  director,
}

export const ListLinkNav: { name: string; path: string }[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "showreel",
    path: "/showreel",
  },
  {
    name: "editor",
    path: "/editor",
  },
  {
    name: "director",
    path: "/director",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export interface ItemsInterface {
  id: any;
  type: TypeContent;
  title: string;
  role: string;
  linkImg: string;
  linkVideo?: string;
}

export const listItem: ItemsInterface[] = [
  {
    id: 1,
    type: TypeContent.showreel,
    linkImg: "/billie.png",
    role: "Editor & Director",
    title: "Show Reel MV 2024",
  },
  {
    id: 2,
    type: TypeContent.showreel,
    linkImg: "/coca-cola.png",
    role: "Editor & Director",
    title: "Show Reel MV 2023",
  },
  {
    id: 3,
    type: TypeContent.director,
    linkImg: "/fifa-world-cup.png",
    role: "Editor & Director",
    title: "Trung tâm băng đĩa lậu hải ngoại - 2023",
  },
  {
    id: 4,
    type: TypeContent.director,
    linkImg: "/remy-martin.png",
    role: "Editor & Director",
    title: "Anh em GANG GANG GANG - 2024",
  },
  {
    id: 5,
    type: TypeContent.editor,
    linkImg: "/fifa-world-cup.png",
    role: "Editor & Director",
    title: "Trung tâm băng đĩa lậu hải ngoại - 2023",
  },
  {
    id: 6,
    type: TypeContent.editor,
    linkImg: "/remy-martin.png",
    role: "Editor & Director",
    title: "Anh em GANG GANG GANG - 2024",
  },
];
