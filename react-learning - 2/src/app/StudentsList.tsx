
type Studentype = {
    name: string,
    rollNum: number,
    feePaid: boolean
}

const StudentsList = ({name, rollNum, feePaid}: Studentype) => {
  return (
    <div style={{backgroundColor: "pink"}}>
        <h1>{name}</h1>
        <h3>{rollNum}</h3>
        {
            feePaid?
            <p>your fees is paid</p>:
            <p style={{color: "red"}}>Please clear your dues</p>
        }
    </div>
  )
}

export default StudentsList