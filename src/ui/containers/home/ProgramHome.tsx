import { ButtonCommon } from '@/ui/components/common'

export const ProgramHome = () => {
  const redirectApplication = () => {
    window.location.href = '/application'
  }
  return (
    <div className="programHome">
      <div className="programHome__text">
        <p>Seamless service targeting your unique needs</p>
        <div></div>
        <p>
          Lifestyle choices vary, which is why we take the time to learn about
          your individual situation and requirements.
        </p>
        <p>
          We’ll assist you from start to ﬁnish, ensuring you have the insight
          and knowledge needed to succeed.
        </p>
      </div>
      <div className="programHome__residency">
        <div className="programHome__residency__circle"></div>
        <div className="programHome__residency__text">
          <p>Residency Programs</p>
          <div></div>
          <p>
            Mexican residency safeguards against future instability and opens up
            a world of opportunities for investors and their families. A Golden
            Visa permit provides visa-free access to many countries across the
            globe.
          </p>
        </div>
        <div className="programHome__residency__button">
          <ButtonCommon
            customClassName="buttonHome"
            text="Get started"
            buttonRunFunction={redirectApplication}
          />
        </div>
      </div>
    </div>
  )
}
