import React from 'react'

const DomainList = (props) => {
  //(props)
  const domainList = props.domain.map((domain, index) => {
    return <li key={index}>{domain}</li>
    });
    
  return (
    <ul className='domainListContainer'>
      {domainList}
    </ul>
  )
}

export default DomainList