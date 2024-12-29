import { allProtoDesigns, allProtoWebs } from "contentlayer/generated";
import { NavContacts } from "@/lib/NavContact";
import { MetadataRoute } from "next";
import { fetchPosts } from "@/lib/notion";

interface sitemap {
  url: String;
};

const GetWeb = () => {
  const doc = allProtoWebs;
  return doc;
};

const GetDesign = () => {
  const doc = allProtoDesigns;
  return doc;
};

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.apps";
  const web = GetWeb();
  const designs = GetDesign();
  const post = await fetchPosts()

  const allWeb =
    web?.map((web) => {
      return {
        url: `${siteUrl}${web.slug}` || "" || undefined,
        lastModified: new Date() || undefined,
        changeFrequency: "weekly" || undefined,
        priority: 0.6 || undefined,
      };
    }) || [];

  const allDesing =
    designs?.map((design) => {
      return {
        url: `${siteUrl}${design.slug}` || undefined,
        lastModified: new Date() || undefined,
        changeFrequency: "weekly" || undefined,
        priority: 0.6 || undefined,
      };
    }) || [];

  const contacts =
    NavContacts?.filter((val) => {
      if (!val.name.includes("Form")) {
        return val;
      }
    }).map((contact) => {
      return {
        url: `${siteUrl}/contact${contact.link}` || undefined,
        lastModified: new Date() || "" || undefined,
        changeFrequency: "weekly" || undefined,
        priority: 0.6 || undefined,
      };
    }) || [];

  const bolgs =
  post.results?.map((post:any) => {
      return {
        url: `${siteUrl}/blog/${post.properties.Slug.rich_text[0].plain_text}` || undefined,
        lastModified: new Date() || "" || undefined,
        changeFrequency: "weekly" || undefined,
        priority: 0.6 || undefined,
      };
    }) || [];

  return [
    
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteUrl + "/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: siteUrl + "/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...allWeb,
    ...allDesing,
    ...contacts,
    ...bolgs
  ];
}
