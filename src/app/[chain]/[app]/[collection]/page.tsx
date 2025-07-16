"use client";
import { useGetCollection } from "@/lib/app/hooks/useGetCollection";
import CollectionRouter from "@/modules/collection/components/Router";
import { notFound } from 'next/navigation';

type Props = {
  params: {
    collection: string;
  };
};

const Page = async ({ params }: Props) => {
  const collection = await useGetCollection(params.collection);
  if (!collection) {
    return notFound();
  }
  return <CollectionRouter collectionId={params.collection} />;
};

export default Page;