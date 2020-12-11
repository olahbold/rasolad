import React, { Fragment } from "react";
import  {Carousel} from 'antd'

export default function header() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Fragment>
        <div>
          <Carousel autoplay effect="fade">
            <div>
              <img src="co"  alt = "logo"/>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </Fragment>
    </div>
  );
}
