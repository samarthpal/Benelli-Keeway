import s from './styles.module.scss'
import images from 'images'

const linkData = [
  {
    field: 'SHOWROOM REVIEWS',
    link: '/',
    image: images.review
  },
  {
    field: 'WORKSHOP REVIEWS',
    link: '/',
    image: images.review
  },
  {
    field: 'INSTAGRAM',
    link: '/',
    image: images.instagram
  },
  {
    field: 'FACEBOOK',
    link: '/',
    image: images.facebook
  },
  {
    field: 'YOUTUBE',
    link: '/',
    image: images.youtube
  }
]

export default function Main() {
  return (
    <div className={s.main}>
      <div className={s.inner}>
        <div className={s.logo}>
          <img src={images.logo1} alt='' />
        </div>
        <div className={s.poweredByLogo}>
          <img src={images.logo2} alt='' />
        </div>
        <div className={s.title}>Click Here For</div>
        <div className={s.links}>
          {linkData.map(({ field, link, image }, i) => (
            <a href={link} key={i} className={s.link} target='_blank' rel='noreferrer'>
              <div>
                <img src={image} alt='' />
              </div>
              <div>{field}</div>
            </a>
          ))}
        </div>
        <div className={s.bottom}>
          <div className={s.left}>
            <img src={images.bike1} alt='' />
          </div>
          <div className={s.right}>
            <img src={images.bike2} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
