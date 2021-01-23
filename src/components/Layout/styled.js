import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  width: 100%;

  ${media.greaterThan("large")`
    padding: 0 3.75rem 0 20rem;
  `}

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`
