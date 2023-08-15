import blogData from "@/data/blogData.json";
import Link from "next/link";

export default async function Blog() {
    const blogs =  blogData
    return (
        <div>
            <section>
                <h1>Blog</h1>
                <div className="mt-5">
                    {
                        blogs.map(blog => {
                            return (
                                <Link key={blog.id} href={`/blog/${blog.id}`}>
                                    <p className="pb-5" >{blog.title}</p>
                                </Link>
                                )

                        })
                    }
                </div>
            </section>
        </div>

    )
}
