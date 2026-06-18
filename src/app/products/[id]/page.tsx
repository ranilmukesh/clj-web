export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '101' },
    { id: '102' },
    { id: '103' },
    { id: '104' },
    { id: '105' },
    { id: '106' },
    { id: '107' },
    { id: '108' },
    { id: '109' },
    { id: '110' },
    { id: '111' },
    { id: '112' },
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Product {params.id}</h1>
      <p className="text-lg text-muted-foreground">Product details coming soon.</p>
    </div>
  );
}
