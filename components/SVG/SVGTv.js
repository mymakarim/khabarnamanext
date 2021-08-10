export default function SVGMosque({ classes }) {
  return (
    <svg
      className={`${classes ? classes : 'h-8'}`}
      fill='currentColor'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M2 20V9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z'
        stroke='currentColor'
        stroke-width='1.5'
      />
      <path
        d='M8.5 2.5L12 6L15.5 2.5'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}