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
    { id: '201' },
    { id: '202' },
    { id: '203' },
    { id: '204' },
    { id: '205' },
    { id: '206' },
    { id: '207' },
    { id: '208' },
    { id: '209' },
    { id: '210' },
    { id: '211' },
    { id: '212' },
  ];
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  // AEO: Mock data for the schema. In production, this data comes from your database.
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `Product ${resolvedParams.id} - BIS 916 Gold`,
    "image": [
      "https://chandralekhajewels.netlify.app/clj-logo-white-bg.png"
    ],
    "description": "Handcrafted 22-karat BIS 916 Hallmarked gold jewellery from Chandralekha Jewels, Coimbatore.",
    "sku": resolvedParams.id,
    "brand": {
      "@type": "Brand",
      "name": "Chandralekha Jewels"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://chandralekhajewels.netlify.app/products/${resolvedParams.id}`,
      "priceCurrency": "INR",
      "price": "45000", // Replace with dynamic price
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Chandralekha Jewels"
      }
    }
  };

  return (
    <div className="container mx-auto py-16 text-center">
      {/* Inject Product JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, '\\u003c'),
        }}
      />
      <h1 className="text-4xl font-bold mb-4">Product {resolvedParams.id}</h1>
      <p className="text-lg text-muted-foreground">Product details coming soon.</p>
    </div>
  );
}
