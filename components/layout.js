import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
        </Head>
        <Navbar />
        {props.children}
    </div>
);

export default Layout;