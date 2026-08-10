import { notFound } from "next/navigation";
import { serviceData } from "./service-data";
import ServiceDetail from "./service-detail";

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) notFound();

  return <ServiceDetail slug={slug} service={service} />;
}
