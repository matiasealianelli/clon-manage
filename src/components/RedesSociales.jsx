import '../styles/RedesSociales.css';

export default function RedesSociales() {
    return (
        <div className='contRedes'>
            <a href='#' target='_blank' className='linkIcon'>
                <img className='iconRed' src='/assets/img/icon-facebook.svg' alt='icono-facebook'/>
            </a>
            <a href='#' target='_blank' className='linkIcon'>
                <img className='iconRed' src='/assets/img/icon-youtube.svg' alt='icono-youtube'/>
            </a>
            <a href='#' target='_blank' className='linkIcon'>
                <img className='iconRed' src='/assets/img/icon-twitter.svg' alt='icono-twitter'/>
            </a>
            <a href='#' target='_blank' className='linkIcon'>
                <img className='iconRed' src='/assets/img/icon-pinterest.svg' alt='icono-pinterest'/>
            </a>
            <a href='#' target='_blank' className='linkIcon'>
                <img className='iconRed' src='/assets/img/icon-instagram.svg' alt='icono-instagram'/>
            </a>
        </div>
    )

}