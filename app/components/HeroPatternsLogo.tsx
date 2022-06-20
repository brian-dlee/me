import React from "react"

interface Props {
  className?: string;
}

export default function HeroPatternsLogo(props: Props): JSX.Element {
  return (
    <svg className={props.className} width="18" height="18" viewBox="0 0 34 36" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12.5V16h-6V0h-4v16H6v.07c-3.392.486-6 3.404-6 6.93s2.608 6.444 6 6.93V30h8V20h6v16h4V20h3c3.866 0 7-3.134 7-7s-3.134-7-7-7h-7v6.5zM4 23c0-1.657 1.347-3 3-3h3v6H7c-1.657 0-3-1.347-3-3zm26-10c0 1.657-1.347 3-3 3h-3v-6h3c1.657 0 3 1.347 3 3z" fill="black" fillRule="evenodd" />
    </svg>
  )
}
