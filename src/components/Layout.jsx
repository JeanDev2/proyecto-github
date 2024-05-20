import styled from 'styled-components'
// min-width : Si es menos de 768px ya no aplica - Si es mas si
// max-width : Si es mas de 768px no aplica - si es menos si
const LayoutStyled = styled.main`

min-block-size: 100vh;
max-inline-size: 75rem;
padding: 20px;
margin: auto;

@media screen and (min-width: 768px) {
        display: grid;
        border: 1px solid red;
        grid-template-columns: 278px 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
        grid-template-areas: "profile filters" "profile Repo-list";
    }
`

function Layout({ children }) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
