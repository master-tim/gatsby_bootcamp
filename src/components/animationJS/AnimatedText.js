import React, { useState } from "react"
import { useTrail, a } from "@react-spring/web"
import {useColorModeValue} from "@chakra-ui/react"

import * as styles from "./animtexstyles.module.css"

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 70 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 100,
    height: open ? 150 : 0,
    from: { opacity: 0, x: 50, height: 0 }
  })

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function AnimatedText() {
  const [open, set] = useState(true)
  
  const stylesNameMode= {
    color: `${useColorModeValue('#1C77C3', '#FFEB3B')}`,
  };
  const stylesJobMode= {
    color: `${useColorModeValue('#3F3F3F', '#F4F4F4')}`,
  };

  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <Trail open={open}>
        <span style={stylesNameMode}>Temirlan</span>
        <span style={stylesNameMode}>Dzhoroev</span>
        <span style={stylesJobMode}>Frontend</span>
        <span style={stylesJobMode}>Developer</span>
      </Trail>
    </div>
  )
}
