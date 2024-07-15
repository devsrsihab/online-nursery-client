export type TProduct = {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  image: string;
  brand: string;
  stock: number;
  quantity?: number;
};

export type TSectionTitleProps = {
  firstText: string;
  highlightText: string;
  lastText: string;
  detailsText: string;
};

export type TStateBooleanProps = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TOpenProps<K extends string> = {
  [key in K]: boolean;
} & {
  [key in `set${Capitalize<K>}`]: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CreateFormProps = {
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TSetStatePageProps = React.Dispatch<
  React.SetStateAction<number | null>
>;
export type TSetStateItemLimitProps = React.Dispatch<
  React.SetStateAction<number | null>
>;
