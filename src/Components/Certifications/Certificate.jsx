import React from 'react'
import './Certificate.css'
import certificate from './Certificate.json'

function Certificate() {
  return (
    <section className="main-certify"  id="certificateid">
      <div className="certifies">
        <h1 className='cert-title'>Certificates</h1>
        <div className="certify">
        <table className='cert-table'>
        <tbody>
        <tr className='trow'>
          <th className='th'>Certificates</th>
          <th className='th'>Platform</th>
          <th className='th'>View Certificate</th>
        </tr>
              {certificate.certificates.map((cer,index)=>{
               return(
                

                 <tr key={index} className='trow'>
                 <td className='td'>{cer.certificate}</td>
                <td className='td'>{cer.platform}</td>
                <td className='td'><a href={cer.link} target='_blank'><button type='button' className='cer-btn'>View</button></a></td>
               </tr>

              
               )
              })}  
        </tbody>   
        </table>
        
        </div>
      </div>
    </section>
  )
}

export default Certificate