export type Branch = {
  name: string;
  children: Branch[];
};

export type Tree = Branch[];
