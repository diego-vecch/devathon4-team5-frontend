import Link from 'next/link'

type ButtonForLink = {
  name: string
  url?: string
  padding?: string
}
export function ButtonLink ({ name = 'button', url = '/', padding = 'px-2' }: ButtonForLink): JSX.Element {
  return (
    <Link
      href={url}
      className={`bg-light-btn text-light-bg1 rounded-2xl h-8 ${padding} flex justify-center items-center hover:text-light-nav ml-0`}
    >
      <div>{name}</div>
    </Link>
  )
}
