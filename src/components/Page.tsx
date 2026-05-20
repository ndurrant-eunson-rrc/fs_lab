import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import type { Department } from "./types";

interface Props {
    departments: Department[];
}

export default function Page({ departments }: Props) {
    return (
        <>
        <Header />
        < Main departments = { departments } />
            <Footer />
            </>
  );
}