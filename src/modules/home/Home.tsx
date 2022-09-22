import { withTheme, ThemeProps } from 'styled-components'
import { Mint } from './components/mint'
import { Container } from './style'

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props

  return (
    <Container>
      <Mint/>
    </Container>
  )
})
