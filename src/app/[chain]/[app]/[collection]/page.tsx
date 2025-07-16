"use client";
import { useGetCollection } from "@/lib/app/hooks/useGetCollection";
import CollectionRouter from "@/modules/collection/components/Router";
import { notFound, useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const collectionId = params.collection as string;
  const collection = useGetCollection(collectionId);
  if (!collection) {
    return notFound();
  }
  return <CollectionRouter collectionId={collectionId} />;
};

export default Page;