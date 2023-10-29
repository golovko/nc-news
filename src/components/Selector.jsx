import React, { useState } from 'react';

export default function Selector({ order, setOrder, sortBy, setSortBy }) {
  return (
    <div className='selector'>
      <div className='sort-by'>
        <p>Sort by: </p>
        <select
          name='sort-by'
          onChange={(e) => setSortBy(e.target.value)}
          defaultValue={sortBy}>
          <option value='author'>author</option>
          <option value='title'>title</option>
          <option value='article_id'>article id</option>
          <option value='topic'>topic</option>
          <option value='created_at'>created at</option>
          <option value='votes'>votes</option>
        </select>
      </div>
      <div className='order'>
        <p>Order: </p>
        <button
          onClick={(e) => setOrder((val) => (val === 'asc' ? 'desc' : 'asc'))}>
          {order}
        </button>
      </div>
    </div>
  );
}
