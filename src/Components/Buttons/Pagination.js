import React from 'react'
import './Pagination.scss'

const Pagination = ({Page, SetPage}) => {
    console.log('Page', Page)
    return (
        <div className="container">
        <ul className="pagination">
            <li>
            <a href="#">Prev</a>
            </li>
            <li
                onClick={() => SetPage(1)}
                className={Page === 1 ? 'active' : ''}>
            <a href="#">1</a>
            </li>
            <li 
                onClick={() => SetPage(2)}
                className={Page === 2 ? 'active' : ''}>
            <a href="#">2</a>
            </li>
            <li 
                onClick={() => SetPage(3)}
                className={Page === 3 ? 'active' : ''}>
            <a href="#">3</a>
            </li>
            <li 
                onClick={() => SetPage(4)}
                className={Page === 4 ? 'active' : ''}>
            <a href="#">4</a>
            </li>
            <li 
                onClick={() => SetPage(5)}
                className={Page === 5 ? 'active' : ''}>
            <a href="#">5</a>
            </li>
            <li>
            <a href="#">Next</a>
            </li>
        </ul>
        </div>

    )
}

export default Pagination