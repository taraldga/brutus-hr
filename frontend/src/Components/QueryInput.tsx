import React, { useState } from 'react';

const QueryInput: React.FC<{submitQuery: (newQuery: string) => void}> = ({submitQuery}) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <label className="form-label">Query</label>
      <div className="columns col-oneline">
        <input className="form-input column col-5" type="text" id="input-query" placeholder="Query" onChange={(e) => {setQuery(e.target.value)}}/>
        <button className="btn column col-2" onClick={() => submitQuery(query)}>Submit</button>
      </div>
    </div>
  )
}


export default QueryInput;