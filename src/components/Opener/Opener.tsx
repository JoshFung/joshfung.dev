import styles from './Opener.module.css';
import Title from '../Title';
import Subheadings from '../Subheadings';

function Opener() {
  return (
    <div className={`w-full h-full flex flex-col justify-between p-4 xs:px-3 sm:px-8 ${styles.openerBg}`}>
      <Title />
      <Subheadings />
    </div>
  )
}
export default Opener;

