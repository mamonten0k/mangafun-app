import { Footer, Header } from '../../modules';

const Provider = ({ children }) => {
  return (
    <>
      <Header />
      <main className='shift'>{children}</main>
      <Footer />
    </>
  );
};

export { Provider };
