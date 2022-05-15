import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          alert("You clicked outside of me!");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
  /**
   * Component that alerts if you click outside of it
   */
  function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
  
    return <Container ref={wrapperRef}>{props.children}</Container>;
  }
  
  OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
  };
  
  export default OutsideAlerter;

  const Container = styled.div`
    margin-top: 10%;

    @media screen and (max-width: 767px){
        margin: unset;
    }
  `