import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex space-x-6">
            <div><Link href="/">Home</Link></div>
            <div><Link href="/blog">Blog</Link></div>
        </nav>
    )
}
