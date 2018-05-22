import React, {Component, ReactElement} from "react"

const styles = require("./Homing.sass")
const arrow = require("../../static/images/arrow-down.png")

interface IProps {
  title: string | JSX.Element
  src?: string
}

class HomingComponent extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const style = this.props.src
      ?  {
        background: `url(${this.props.src}) center center`,
        backgroundSize: "cover",
      }
      : {}

    return (
      <div className={styles.homing} style={style}>
        <h1 className={styles.homingTitle}>{this.props.title}</h1>
        <div className={styles.homingArrow}>
          <a href="#">
            <img src={arrow} alt="Bottom arrow" />
          </a>
        </div>
      </div>
    )
  }
}

export default HomingComponent