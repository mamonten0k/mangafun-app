import { Footer, Header } from '../../modules';
import styles from './Provider.module.scss';

const Provider = ({ children }) => {
  return (
    <>
      <Header />
      <main className='container'>{children}</main>
      <Footer />
    </>
  );
};

export { Provider };
