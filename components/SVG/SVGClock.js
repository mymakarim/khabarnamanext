export default function SVGClock({ classes }) {
  return (
    <svg className={classes ? classes : 'h-5 text-red-800'} fill='none' viewBox='0 0 24 24'>
      <g id='Iconly/Curved/Time Square'>
        <g id='Time Square'>
          <path
            id='Stroke 1'
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M2.75 12C2.75 18.937 5.063 21.25 12 21.25C18.937 21.25 21.25 18.937 21.25 12C21.25 5.063 18.937 2.75 12 2.75C5.063 2.75 2.75 5.063 2.75 12Z'
            stroke='#000'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            id='Stroke 3'
            d='M15.39 14.018L11.999 11.995V7.63403'
            stroke='#000'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
      </g>
    </svg>
  )
}
