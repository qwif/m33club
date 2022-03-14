import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { gsap } from 'gsap'

export default function Home() {
  let headerItem = React.useRef(null)
  let footerItem = React.useRef(null)
  let backgroundItem = React.useRef(null)
  let logoItem = React.useRef(null)
  let titleItem = React.useRef(null)
  let descriptionItem = React.useRef(null)

  React.useEffect(() => {
    gsap.to(footerItem.current, {
      duration: 0.8,
      opacity: 1,
      ease: 'power3.easeIn',
      delay: 0.6,
    })

    gsap.to(backgroundItem.current, {
      duration: 0.8,
      opacity: 1,
      ease: 'power3.easeIn',
      delay: 0.6,
    })

    gsap.to(logoItem.current, {
      duration: 0.8,
      opacity: 1,
      y: -32,
      ease: 'power3.easeOut',
      delay: 1,
    })

    gsap.fromTo(
      logoItem.current,
      {
        rotation: 0,
      },
      { rotation: 360, duration: 20, repeat: -1, ease: 'linear' }
    )

    gsap.to(titleItem.current, {
      duration: 0.4,
      opacity: 1,
      y: -32,
      ease: 'power3.easeOut',
      delay: 1.6,
    })

    gsap.to(descriptionItem.current, {
      duration: 0.4,
      opacity: 1,
      y: -32,
      ease: 'power3.easeOut',
      delay: 1.8,
    })

    gsap.to(headerItem.current, {
      duration: 0.4,
      opacity: 1,
      y: 32,
      ease: 'power3.easeOut',
      delay: 2.2,
    })
  }, [])

  return (
    <div className="page">
      <Head>
        <title>М33</title>
        <meta
          name="description"
          content="Ночной клуб развлекательного комплекса М33. На сегодняшний день клуб является самой популярной площадкой в городе Архангельск, вместимостью до 2000 человек"
        />
      </Head>

      <div className="page__background" ref={backgroundItem}>
        <Image src="/images/main_bg.png" layout="fill" objectFit="cover" alt="" quality={100} />
      </div>

      <header className="header" ref={headerItem}>
        <div className="header__wrapper">
          <a
            className="header__location location"
            href="https://go.2gis.com/rg7ia"
            target="_blank"
            rel="noreferrer"
          >
            <span className="location__icon">
              <Image src="/images/pin.svg" width="36" height="36" alt="" quality={100} />
            </span>
            <div className="location__address">​Московский проспект, 33</div>
          </a>
          <div className="header__social social">
            <a href="https://t.me/m33_arh" target="_blank" rel="noreferrer">
              <span className="social__icon">
                <Image src="/images/telegram.svg" width="36" height="36" alt="" quality={100} />
              </span>
              <span className="social__label">Telegram</span>
            </a>
            <a href="https://vk.com/m33_club" target="_blank" rel="noreferrer">
              <span className="social__icon">
                <Image src="/images/vk.svg" width="36" height="36" alt="" quality={100} />
              </span>
              <span className="social__label">VK</span>
            </a>
          </div>
        </div>
      </header>

      <main className="main container">
        <div className="main__logo logo" ref={logoItem}>
          <div className="logo__circle"></div>
          <Image src="/images/m33_logo.png" width="300" height="300" alt="" quality={100} />
        </div>
        <h1 className="main__title" ref={titleItem}>
          Ночной клуб М33
        </h1>
        <p className="main__description" ref={descriptionItem}>
          Ночной клуб развлекательного комплекса М33. На сегодняшний день клуб является самой
          популярной площадкой в городе Архангельск, вместимостью до 2000 человек
        </p>
      </main>

      <footer className="footer container" ref={footerItem}>
        <p className="footer__offer">
          Сайт носит информационный характер и не является публичной офертой, определяемой
          положениями Статьи 437 ГК РФ
        </p>
      </footer>
    </div>
  )
}
