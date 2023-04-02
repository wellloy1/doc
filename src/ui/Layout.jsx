import Page from './Page';
import Sidebar from './Sidebar';
import { Outlet } from '@solidjs/router';

export default function Layout() {
    return (
        // <layout>
        <>
            <Sidebar />
            <Page>
                <Outlet />
            </Page>
        </>
        // </layout>
    );
}
