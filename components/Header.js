import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/timeline">
        <a style={linkStyle}>TimeLine</a>
      </Link>
    </div>
  )
}
