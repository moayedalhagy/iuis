// export type NewsCardType = {
//   id?: number;
//   title: string;
//   body: string;
//   date: string;
//   image: string;
//   link: string;
//   class?: string;
// };
export type NewsCardType = {
  newsId?: number;
  cardImageLink: string;
  title: string;
  description: string;
  newsDate: string;
  newsBodyText: string;
  views: number;
  newsLink: string;
  newsCategoryId?: number;
  newsTime?: string;
  newsCategoryName?: string;
  class?: string;
  hideShareIcon?: boolean;
};
