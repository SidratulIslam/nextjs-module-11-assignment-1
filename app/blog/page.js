import blogData from "@/data/blogData.json";
import Link from "next/link";
import styles from './blog.module.css'

export default async function Blog() {
    const blogs =  blogData
    return (
        <div>
            <section>
                <h1 className={styles.title}>Blogs</h1>
                <div className="mt-5">
                    {
                        blogs.map(blog => {
                            return (
                                <Link className={styles.link} key={blog.id} href={`/blog/${blog.id}`}>
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
