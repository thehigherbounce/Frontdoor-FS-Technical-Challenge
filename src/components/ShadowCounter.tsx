import React from 'react';
import ReactShadowRoot from 'react-shadow-root';
const { constructableStylesheetsSupported, shadowRootSupported } = ReactShadowRoot;

const ShadowCounter = () => {
    const [cnt, setCnt] = React.useState<number>(0);
    const increment = () => {
        setCnt((prev) => prev + 1);
    }
    const styles = `:host {
        display: inline-flex;
      }
      span {
        background-color: #333;
        border-radius: 3px;
        color: #fff;
        padding: 1px 5px;
      }
      button {
        background-color: #fff;
        border: 1px solid currentColor;
        border-radius: 3px;
        cursor: pointer;
        outline: 0;
      }
      button:active {
        background-color: #333;
        color: #fff;
      }
      button,
      span {
        margin: 0 2px;
      }`;
    return (
        <div> {/* The shadow root will be attached to this DIV */}
            <ReactShadowRoot>
                <style>{styles}</style>
                <span>{cnt}</span> <button onClick={increment}>Click Me</button>
            </ReactShadowRoot>
        </div>
    );
}
export default ShadowCounter;