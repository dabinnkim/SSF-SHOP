import React from 'react'
import '../css/Main.css';

const Main = () => {
  return (
    <>
    {/* 네비-로고 */}
      <header className="gnb">
        <div className='top-area'>
            <div className='nav'>
                <a href="#">마이페이지</a> 
                <a href="#">로그인</a> 
            </div>
        </div>
        <div className="gnb-wrap">
            <div className="inner">
                <h1>
                <a href="/">
                    <img src="https://www.ssfshop.com/v3/images/svgs/logo.svg" alt="ssf샵이에요"></img>
                </a>
                </h1>
            </div>
            <div className='aside'>
                <div className='shop'>
                    <a href="https://www.ssfshop.com/10-Corso-Como/main?brandShopNo=BDMA23&brndShopId=CCPB&&gnb=true">
                        <img src="http://www.ssfshop.com/v3/images/svgs/logo-10cc.svg"></img>
                    </a>
                    <a href="https://www.ssfshop.com/beaker/main?brandShopNo=BDMA09&brndShopId=MCBR&gnb=true">
                        <img src="https://www.ssfshop.com/v3/images/svgs/logo-beaker.svg"></img>
                    </a>
                    <a href="https://www.ssfshop.com/ANOTHER-SHOP/main?brandShopNo=BDMA19&brndShopId=ORBR&gnb=true">
                        <img src="https://www.ssfshop.com/v3/images/svgs/logo-another.svg"></img>
                    </a>
                </div>
            </div>
        </div>
        {/* 네비-카테고리 */}
        <div className='ctg-wrap'>

        </div>
    </header>
    <main>

    </main>  
    </>
  )
}

export default Main
