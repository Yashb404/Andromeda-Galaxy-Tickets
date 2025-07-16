"use client";
import { IAuctionCollection, useAppUtils } from "@/lib/app";
import { useGetCw721Token } from "@/lib/graphql/hooks/cw721";
import Cw721TokenPage from "@/modules/cw721/token";
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    collection: string;
    token: string;
  }>;
};

const Page = async (props: Props) => {
  const params = await props.params;
  const { collection: collectionId, token: _tokenId } = params;
  const tokenId = decodeURI(_tokenId);
  const { getCollection } = useAppUtils();
  const collection = getCollection(collectionId) as IAuctionCollection;
  const { error } = await useGetCw721Token(collection.cw721, tokenId);
  if (error) {
    return notFound();
  }
  return (
    <Cw721TokenPage tokenId={tokenId} collection={collection} contractAddress={collection.cw721} />
  );
};

export default Page;