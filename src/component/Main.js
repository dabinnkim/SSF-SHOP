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
                    <img src="https://www.ssfshop.com/v3/images/svgs/logo.svg" alt="ssf샵이라구요"></img>
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
            <div className='inner'>
                <div className="category">
                    <div className="main-nav">
                        <ul>
                            <li>
                                <a href='#'>여성</a>
                                <div className="dropdown-nav">
                                    
                                </div>
                            </li>
                            <li>남성</li>
                            <li>키즈</li>
                            <li>럭셔리</li>
                            <li>백&슈즈</li>
                            <li>스포츠</li>
                            <li>골프</li>
                            <li>뷰티</li>
                            <li>라이프</li>
                            <li>아울렛</li>
                        </ul>
                    </div>
                    <div class="sub-nav">
                        <ul>
                            <li>랭킹</li>
                            <li>브랜드</li>
                            <li>매거진</li>
                            <li>기획전</li>
                            <li>이벤트</li>
                        </ul>
                    </div>
                </div>
                <div class="special-nav">
                    <ul>
                        <li>삼성전자</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <main>

    </main>  
    </>
  )
}

export default Main
