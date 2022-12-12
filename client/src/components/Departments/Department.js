import { useParams } from 'react-router-dom';
import Education from './Education/Education';
import ReachingHome from './ReachingHome/ReachingHome';
import Justice from './Justice/Justice';
import Health from './Health/Health';
import ChildServices from './ChildServices/ChildServices';
import Thanks from '../../Thanks';

const Department = ({mistymountain}) => {
    const {departmentId} = useParams();

    return (<>
        
        {departmentId === "education"&&<> <Education/> <Thanks/> </>}
        {departmentId === "reachinghome"&& <> <ReachingHome/> <Thanks/></>}
        {departmentId === "justice" && <> <Justice/> <Thanks/></>}
        {departmentId === "health" && <><Health/> <Thanks/> </>}
        {departmentId === "childservices" && <> <ChildServices/> <Thanks/></>}
    </>)

}

export default Department;