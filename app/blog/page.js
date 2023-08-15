import blogData from "@/data/blogData.json";

export default async function Blog() {
    const blogs =  blogData
    return (
        <div>
            <section>
                <h1>Blog</h1>
                <div className="mt-5">
                    {
                        blogs.map(blog => {
                            return <p className="pb-5" key={blog.id}>{blog.title}</p>
                        })
                    }
                </div>
            </section>
        </div>

    )
}
