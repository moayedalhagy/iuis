"use server";

import { NewsCardType } from "../_types/NewsCardType";

export default async function getNews(): Promise<Array<NewsCardType>> {
  const resource: string = "CardsNews";

  const result = await fetch(`${process.env.API_URI}/${resource}`, {
    next: {
      //   revalidate: false,
    },
  });

  if (!result.ok) {
    throw new Error("error in api");
  }

  const response = await result.json();

  return response;
}
