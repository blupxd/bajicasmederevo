// Structured data for search engines, one <script type="application/ld+json"> per object
const JsonLd = ({ data }: { data: object }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
);

export default JsonLd;
