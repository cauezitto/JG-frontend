import * as S from './styles'
import PaddingWrapper from 'components/PaddingWrapper'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Link from 'next/link'
const AboutSection = () => (
  <S.Wrapper>
    <PaddingWrapper>
      <S.SubWrapper>
        <img
          src="/img/home/aboutSection.png"
          alt="silhueta de um jogador chutando uma bola com um troféu em cima"
        />
        <S.TextWrapper>
          <Heading
            justify="center"
            color="blue100"
            lineBottom={false}
            textAlign="right"
            strongColor="gray200"
            fontSize="extra"
            role="h2"
          >
            DE TORCEDOR PARA TORCEDOR <br />{' '}
            <strong>SAIBA NOSSA HISTORIA</strong>
          </Heading>
          <br />
          <div className="button-wrapper">
            <Link href="/sobre">
              <a>
                <Button
                  fill="gray200"
                  radius={50}
                  color="white100"
                  fontSize="small"
                >
                  CONHECER
                </Button>
              </a>
            </Link>
          </div>
        </S.TextWrapper>
      </S.SubWrapper>
    </PaddingWrapper>
  </S.Wrapper>
)

export default AboutSection
