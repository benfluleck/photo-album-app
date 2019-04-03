import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Title from '<atoms>/Title/Title'

const PageTemplate = ({
  pageTitle,
  children
}) => (
  <PageTemplate.Container>
    <PageTemplate.NavBar />
    <PageTemplate.TitleContainer>
      <Title fontSize="lg">
        {pageTitle}
      </Title>
    </PageTemplate.TitleContainer>
    <PageTemplate.Content>
      {children}
    </PageTemplate.Content>
    <PageTemplate.Footer />
  </PageTemplate.Container>
)

PageTemplate.Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${props => props.theme.spacing.basePlusXs};
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "nav"
    "title"
    "content"
    "footer";
  min-height: 100vh;`

PageTemplate.NavBar = styled.div`
  ${({ theme: { spacing, textColors } }) => `
  background-color: ${textColors.navbar};
  grid-area: nav;
  padding: ${spacing.smPlusBasePlusxs} ${spacing.basePlusXs};
  display: flex;
`}`

PageTemplate.Content = styled.div`
${({ theme: { spacing } }) => `
  grid-area: content;
  padding: ${spacing.sm} ${spacing.mdPlusBase};
`}`

PageTemplate.Footer = styled(PageTemplate.NavBar)`
  grid-area: footer;
`

PageTemplate.TitleContainer = styled.div`
  grid-area: title;
  border-bottom: 0.1rem solid  ${props => props.theme.textColors.navbar};
  padding-left: ${props => props.theme.spacing.mdPlusBase};
`

PageTemplate.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default PageTemplate
