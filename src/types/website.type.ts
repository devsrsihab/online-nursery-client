export type TProduct = {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
  href: string;
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
