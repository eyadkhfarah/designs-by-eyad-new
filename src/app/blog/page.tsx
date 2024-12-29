// import ProtImages from "@/Components/Portfolio/ProtImages";
import BlogSqr from "@/Components/Blog/BlogSqr";
import { fetchPosts } from "@/lib/notion";
import { Metadata } from "next";
import React from "react";

const siteUrl = process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

export const metadata: Metadata = {
    title: "Blog",
    description: "Discover expert tips, creative insights, and design trends on the Designs By Eyad blog. Explore articles on brand identity, social media strategies, web design, and more to elevate your creative journey.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog",
        description: "Discover expert tips, creative insights, and design trends on the Designs By Eyad blog. Explore articles on brand identity, social media strategies, web design, and more to elevate your creative journey.",
        url: "/blog",
    },
};

export default async function BlogsPage() {
    const post = await fetchPosts()

    return (
        <>
            <section className="lg:px-28 p-10 grid gap-8">
                <h1 className="lg:text-[8rem] md:text-[5rem] text-[2rem] w-fit">
                    Blog
                </h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {post.results.map((post: any) => (
                        <BlogSqr key={post.id} post={post} />
                    ))}
                </div>
            </section>
        </>
    )
}
