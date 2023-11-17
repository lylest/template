import './empty.css'


function Empty({ label, Icon }) {
  return (
    <div className='empty-center' style={{ marginTop: '6%'}}>
        <div><Icon size={50} color="#666" /></div>
        <p>{label}</p>
    </div>
  )
}

export default Empty