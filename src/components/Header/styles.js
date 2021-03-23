import styled from "styled-components";

export const HeaderWrapper = styled.div`
  nav.navbar {
    height: 63px;
    background: transparent !important;
    .navbar-right__items {
      width: 100%;
      display: flex;
      align-items: center;
      .nav-item {
        a {
          font-family: Muli;
          font-size: 18px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #464646;
        }
      }
    }
  }
  @media (max-width: 768px) {
    nav.navbar {
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;
