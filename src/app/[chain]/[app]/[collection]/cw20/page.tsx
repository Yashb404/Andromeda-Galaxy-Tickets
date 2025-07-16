type Props = {
  params: Promise<{
    chain: string;
    app: string;
    collection: string;
  }>;
};

export default async function Cw20Page({ params }: Props) {
  const { chain, app, collection } = await params;

  return (
    <div>
      <h1>CW20 Collection</h1>
      <p>Chain: {chain}</p>
      <p>App: {app}</p>
      <p>Collection: {collection}</p>
    </div>
  );
}
