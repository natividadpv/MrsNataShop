import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row '>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src="./images/mrsnata_logo.png" alt="Mrs Nata Shop Logo" width="250" height="100"></img>
                </div>
            </div>

            <div className='col-12 col-md-5 mt-2 mt-md-0'>
                <div className='imput-group'>
                    <input
                    type="text"
                    id="search_field"
                    class="form-control"
                    placeholder='¿Qué producto buscas?'></input>
                    <div class="input-group-append">
                    <button id="search-btn" class="btn">
                        <i class="fa fa fa" aria-hidden="true">Buscar</i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <button className="btn" id="login-btn">Inicie Sesión</button>
                <span id="cart" className="ml-3">Carrito</span>
                <span className="ml-1" id="cart_count">2</span>
            </div>
        </nav>

    </Fragment>

   
  )
}

export default Header