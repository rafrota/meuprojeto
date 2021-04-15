import Link from "next/link"

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>Link para Sobre</a>
            </Link>
            <Link href="/tempo">
                <a>Link para Tempo</a>
            </Link>
        </div>
    )
}

export default Home