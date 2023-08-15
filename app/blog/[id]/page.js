import blogData from "../../../data/blogData.json";

export default async function SingleBlog({params}) {
    const { id } = params // get the id from the route query

    const post = blogData.find((p) => {
            return p.id === id
    }

    )
    // if the post is not found, show a 404 page
    if (!post) {
        return <div>404 - Not Found</div>
    }

    // otherwise, display the post title, content, and date
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.date}</p>
        </div>
    )
}
