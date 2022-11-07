/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-27 15:42:39
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-07 18:30:36
 * @FilePath: /bookcase-web/src/components/Card/Card.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useRef, useEffect, useState } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import { Image } from 'antd';
import imgs from './data'

import styles from './index.less'

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

const wheel = (y: number) => {
  const imgHeight = window.innerWidth * 0.3 - 20
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const target = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  )

  //const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))

  useGesture(
    {
      // onDrag: ({ active, offset: [x, y] }) =>
      //   api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      // onMove: ({ xy: [px, py], dragging }) =>
      //   !dragging &&
      //   api({
      //     rotateX: calcX(py, y.get()),
      //     rotateY: calcY(px, x.get()),
      //     scale: 1.1,
      //   }),
      // onHover: ({ hovering }) =>
      //   !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      // onWheel: ({ event, offset: [, y] }) => {
      //   event.preventDefault()
      //   wheelApi.set({ wheelY: y })
      // },
    },
    { target, eventOptions: { passive: false } }
  )
  return (
      <animated.div
        ref={target}
        className={styles.card}
        style={{
          // transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}>
        <div className={styles.txt}>
          <div className={styles.insert_time}>2022.11.12</div>
          <div className={styles.desc}>拾忆&nbsp;乞人轶事</div>
        </div>
        <div className={styles.imgbox}>
          <Image
            preview={{ visible: false }}
            //width={'100%'}
            height={'100%'}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            onClick={() => setVisible(true)}
          />
        </div>
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
          </Image.PreviewGroup>
        </div>
      </animated.div>
  )
}
