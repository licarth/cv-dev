import React from 'react'

export const RoundLogo = ({ img, size, className }) => {
    return <div className={className + " roundLogo"}>
        <div>
            <svg viewBox="0 0 200 200">
                <defs>
                    <filter id="f1" x="-20%" y="-20%" width="200%" height="200%">
                        <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
                        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>
                <circle cx="100" cy="100" r="100"
                    filter="url(#f1)"
                />
            </svg>
        </div>
        <div
            className='logo'
            style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                position: 'absolute'
            }}>
            <img src={img}
                style={{
                    margin: 'auto',
                    width: size,
                }}
            />
        </div>
    </div>
}


export const LogoLeft = ({ img, size }) => {
    return <RoundLogo img={img} size={size} className={"logoleft"} />
}

LogoLeft.defaultProps = {
    size: '70%',
};
