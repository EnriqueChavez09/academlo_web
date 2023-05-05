/* eslint-disable @next/next/no-img-element */
import { AssetData } from '@/lib/utils/helpers/class'

export const InvestmentHome = () => {
  return (
    <div className="investmentHome">
      <div className="investmentHome__image">
        <img
          src={AssetData.imageInvestment.src}
          alt={AssetData.imagePlaceholder}
        />
      </div>
      <div className="investmentHome__text">
        <p>The most valuable investment you may ever make</p>
        <div></div>
        <p>
          Resimex is a multidisciplinary firm offering bespoke residence and
          citizenship solutions in Mexico.
        </p>
        <p>
          Whether it’s matching you to your ideal investment, Golden Visa
          program or tax benefit, we help investors successfully uproot their
          lives and lifestyles.
        </p>
      </div>
    </div>
  )
}
