import styled from "styled-components";


export default styled.a`

    position: absolute;
    bottom: 9vh;
    left: calc(50% - 35px);
    display: block;
    width: 70px;
    height: 70px;
    border: 2px solid #c934f8;
    background-size: 14px auto;
    border-radius: 50%;
    z-index: 2;
    --webkit-animation: bounce 2s infinite 2s;
    animation: bounce 2s infinite 2s;
    --webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
   
   &:before {
        position: absolute;
        top: calc(50% - 14px);
        left: calc(50% - 10px);
        transform: rotate(-45deg);
        display: block;
        width: 20px;
        height: 20px;
        content: "";
        border: 2px solid #c934f8;
        border-top-width: 2px;
        border-right-width: 2px;
        border-bottom-width: 2px;
        border-left-width: 2px;
        border-width: 0px 0 2px 2px;
  }


`;