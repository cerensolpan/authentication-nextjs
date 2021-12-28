import Link from "next/link";

const Nav = () => (
    <header>
        <nav>
            <Link href="/">
                <a>Note App</a>
            </Link>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
        </nav>
    </header>
)

export default Nav