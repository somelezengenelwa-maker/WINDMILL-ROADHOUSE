import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

export function SEO({ title, description, schema }: SEOProps) {
  const fullTitle = `${title} | The Windmill Roadhouse East London`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Schema.org markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Property schema for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "The Windmill Roadhouse",
          "image": "https://picsum.photos/seed/windmill-exterior/1200/630",
          "@id": "https://windmillroadhouse.co.za",
          "url": "https://windmillroadhouse.co.za",
          "telephone": "+27437229208",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "128 Moore Street",
            "addressLocality": "Quigney Beach, East London",
            "postalCode": "5201",
            "addressCountry": "ZA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -33.0163,
            "longitude": 27.9150
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
              "opens": "07:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Friday", "Saturday"],
              "opens": "07:00",
              "closes": "23:00"
            }
          ],
          "servesCuisine": ["South African", "Burgers", "Pizza", "Takeaway"],
          "priceRange": "R"
        })}
      </script>
    </Helmet>
  );
}
