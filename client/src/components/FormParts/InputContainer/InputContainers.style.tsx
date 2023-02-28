import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin: 2rem 1rem;
  width: 25rem;
  /* background-color: red; */
  input {
    font-size: 1.2rem;
    padding: 10px 10px 10px 10px;
    display: block;
    width: 25rem;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;

    &:focus {
      outline: none;
    }

    &:focus ~ label {
      top: -20px;
      font-size: 1.1rem;
      color: #4096ff;
    }

    &:valid ~ label {
      top: -20px;
      font-size: 1.1rem;
      color: #4096ff;
    }

    &:valid ~ label {
    }

    &:focus ~ .bar:before {
      width: 54%;
    }

    &:focus ~ .bar:after {
      width: 50%;
    }
  }

  label {
    color: #999;
    font-size: 1.3rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
  }

  .bar {
    position: relative;
    display: block;
    width: 25rem;

    &:before {
      left: 50%;
      content: "";
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: #4096ff;
      transition: 0.2s ease all;
    }

    &:after {
      right: 50%;
      content: "";
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: #4096ff;
      transition: 0.2s ease all;
    }
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #4096ff;
    }

    to {
      width: 0;
      background: transparent;
    }
  }
`;
