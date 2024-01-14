import React, { useState } from 'react'
import './Pagination.scss'

const Pagination = ({Page, SetPage, CountItems, itemsPerPage}) => {
    const totalPages = Math.ceil(CountItems / itemsPerPage);
  
    let startPage = Math.max(Page - 2, 1);
    let endPage = Math.min(startPage + 4, totalPages);
    
    if (Page <= 3) {
        endPage = Math.min(5, totalPages);
    }
    
    if (Page > totalPages - 2) {
        startPage = totalPages - 4;
    }

    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => i + startPage);

    return (
        <div className="container">
        <ul className="pagination">
            <li>
                <a href="#" 
                onClick={() => SetPage(Page > 1 ? Page - 1 : Page)}>
                    Prev</a>
            </li>
            {pages.map(num => (
            <li key={num} onClick={() => SetPage(num)} className={Page === num ? 'active' : ''}>
                <a href="#">{num}</a>
            </li>
            ))}
            <li>
                <a href="#" 
                onClick={() => SetPage(Page < totalPages ? Page + 1 : Page)}>
                    Next</a>
            </li>
        </ul>
        </div>

    )
}

export default Pagination